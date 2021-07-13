const resultado = fizzBuzz(100)
console.log(resultado)

function fizzBuzz(entrada) {
    for(let i = 0; i <= entrada; ++i){
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if(i % 3 === 0) {
            console.log('Fizz')
        } else if(i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}