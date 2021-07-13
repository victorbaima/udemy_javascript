function retornaPrimo(num) {
    for (let i = 2; i <= num; i++) {
        if(primo(i)){
            console.log(i)
        }
    }
}

function primo(i) {
    for(let divisor = 2; divisor < i; divisor++) {
        if( i % divisor === 0){
            return false
        }
    }
    return true
}

retornaPrimo(11)