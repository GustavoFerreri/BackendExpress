const express = require('express');
const Contenedor = require ('./manejoDeArchivo')
const app = express();

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