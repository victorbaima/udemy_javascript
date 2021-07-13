function menorNumero(conj) {
    let menor = conj[0]
    for(let i = 0; i <= conj.length; i++){
        if(conj[i] < menor){
            menor = conj[i]
        }
    } console.log(menor)
} 

menorNumero([10, 5, 35, 65])
menorNumero([5, -15, 50, 3])