// 1ª MANEIRA DE RESOLVER:
function somaElementos(conj) {
    let contador = 0
    for(let i = 0; i < conj.length; i++){
        contador += conj[i]
    } console.log(contador)
}

somaElementos([ 10, 10, 10 ])
somaElementos([ 15, 15, 15, 15 ])

// 2ª MANEIRA DE RESOLVER:
function somaElem(grupo) {
    const somador = (atual, acumulador) => atual + acumulador
    console.log(grupo.reduce(somador))
    }

somaElem([ 10, 10, 10 ])
somaElem([ 15, 15, 15, 15 ])