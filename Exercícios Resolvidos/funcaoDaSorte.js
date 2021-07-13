function funcaoDaSorte(num) {
    const sorteio = Math.random() * 10
    const paraInteiro = parseFloat(sorteio).toFixed(0)
    if(num == paraInteiro){
        console.log(`Parabéns! O número sorteado foi o ${num}.`)
    } else {
        console.log(`Que pena! O número sorteado foi o ${paraInteiro}.`)
    }
}

funcaoDaSorte(5)
funcaoDaSorte(3)
funcaoDaSorte(9)