// Aula 14 - de JS Manipular dados do formulário

// SELECIONA TODOS OS ELEMENTOS QUE VOU MANIPULAR
let formulario = document.querySelector('#form')
let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadoImc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa') // retorna um array

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

btnEnviar.addEventListener('click', (e) => {
    // pega o value de cada input
    let nome = cxNome.value
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let imc = (peso / (altura * altura)).toFixed(1)

    // printa os dados no console
    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    cxImc.value = imc
    let sit = situacaoDoPeso(imc)
    aviso.textContent = sit

    // SAIDA DE DADOS

    let pessoa = {
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        imc: imc,
        situacao: sit
    }

    console.log(pessoa)
    dados[1].textContent = pessoa.nome
    dados[2].textContent = pessoa.idade + ' anos'
    dados[3].textContent = pessoa.peso + ' kg'
    dados[4].textContent = pessoa.altura + ' m'
    dados[5].textContent = pessoa.imc + ' ' + pessoa.situacao

    e.preventDefault()

})

function situacaoDoPeso(imc) {

    let situacao = ''

    if (imc < 18.5) {
        situacao = 'Abaixo do peso'
    } else if (imc >= 18.5 && imc < 25) {
        situacao = 'Peso normal'
    } else if (imc >= 25 && imc < 30) {
        situacao = 'Sobrepeso'
    } else if (imc >= 30 && imc < 35) {
        situacao = 'Obesidade grau 1'
    } else if (imc >= 35 && imc < 40) {
        situacao = 'Obesidade grau 2'
    } else if (imc >= 40) {
        situacao = 'Obesidade grau 3'
    } else {
        situacao = 'Valor inválido'
    }
    return situacao
}
