console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1  // O a FICARÁ VISÍVEL FORA DO AQRUIVO!
exports.b = 2   // IDEM
module.exports.c = 3    // IDEM

exports = null
console.log(module.exports)

exports = {     // MODO INCORRETO DE SOBRESCREVER O module.exports (NÃO RETORNA NADA!)
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }   // MODO CORRETO!!!