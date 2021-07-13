const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 3.2
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 9.7
    }]
}]

const getNotaDoAluno = a => a.nota  // FUNÇÃO QUE EXTRAI A NOTA NO ALUNO!
const getNotaDaTurma = t => t.alunos.map(getNotaDoAluno)    // CONVERTE O OBJETO alunos PARA EXIBIR APENAS NOTAS!

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

console.log([].concat([ 8.1, 3.2 ], [ 8.9, 9.7 ]))

Array.prototype.flatMap = function(callback) {  // O MÉTODO flatMap NÃO É PADRÃO DO JS, MAS TEM A FUNCIONALIDADE DE CONCATENAR ARRAYS UNINDO OS ELEMENTOS EM UM ÚNICO ARRAY!
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)