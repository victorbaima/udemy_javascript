function filtrarPorQuantidadeDeDigitos(conj, num){
    let conjFinal = []
    let p = 0
    for(el in conj){
        p = JSON.stringify(conj[el])
        if(p.length == num){
            p = JSON.parse(p)
            conjFinal.push(p)
        }
    } console.log(conjFinal)
} 

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)