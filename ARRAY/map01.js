const nums = [1, 2, 3, 4, 5]

// map É UMA ESPÉCIE DE LAÇO for COM PROPÓSITO!
let resultado = nums.map(function(e) {
    return e * 2    // CRIAÇÃO DE UM NOVO ARRAY COM OS VALORES DOS ELEMENTOS INICIAIS DOBRADOS!
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)  // EXECUTA AS 3 OPERAÇÕES (SOMA, TRIPLO, MONETIZAÇÃO) E EXIBE UM NOVO ARRAY!
console.log(resultado)