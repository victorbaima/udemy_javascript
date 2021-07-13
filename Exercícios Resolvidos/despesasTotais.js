function despesasTotais(obj) {
    const pegaPreco = obj.map(elem => elem.preco)
    const valorTotal = (acumulador, atual) => acumulador + atual
    const somaPreco = pegaPreco.reduce(valorTotal)
    console.log(somaPreco)
}

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ])

despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ])