function inverso(valor) {
   if(typeof valor === 'number') {
       console.log(valor * -1)
   } else if (typeof valor === 'boolean'){
        if(valor === true){
            console.log(false)
        } else{
            console.log(true)
        }
    } else if(typeof valor === 'string') {
        console.log('booleano ou número esperados, mas o parâmetro é do tipo string!')
    } else {
        console.log('Tipo não suportado!')
    }
}

inverso(true)
inverso("6")
inverso(-2000)
inverso("programação")