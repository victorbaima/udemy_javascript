function recerberMelhorEstudante(alunoNota){
    let media = 0
    let maiorMedia = 0
    const arrayResultante = { nome: 'aluno', media: 0}
    for(let el in alunoNota){
        media = alunoNota[el].reduce((atual, acumulador) => atual + acumulador) / alunoNota[el].length
        if(media > maiorMedia){
            maiorMedia = media
            arrayResultante.nome = el
            arrayResultante.media = maiorMedia
        }
    } console.log(arrayResultante)
}

recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    })