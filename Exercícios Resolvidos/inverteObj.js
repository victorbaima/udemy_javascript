function inverter(obj) {
    let chave = 'chave'
    let valor = 0
    let novoObj = {}
    for(el in obj){
      chave = JSON.parse(obj[el])
      valor = el
      novoObj[chave] = valor
    } console.log(novoObj)
}
inverter({ nota: 587, modelo: 2257, tipo: 5 })