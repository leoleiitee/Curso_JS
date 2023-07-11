/*
    Arquivos JS aula 03 operadores e operaçoes.
*/
let n1 = 10     // number inteiro
let n2 = 2      // number inteiro
let n3 = "2"    // string texto

document.write(`N1 ${n1} <br>`)
document.write(`N2 ${n2} <br>`)
document.write(`N3 ${n3} <br>`)

console.log(n1 + n2)    //adicao
console.log(n1 - n2)    //subtracao
console.log(n1 * n2)    //multiplicacao
console.log(n1 / n2)    //divisao
console.log(n1 % n2)    //resto da divisao

console.log(n2 == n3)  //comparacao de valor (igual a)
console.log(n2 === n3) //comparacao de valor e tipo (igual a)
console.log(n2 != n3)  //comparacao de valor (diferente de)
console.log(n2 !== n3) //comparacao de valor e tipo (diferente de)

console.log(n1 > n2)   //maior que
console.log(n1 < n2)   //menor que
console.log(n1 >= n2)  //maior ou igual que
console.log(n1 <= n2)  //menor ou igual que

let a = true
let b = false
console.log(a && b) //operador logico AND (e)
console.log(a || b) //operador logico OR (ou)
console.log(!a)     //operador logico NOT (nao)
console.log(!b)     //operador logico NOT (nao)