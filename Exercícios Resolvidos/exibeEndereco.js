let logradouro = {
    rua: 'Rua São Rafael',
    cidade: 'Lisboa',
    cep: 2750-082
}

function exibeEndereco(logradouro){
    for(let chave in logradouro){
        console.log(chave, logradouro[chave])
    }
}

exibeEndereco(logradouro)