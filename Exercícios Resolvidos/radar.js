function verificaVelocidade(velAtual){
    const velMax = 70
    const limitePontos = 130
    const verificador = velAtual - velMax
    const pontuacao = Math.floor(verificador / 5 + 1)
        if(verificador <= 0){
            console.log('Velocidade permitida!')
        }  else if(pontuacao >= 12) {
            console.log('CARTEIRA SUSPENSA!')
        }
            else{
            console.log(`Você ganhou ${pontuacao} ponto(s) na carteira!`)
        }
}

verificaVelocidade(60)