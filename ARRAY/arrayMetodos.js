const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()   // REMOVE O ÚLTIMO ELEMENTO DO ARRAY!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()   // REMOVE O PRIMEIRO ELEMENTO!
console.log(pilotos)

pilotos.unshift('Hamilton') // INCLUI O PRIMENRO ELEMENTO!
console.log(pilotos)

//  SPLICE PODE ADICIONAR E REMOVER ELEMENTOS!

// ADICIONAR
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// REMOVER
pilotos.splice(3, 1)    // MASSA QUBROU :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)  // slice COPIA PARTE DE UM ARRAY EXISTENTE E CRIA UM NOVO ARRAY!
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)