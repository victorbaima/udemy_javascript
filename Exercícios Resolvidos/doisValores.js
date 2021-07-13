// NÚMERO MÁXIMO ENTRE OS VALORES:

function doisValores(...valores) {
  const maior = Math.max(...valores)
  return maior
}

console.log(doisValores(10, 2, 5, 30, 7, 55, 4))


// MULTIPLICAR 2 NÚMEROS SEM O OPERADOR *
function multiplicar(a, b){
  let somador = 0
  for( let i = 0; i < b; i++ ) {
    somador += a
  
  } console.log(somador)
}

multiplicar(5, 5)
multiplicar(0, 7)