function retornaNumber(conj){
    const novoArray = []
    for(let i = 0; i <= conj.length; i++){
       if(typeof conj[i] === 'number') {
            novoArray.push(conj[i])
        } 
    } console.log(novoArray)
}

retornaNumber(["Javascript", 1, "3", "Web", 20])
retornaNumber(["a", "c"])