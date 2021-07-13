Array.prototype.filter2 = function(callback) {
    const novoArray = []                    // 1 - CRIA UM NOVO ARRAY
    for(let i = 0; i < this.length; i++) {  // 2 - PERCORRE O ARRAY INICIAL
        if(callback(this[i], i, this)) {    // 3 - FILTRA OS ELEMENTOS
            novoArray.push(this[i])         // 4 - INSERE OS ELEMENTOS VERDADEIROS NO NOVO ARRAY
        }
    }
    return novoArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))