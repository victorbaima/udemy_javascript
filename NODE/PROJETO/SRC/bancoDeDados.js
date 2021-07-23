const sequence = {
    _id: 1,
    get id() { return this._id++ }  // DESTA FORMA, CHAMANDO O ATRIBUTO ELE DISPARA A FUNÇÃO!
}

const produtos = {}

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

module.exports = { salvarProduto, getProduto, getProdutos } // TORNA AS 3 FUNÇÕES VISÍVEIS FORA DO ARQUIVO!
