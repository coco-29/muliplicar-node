//requireds
const fs = require('fs');

const color = require('colors');


let imprimirTabla = (base, limite) => {
    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i} \n`;
    }

    console.log(data.red);

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base} al ${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else

                resolve(`tabla-${base} al ${limite}.txt`);
        });



    });


}

module.exports = {
    crearArchivo,
    imprimirTabla

}