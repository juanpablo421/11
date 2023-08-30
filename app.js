const functions = require('./proy_modules/functions.js');
const readline = require('readline');
const colors = require('colors');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numRepetitions = 10; // Cambia el número de repeticiones según tus necesidades

for (let i = 0; i < numRepetitions; i++) {
    rl.question("Ingresa un carácter: ".bgMagenta, function(caracterIngresado) {
        rl.question("Ingresa el número de veces que desea repetirlo: ".green, function(vecesIngresadas) {
            const caracter = caracterIngresado.toString();
            const veces = parseInt(vecesIngresadas);

            const resultado = functions.repetirCaracter(caracter, veces);
            console.log(`Resultado: ${resultado}`.bgRed);

            if (i === numRepetitions - 1) {
                rl.close(); // Cerrar la interfaz después de la última repetición
            }
        });
    });
}
