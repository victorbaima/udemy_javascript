// COM ARRAY DE OBJETOS:

let faixas = [
    { tooltip: 'até 700,00', minimo: 0, maximo: 700 },
    { tooltip: 'de 700,00 até 1000,00', minimo: 700.01, maximo: 1000 },
    { tooltip: 'acima de 1000,00', minimo: 1000.01, maximo: 99999999999 }
]


// COM FACTORY FUNCTION:

function criarFaixaPreco(tooltip, minimo, maximo) {
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreco('a', 1, 100),
    criarFaixaPreco('b', 100, 1000),
    criarFaixaPreco('c', 1000, 10000)
]


// COM CONSTRUCTOR FUNCTION:

function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco('d', 10, 20),
    new FaixaPreco('e', 20, 30),
    new FaixaPreco('f', 30, 40)
]

console.log(faixas)
console.log(faixas2)
console.log(faixas3)