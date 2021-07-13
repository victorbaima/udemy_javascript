function comparaNum(n1, n2) {
    if(n1 > n2 || n1 === n2){
        return true
    }
    else {
        return false
    }
}
console.log(comparaNum(0, 0))
console.log(comparaNum(0, "0"))
console.log(comparaNum(5, 1))