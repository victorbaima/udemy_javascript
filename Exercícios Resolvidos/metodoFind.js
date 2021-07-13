const marcas = [
    { id: 318.005, marca: 'TRW' },
    { id: 318.006, marca: 'Jtekt' }
]

const tipo = marcas.find(function(elemento) {
    return elemento.marca === 'TRW'
})

console.log(tipo)