const array = [78, 80, 20]

function mediaNotas(notas) {
    let soma = 0
    for(let n of notas){
        soma += n
    } 
    const media = soma / (notas.length)
    if(media < 59) return 'E'
    if(media < 69) return 'D'
    if(media < 79) return 'C'
    if(media < 89) return 'B'
    return 'A'
} 

console.log(mediaNotas(array))
