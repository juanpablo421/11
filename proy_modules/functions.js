require('colors');

function repetirCaracter(caracter, veces) {
    const resultado = caracter.repeat(veces);
    return resultado;
}

function contadorBase(base) {
    for (let i = 0; i < base; i++) {
        for (let j = 0; j < base; j++) {
            const num = i * base + j;
            console.log('======================'.cyan)
            console.log((`Número en base ${base}: ${num.toString(base)}`));
            console.log('======================'.bgCyan)
        }
    }
}

module.exports = {
    repetirCaracter: repetirCaracter,
    contadorBase: contadorBase
};
