const alunos = [{
    nome: 'Jake',
    score: 6.4
}, {
    nome: 'Susan',
    score: 8.6
}, {
    nome: 'Emma',
    score: 9.4
}, {
    nome: 'Peter',
    score: 9.7
}]


const pegaNota = notaDeCada => notaDeCada.score // 1 - CRIEI UMA CONSTANTE COM UM PARÂM. notaDeCada QUE RECEBE A NOTA (score)
const notasGerais = alunos.map(pegaNota)        // 2 - CRIEI OUTRA QUE MAPEIA alunos E USA A CONSTANTE ACIMA PRA PEGAR SOMENTE AS NOTAS!
const dobro = notasGerais.map( e => e * 2)      // 3 - CRIEI A FUNÇÃO DOBRO PARA OPERAR EM CIMA DAS NOTAS!

console.log(notasGerais)
console.log(dobro)

