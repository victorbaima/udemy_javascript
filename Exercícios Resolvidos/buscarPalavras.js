function buscarPalavras(palavra, rumaDePalavra) {
    const resultBusca = []
    let morfo = 'qualquer'
    for(let i = 0; i < rumaDePalavra.length; i++){
        morfo = rumaDePalavra[i]
        for(let u = 0; u < morfo.length; u++){
            if(morfo[u] + morfo[u + 1] + morfo[u + 2] == palavra){
                resultBusca.push(morfo)
            }
        }
    } console.log(resultBusca)
}

buscarPalavras("pro", ["programação", "mobile", "profissional"])
buscarPalavras("python", ["javascript", "java", "c++"])