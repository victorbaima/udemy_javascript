function contarPalavras(frase){
    let contador = 0
    for(let i = 0; i <= frase.length; i++){
        if(frase[i] === " "){
            contador++
        }
    } console.log(`A frase possui ${contador + 1} palavras!`)
    
}

contarPalavras("Sou uma frase")
contarPalavras("Me divirto aprendendo a programar")