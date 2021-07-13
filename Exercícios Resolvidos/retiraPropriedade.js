function retiraProp(obj, atrib){
  //this.obj = obj
  //this.atrib = atrib
  if(atrib === 'string') {
    atrib = JSON.parse(atrib)
  } 
  delete obj[atrib]
  console.log(obj)
}

retiraProp({ a: 1, b: 2}, "a")
retiraProp({ id: 20, nome: "caneta", descricao: "Não preenchido"}, "descricao")