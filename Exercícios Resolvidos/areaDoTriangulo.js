function areaDoTriangulo(base, altura){
    const area = (base * altura) / 2
    console.log(`${parseFloat(area).toFixed(2)}`)   // PADRONIZA O VALOR COM 2 CASAS DECIMAIS!!!
}

areaDoTriangulo(10, 15)
areaDoTriangulo(7, 9)
areaDoTriangulo(9.25, 13.1)