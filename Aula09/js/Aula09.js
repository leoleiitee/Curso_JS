// Arquivo JS aula 09 DOM + alterar CSS

let titulo = document.querySelector('h1')
titulo.textContent = "Aula 09 - DOM + alterar CSS"
//Alterando com o innerHTML, porem esta depreciado e não é recomendado
// titulo.innerHTML = "Aula 09 - DOM + alterar CSS <small> - Alterando o CSS</small>";

let imagem = document.querySelector('#foto')

imagem.setAttribute('src', 'images/logo.png')
imagem.setAttribute('width', '250px')

/* 
    Manipular CSS
*/
// document.querySelector('h1').style.color = 'red'
titulo.style.color = 'orange'
titulo.style.backgroundColor = '#000'
titulo.style.borderBottom = '2px solid red'

let box = document.querySelectorAll('.box')
// box[0].setAttribute('class', 'azul')
// box[0].removeAttribute('class')

// Muda de cor - Theme
let tela = document.querySelector('main')
let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    console.log('modo dark')
    tela.classList.add('dark');
    tela.classList.remove('light');
}

function modoLight() {
    console.log('modo light')
    tela.classList.add('light');
    tela.classList.remove('dark');
}