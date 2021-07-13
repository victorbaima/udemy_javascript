function Endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('a', 'b', 'c')
const endereco2 = new Endereco('a', 'b', 'c')

function comparaEnd(endereco1, endereco2) {     // COMPARA SE OS ENDEREÇOS SÃO IGUAIS!
        return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep
}

function espacoMem(endereco1, endereco2) {  // COMPARA SE O ESPAÇO OCUPADO EM MEMÓRIA É O MESMO!
    return endereco1 === endereco2
}

console.log(comparaEnd(endereco1, endereco2))
console.log(espacoMem(endereco1, endereco2))