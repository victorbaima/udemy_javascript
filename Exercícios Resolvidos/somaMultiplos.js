let multiDe3 = 0
let multiDe5 = 0

function somarMult(num) {
    for(i = 0; i <= num; i++){
        if(i % 3 === 0){
            multiDe3 += i
        } if(i % 5 === 0) {
            multiDe5 += i
        }
    } console.log(multiDe3 + multiDe5)
   }

somarMult(10)