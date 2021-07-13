function segundoMaior(conj) {
    conj.sort(function(a, b){
        return b - a
    })
    let novoConj = conj
    console.log(novoConj[1])
} 
segundoMaior([12, 16, 1, 5])
segundoMaior([8, 4, 5, 6])