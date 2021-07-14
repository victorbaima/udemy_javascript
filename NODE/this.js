console.log(this === global)            // É FALSO!
console.log(this === module)            // É FALSO!

console.log(this === exports)           // É VERDADEIRO!
console.log(this === module.exports)    // É VERDADEIRO!

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)           // É FALSO!!!
    console.log(this === module.esports)    // É FALSO!!!
    console.log(this === global)            // É VERDADEIRO!!!
}

logThis()