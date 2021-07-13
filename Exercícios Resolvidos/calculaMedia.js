function calculaMedia(conjunto) {
    const quantidade = conjunto.length
    const soma = (atual, acumulador) => atual + acumulador
    const media = conjunto.reduce(soma) / quantidade
    console.log(media)
}

calculaMedia([0, 10])
calculaMedia([1, 2, 3, 4, 5])