const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

    console.log(Object.keys(pessoa)) // MOSTRA AS CHAVES DO OBJETO: nome, idade E peso
    console.log(Object.values(pessoa)) // MOSTRA OS VALORES DO OBJETO
    console.log(Object.entries(pessoa)) // MOSTRA OS PARES CHAVE-VALOR

    Object.entries(pessoa).forEach(([chave, valor]) => {
        console.log(`${chave}: ${valor}`)
    })

    Object.defineProperty(pessoa, 'dataNascimento', {   // DEFINE O QUE PODERÁ OU NÃO SER FEITO COM A PROPRIEDADE dataNascimento:
        enumerable: true,                               // NESSE CASO PODERÁ SER ENUMERADA!
        writable: false,                                // NÃO PODERÁ SER EDITADA/ALTERADA!
        value: '01/01/2019'
    })

    pessoa.dataNascimento = '01/01/2017'
    console.log(pessoa.dataNascimento)
    console.log(Object.keys(pessoa))

    // Object.assign (ECMAScript 2015)
    const dest = { a: 1 }
    const o1 = { b: 2 }
    const o2 = { c: 3, a: 4 }
    const obj = Object.assign(dest, o1, o2)

    Object.freeze(obj)
    obj.c = 1234
    console.log(obj)