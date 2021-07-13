// MEU CÓDIGO:
function range(a, b, c = 1) {
    const novoArray = []
    for(i = 1; b == undefined && i <= a; i++){
        novoArray.push(i)   // INSERE CADA NOVO ELEMENTO DO LAÇO NO novoArray!
    }
    for(i = a; i >= b; i-=c){
        novoArray.push(i)   
    } for(i = a; i <= b; i+=c){
        novoArray.push(i)
    }
    return novoArray
}

console.log('RESPOSTA DO ALUNO:')
console.log(range(5))
console.log(range(6, 11))
console.log(range(10, 19, 2))
console.log(range(6, 2))
console.log(range(8, -3, 4))

// CÓDIGO DO PROFESSOR:
function range(a, b, s = 1) {
    const n1 = b === undefined ? 1 : a  // SE O PARÂMENTRO B FOR INDEFINIDO RECEBERÁ O VALOR 1, CASO CONTRÁRIO ASSUMIRÁ O VALOR DE a
    const n2 = b === undefined ? a : b  // SE O PARÂMENTRO B FOR INDEFINIDO RECEBERÁ O VALOR a, CASO CONTRÁRIO ASSUMIRÁ O VALOR DE b
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)  // TORNA O CONTADOR NEGATIVO CASO O n1 SEJA MAIOR QUE O n2!

    const nums = []
    for(let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
        nums.push(i)
    }
    return nums
}

console.log('RESPOSTA DO PROFESSOR:')
console.log(range(5))
console.log(range(6, 11))
console.log(range(10, 19, 2))
console.log(range(6, 2))
console.log(range(8, -3, 4))