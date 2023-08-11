let sit1 = document.querySelector("#sit1")
let sit2 = document.querySelector("#sit2")
let sit3 = document.querySelector("#sit3")
let escolha = document.querySelector("#escolha")

let notaFinal1 = 3
let notaFinal2 = 8
let notaFinal3 = 5

// Condicionais

// if
if (notaFinal1 >= 7) {
    sit1.textContent = "Aprovado"
}

// if else
if (notaFinal2 >= 7) {
    sit2.textContent = "Aprovado"
} else {
    sit2.textContent = "Reprovado"
}

// if ternario
notaFinal3 >= 7 ? sit1.textContent = "Aprovado" : sit1.textContent = "Reprovado"

// if encadeado
if (notaFinal1 >= 7) {
    sit1.textContent = "Aprovado"
} else if (notaFinal1 >= 5) {
    sit1.textContent = "Recuperação"
}


// switch
let situacao = ''
// let situacao = 'aprovado'
// let situacao = 'reprovado'
// let situacao = 'recuperação'

switch (situacao) {
    case 'aprovado':
        escolha.textContent = 'Aprovado'
        break
    case 'reprovado':
        escolha.textContent = 'Reprovado'
        break
    case 'recuperação':
        escolha.textContent = 'Recuperação'
        break
    default:
        escolha.textContent = 'Não definido'
}