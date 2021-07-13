const filme = {
    nome: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}

function exibeString(obj) {
    for(atrib in obj) {
        if(typeof obj[atrib] === 'string'){
            console.log(atrib, obj[atrib])
        }
    }
}

console.log(exibeString(filme))