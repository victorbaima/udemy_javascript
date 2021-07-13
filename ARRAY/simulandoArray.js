const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }  // CRIAÇÃO DE UM OBJETO!
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', { // MÉTODO toString UTILIZADO PARA IMPRIMIR NO CONSOLE APENAS STRINGS, P/ QUE SE ASSEMELHE A UM ARRAY!
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)