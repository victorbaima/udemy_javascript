function ehBissexto(ano) {
    if(ano % 400 === 0){
        console.log('O ano é Bissexto!')
    } else if(ano % 100 === 0){
        console.log('O ano não é Bissexto!')
    } else if(ano % 4 === 0){
        console.log('O ano é Bissexto!')
    } else{
        console.log('O ano não é Bissexto!')
    }
}

ehBissexto(2020)
ehBissexto(2100)