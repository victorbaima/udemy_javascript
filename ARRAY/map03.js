Array.prototype.map2 = function(callback) {
    const novoArray = []    // 1 - CRIA UM NOVO ARRAY
    for(i = 0; i < this.length; i++) {  // 2 - PERCORRE O ARRAY ORIGINAL
        novoArray.push(callback(this[i], i, this))  // 3 - IMPLEMENTA NO NOVO ARRAY AS MODIFICAÇÕES NECESSÁRIAS
    }
    return novoArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// RETORNAR UM ARRAY APENAS COM PREÇOS

const paraObjeto = json => JSON.parse(json) // CONVERTE TEXTO PARA OBJETO!
const apenasPreco = produto => produto.preco    // FILTRA APENAS O PREÇO DE CADA PRODUTO!

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)