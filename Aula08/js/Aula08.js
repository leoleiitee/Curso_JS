// Arquivo JS aula 08 DOM

// DOM = Document Object Model
// Arvore com elementos desde o Browser, a Janela do Browser, o documento e cada elemento html que formam os conteudos.

/*
    é recomendado utilização do metodo querySelector() e querySelectorAll() para selecionar elementos
*/

//querySelector() - retorna o primeiro elemento que corresponde ao seletor CSS especificado
//querySelectorAll() - retorna todos os elementos que correspondem ao seletor CSS especificado, como um objeto NodeList

//textContent - retorna o conteudo de texto de um nó e seus descendentes
//innerHTML - retorna o conteudo HTML de um nó e seus descendentes

//alterando o titulo do documento
let titulo = document.querySelector('h1')

titulo.textContent = "Aula 08 - DOM"

let listaBox = document.querySelectorAll('.box')

//alterando o conteudo de texto do primeiro elemento da lista fazendo um for para todos os elementos
for (let i = 0; i < listaBox.length; i++) {
    document.write( listaBox[i].textContent + "<br>" )
}

//Ainda existem os metodos: getElementById(), getElementsByClassName(), getElementsByTagName()

let testeTag = document.getElementsByTagName('h1')
let testeById = document.getElementById('titulo')   //so pega o primeiro elemento com este id
let testeByClass = document.getElementsByClassName('box')