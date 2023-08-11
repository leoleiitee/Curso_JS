
let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

// botoes
let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

// inputs
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

function calcularMedia(n1, n2) {
    return (n1 + n2) / 2
}

function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''

    if (mediaFinal >= 7) {
        situacaoFinal = 'Aprovado(a)'
    } else if (mediaFinal <= 3) {
        situacaoFinal = 'Reprovado(a)'
    } else {
        situacaoFinal = 'Recuperação'
    }
    return situacaoFinal
}

function formatarSituacao(situacaoFinal) {
    console.log('Situação final: ' + situacaoFinal)

    switch (situacaoFinal) {
        case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            console.log('Aprovado')
            break
        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('reprovado')
            console.log('Reprovado')
            break
        case 'Recuperação':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao')
            console.log('Recuperação')
            break
        default:
            console.log('Erro')
    }   // fim switch case
}

// em caso de erro cria um aviso em flash message
function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value

    if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
        formulario.reset() //limpa o formulário
        aviso.textContent = 'Digite um número entre 0 e 10'
        aviso.classList.add('alerta')
        setTimeout(function () {
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 2000);
    }
}

// Calcula a media apos clique no botao
btnCalcular.addEventListener('click', function (e) {
    console.log('botão calcular')
    // pega os valores digitados 
    // converter para float com o parseFloat
    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let media = calcularMedia(nota1, nota2)

    console.log(nota1)
    console.log(nota2)
    console.log(media)

    if (isNaN(media) || media < 0) {
        console.log('Não é um número')
        cxSituacao.value = ''
    } else {
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }
    e.preventDefault()
})

// Limpa os campos apos clique no botao
btnLimpar.addEventListener('click', function (e) {
    console.log('botão limpar')
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')
})