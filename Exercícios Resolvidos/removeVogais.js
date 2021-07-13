function removerVogais(palavra) {
let formacao = ''
    for(let i = 0; i < palavra.length; i++){
        if(palavra[i] === "a" || palavra[i] === "e" || palavra[i] === "i" || palavra[i] === "o" || palavra[i] === "u"){
        } else{
            formacao += palavra[i] 
        }
    } console.log(formacao)
}

removerVogais("Cod3r")
removerVogais("Fundamentos")