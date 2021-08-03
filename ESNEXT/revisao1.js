// let e const
{
    var a = 2   // VARIÁVEL DECLARADA COM var PODE SER ACESSADA FORA DO BLOCO!
    let b = 3   // JÁ A VARIÁVEL let TEM ESCOPO DE BLOCO E NÃO PODE SER ACESSADA FORA DELE!
    console.log(b)
}

console.log(a)

// TEMPLATE STRING
const produto = 'iPad'
console.log(`${produto} é caro!`)

// DESTRUCTURING (DESESRTUTURANDO)
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)