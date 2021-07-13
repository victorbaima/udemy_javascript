const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(function(p) {
    return false    // CONDIÇÃO PARA FILTRAGEM!
}))

// FILTRAR PRODUTOS ACIMA DE R$ 500,00 E FRÁGEIS:

// MINHA SOLUÇÃO:
const busca = produtos.filter(function(p) {
   return p.preco > 500 && p.fragil == true
})
console.log(busca)

// SOLUÇÃO PROFESSOR:
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil    // NÃO É NECESSÁRIO produto.fragil == true POIS JÁ FICA IMPLÍCITO QUE O PRODUTO É FRÁGIL!

console.log(produtos.filter(caro).filter(fragil))