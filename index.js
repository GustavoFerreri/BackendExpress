const express = require('express');
const fs = require('fs');
const app = express();

class Contenedor {
    constructor(nombre){
        this.nameFile = `./${nombre}.json`;
    }
    getAll= async () => {
        try{
            const dataReturn = await fs.promises.readFile(this.nameFile, 'utf-8')
            return JSON.parse(dataReturn, null, ' ');
        }
        catch(e){
            console.log('Error al crear o modificar el archivo', e)
        }
    }
}

const file = new Contenedor('productos')

app.get('/product', (req, res)=>{
    file.getAll().then(prod=>{
        res.send({
            message: 'Respuesta correcta',
            data: prod
        })
    })
})

app.get('/productRandom', async (req, res)=>{
    let prod = await file.getAll()
    res.send({
        message: 'Respuesta correcta',
        data: prod[Math.floor(Math.random()*prod.length)]
    })
})

app.listen(8080, ()=>{
    console.log('Server listen');
})