const elementos = [3, 5, 10, 7, 55, 78, 32]

function retornaArrays(elementos) {
const primeiro = elementos[0]
const tamanho = (elementos.length) - 1
const ultimo = elementos[tamanho]
novoArray = [ primeiro, ultimo ]
console.log(novoArray)
}

retornaArrays([7, 14, "olá"])
retornaArrays([-100, "aplicativo", 16])