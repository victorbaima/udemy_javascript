const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {  // PERCORRE O ARRAY SEMPRE UTILIZANDO UM LAÇO FOR QUE JÁ VEM EMBUTIDO!
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))    // UTILIZANDO ARROW FUNCTION!

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)