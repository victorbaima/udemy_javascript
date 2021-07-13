// Object.preventExtensions: IMPEDE O AUMENTO DE OBJETOS
const produto = Object.preventExtensions({  // TORNA POSSÍVEL ALTERAR OU DELETAR, PORÉM NÃO PERMITE INCLUIR!
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal: SELAR --> NÃO ADICIONA NEM EXCLUI!
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze: NÃO ALTERA NADA!