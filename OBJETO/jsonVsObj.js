const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // OS ATRIBUTOS E STRINGS EM JSON UTILIZAM ASPAS DUPLAS!
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))