function retornaIndicePar(conj){
    const novoConj = []
    for(let i = 0; i <= conj.length; i++){
        if(i % 2 === 0 && conj[i] % 2 === 0){
            novoConj.push(conj[i])
        }
    } console.log(novoConj)
}

retornaIndicePar([ 1, 2, 3, 4 ])
retornaIndicePar([ 10, 70, 22, 43 ])