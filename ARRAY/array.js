console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']    // ANOTAÇÃO LITERAL DE UM ARRAY!
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'      // OPÇÃO DE INCLUSÃO NO ARRAY!
aprovados.push('Abia')    // push É MAIS UMA OPÇÃO DE INCLUSÃO!
console.log(aprovados.length)

aprovados[9] = 'Rafael'     // O ARRAY PASSARÁ A EXISTIR COM ALGUMAS POSIÇÕES INDEFINIDAS!
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()        // sort ALTERA A ORDEM DOS ELEMENTOS DO ARRAY!
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)  // TRADUZINDO splice (1, 1): A PARTIR DO ÍNDICE 1 EXCLUIR 1 ITEM!
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')    // A PARTIR DO ÍNDICE 1 NÃO EXCLUIR NENHUM ITEM E INCLUIR Elemento1 e Elemento2!
console.log(aprovados)