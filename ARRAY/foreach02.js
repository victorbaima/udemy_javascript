Array.prototype.forEach2 = function(callback) { // UTILIZA A HERANÇA PARA CARACTERIZAR A FUNÇÃO forEach2
    for(let i = 0; i < this.length; i++) {  // LAÇO for UTILIZADO PARA PERCORRER O ARRAY!
        callback(this[i], i, this)  // FUNÇÃO callback CHAMADA PASSANDO 3 PARÂMETROS: VALOR, ÍNDICE E ARRAY COMPLETO!
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {  // PERCORRE O ARRAY SEMPRE UTILIZANDO UM LAÇO FOR QUE JÁ VEM EMBUTIDO!
    console.log(`${indice + 1}) ${nome}`)
})