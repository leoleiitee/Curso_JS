
function carregou() {
    console.log("Página carregada com sucesso!");
}

function focou() {
    console.log("Foco no titulo!");
}

function rolouPagina() {
    console.log("Rolou a página!");
}

function focoNoCampo() {
    console.log("Foco no campo!");
}

function semFocoNoCampo() {
    console.log("Saiu o foco do campo de !");
}

let letras = document.querySelector("input[type=text]")
function avisarQueClicou() {
    let numLetras = 1
    console.log("Está teclando " + (letras.value.length + numLetras))
}

let botao1 = document.querySelector("#btn1")
let botao2 = document.querySelector("#btn2")
let botaoEnviar = document.querySelector("#btn3")

//mouseOver a seta do mouse esta no elemento
botao1.addEventListener("mouseover", function () {
    console.log("Mouse sobre o botão 1!")
})

//focusSet ou blur quando sai o focus
botao2.addEventListener("blur", function () { 
    console.log("Focus no botão 2!")
})

// 1 click no mouse
botaoEnviar.addEventListener("click", function (event) {
    event.preventDefault()
    console.log("Clicou no botão enviar!")
})