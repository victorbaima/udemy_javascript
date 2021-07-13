const numeros = [ 1, 2, 3, 4, 5, 6 ]

const pares = numeros.filter(function(e){
    return e % 2 == 0
})
console.log(pares)

const impares = numeros.filter(function(e){
    return e % 2
})
console.log(impares)