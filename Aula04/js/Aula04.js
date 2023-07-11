/*
    Arquivos JS aula 04 array e verores.
*/
let produtos = ["Arroz", "Feijão", "Leite"]
var codigos = Array(10, 20, 30)
let meses = ['Jan', 'Fev', 'Mar', 'Abr']

//adicionar elementos no final da lista do array
produtos.push("Macarrão")
codigos.push(40,50,60,70)
meses.push('Mai', 'Jun', 'Jul', 'Ago', '07')

//remover elementos no final da lista do array
produtos.pop()
codigos.pop()
meses.pop()

//adicionar elementos no inicio da lista do array
produtos.unshift("Uva", "Pera")

//remover elementos no inicio da lista do array
produtos.shift()

//remover elementos de posições especificas
codigos.splice(1, 3)

//copiar elementos de posições especificas
let mesesCopia = meses.slice()      //copia todos os elementos
let mesesCopia2 = meses.slice(0,3)  //copia os elementos da posição 0 até a posição 3

//ver tamanho do array (length = tamanho)
console.log("Tamanho do array meses: " + meses.length)

//spred operator
let teste = [...produtos, 'Ovo', 'Pera','Carne']

//é possivel acessar uma posição especifica do array
console.log("O produto da posição 0 é: " + produtos[0])
console.log("O produto da posição 0 é: " + produtos[12]) //não gera erro, mas retorna undefined
