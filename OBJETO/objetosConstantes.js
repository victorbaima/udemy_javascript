// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // CONGELA O OBJETO pessoa IMPEDINDO QUE SEUS ATRIBUTOS SEJAM MODIFICADOS/EXCLUÍDOS!

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

// CRIANDO UM OBJETO CONSTANTE DESDE O INÍCIO:
const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)