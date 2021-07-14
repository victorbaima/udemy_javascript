const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

/*
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
       })
*/


// MULHER CHINESA COM O MENOR SALÁRIO?

// MINHA SOLUÇÃO:
/*
function buscar() {
    let novaLista = []                      // O RESULTADO FOI INCORRETO!!!
    let menorSalario = {}
    axios.get(url).then(response => {
        const funcionarios = response.data
        for(let el in funcionarios){
            if(funcionarios[el].pais === 'China' && funcionarios[el].genero === 'F'){
                novaLista.push(funcionarios[el])
            }
        } for(let i in novaLista){
            menorSalario = novaLista[0]
            if(novaLista[i].salario < menorSalario.salario){
                menorSalario = novaLista[i]
            } console.log(menorSalario)
        } 
       })
}

buscar()
*/
// SOLUÇÃO DO PROFESSOR:

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual  // SALÁRIO DO FUNCIONÁRIO ANTERIOR É MENOR QUE O DO ATUAL?
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})