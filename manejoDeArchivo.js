const fs = require('fs');

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

module.exports = Contenedor;