// console.log(global)
global.MinhaApp = Object.freeze({     // É POSSÍVEL INSERIR OBJETOS PERSONALIZADOS EM ESCOPO GLOBAL!
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal!'
})