// USANDO A NOTAÇÃO LITERAL
const obj1 = {}
console.log(obj1)

// OBJECT EM JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// FUNÇÕES CONSTRUTORAS
function Produto(nome, preco, desc) {
    this.nome = nome    // O OPERADOR this TORNA A VARIÁVEL nome PÚBLICA!
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// FUNÇÃO FACTORY
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(`O funcionário ${f1.nome} recebeu ${(f1.getSalario())}`)
console.log(`A funcionária ${f2.nome} recebeu ${(f2.getSalario())}`)

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// FUNÇÃO QUE RETORNA UM OBJETO...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)