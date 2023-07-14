// comentario em linha

/*
comentario em bloco
*/

//para variaveis use let ou var (let é mais recomendado)
let produto = 'Caneta'
let quantidade = 10
let precoUnitario = 6.4
let precoTotal = quantidade * precoUnitario

document.write(`Preço unitário R$ ${precoUnitario} <br>`)
document.write(new Intl.NumberFormat('pt-BR').format(precoTotal))
document.write(`<br>Preço total ${precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} <hr>`)


//criar constantes
const nome = 'Leonardo Leite'
const peso = 72
const altura = 1.75
const imc = peso / (altura * altura)

document.write(`IMC: ${imc} <br>`)
//fixar casas decimais
document.write(`IMC: ${imc.toFixed(2)} <hr>`)

//media de notas
let nota1 = 9.5
let nota2 = 7.5
let nota3 = 8.5
let media = (nota1 + nota2 + nota3) / 3

document.write(`Média: ${media.toFixed(2)} <hr>`)

//desconto em produto
let precoProduto = 1000
let desconto = 0.1
let precoComDesconto = precoProduto * (1 - desconto)

document.write(`Preço do produto: ${precoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})} <br>`)
document.write(`Desconto: ${desconto * 100}% <br>`)
document.write(`Preço com desconto: ${precoComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})} <hr>`)