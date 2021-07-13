function contarCaractere(caractere, string){
    let contador = 0
    for(let i = 0; i <= string.length; i++){
        if(string[i] === caractere){
            contador++
        }
    } console.log(contador)
}

contarCaractere("r", "A sorte favorece os audazes")
contarCaractere("c", "Conhece-te a ti mesmo")