// Aula 10 funções ou metodos JS

let titulo = document.querySelector("h1")
titulo.textContent = "Aula 10 - Funções ou Metodos JS"
let box = document.querySelector(".box")

// funções sem parametros e sem retorno (procedures)
function olaMundo() {
    document.write("Olá Mundo - sem retorno")
}

// função sem parametro e com retorno (function)
function olaMundo2() {
    return "Olá Mundo - com retorno"
}

//Chama a função = executar a na tela

// olaMundo()
document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = "Jesus cristo é o Senhor"

/*
    função com parametro e sem retorno (procedures)
*/
function somar(a, b) {
    document.write((a + b) + "<br>")
}

/*
    função com parametro e com retorno (function)
*/
function somar2(c, d) {
    return c + d
}


document.write("<br>")
document.write("soma de dois numeros: ")
somar(x, y)

document.write(`<p> soma de dois numeros: ${somar2(x, y)} </p>`)
document.write(`<p> soma de dois numeros: ${somar2(10, 15)} </p>`)


/*
    Funções anonimas = Função sem nome = Arrow Function
    pode ou não ter parametros
    pode ou não ter retorno
*/
titulo.addEventListener("click", function () {
    console.log("Você clicou no titulo")
})

// utilizando o Arrow Function

const olaMundoArrow = () => document.write("<p>Olá Mundo Arrow Function!!!</p>")

const aloMundo2Arrow = () => '<p>Olá mundo com arrow Function. </p>'

//chamando as arrow function
olaMundoArrow()
document.write(aloMundo2Arrow())