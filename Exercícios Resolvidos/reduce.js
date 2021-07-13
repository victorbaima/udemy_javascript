const numeros = [ 1, 2, 3, 4, 5, 6 ]

const valorTodo = numeros.reduce(function(valorInicial, total){
    let resultado = valorInicial + total
    return resultado
})

const tamanho = numeros.length
const media = valorTodo / tamanho
console.log(valorTodo)
console.log(media)