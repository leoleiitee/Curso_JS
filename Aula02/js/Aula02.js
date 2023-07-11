/*
    Arquivo esterno de js
*/
document.write("Ola mundo!");    //Escreve algo no documento
console.log("Ola mundo");        //Escreve algo no console
// alert("Ola mundo!");             //Escreve algo em modo de alerta

let mensagem = "Minha mensagem"
let mensagem2 = "Minha mensagem 2"
let meuPeso = 73
let minhaAltura = 1.75
let minhaIdade = 28
let ehDoador = false
let teste = null

const PI = 3.1415
const TAXA = 0.5

teste = "algum conteudo"

/* 
    Escrever conteudos de variaveis e constrantes
*/
//Modo de concatenação
document.write("<p> Mensagem: " + mensagem + "</p>")
document.write("<p> Mensagem2: " + mensagem2 + "</p>")
document.write("<p> Meu peso: " + meuPeso + " KG </p>")
//modo de template String
document.write(`<p> Altura: ${minhaAltura} m </p>`)
document.write(`<p> Minha idade: ${minhaIdade} anos</p> `)
document.write(`<p> É doador ? ${ehDoador} </p>`)
document.write(`<p> Teste: ${teste} </p>`)
document.write(`<p> PI : ${PI} </p>`)
document.write(`<p> TAXA: ${TAXA} </p>`)