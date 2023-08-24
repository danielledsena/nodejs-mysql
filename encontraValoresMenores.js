const listaLivros = require('./aula-3/array');

function encontraValoresMenores(pivo, array) {
    let valoresMenores = 0;

    for(let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];
        if(produtoAtual.preco < pivo.preco) {
            valoresMenores++;
        }
    }

    trocaLugar(array, array.indexOf(pivo), valoresMenores);
    return array;
}

function trocaLugar(array, de, para) {
    const el1 = array[de];
    const el2 = array[para];

    array[para] = el1;
    array[de] = el2;
}

function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)]; 
    encontraValoresMenores(pivo, array);
    let valoresMenores = 0;

    for (let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando];
        if(atual.preco <= pivo.preco && atual !== pivo) {
            trocaLugar(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }

    return array;
}

//console.log(divideNoPivo(listaLivros));

module.exports = trocaLugar;