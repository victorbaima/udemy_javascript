const moduloA = require('./moduloA')    // REFERENCIA UM MÓDULO DENTRO DO SISTEMA A SER REQUISITADO!
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.atelogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)