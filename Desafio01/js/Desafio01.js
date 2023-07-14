//titulo informações
document.write("<h2>Informações</h2>");
let nome = "Leonardo Leite";
let idade = 27;
let peso = 72;
let altura = 1.75;
let nacionalidade = "Brasileiro";

document.write(`Nome: ${nome} <br>`);
document.write(`Nacionalidade: ${nacionalidade} <br>`);
document.write(`Idade: ${idade} anos <br>`);
document.write(`Peso: ${peso} KG <br>`);
document.write(`Altura: ${altura} M <hr>`);

//frase do dia
document.write("<h2>Frase do dia</h2>");
//escreve a data
document.write(new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })+ "<br>");
//frase motivacional com autor
document.write(`"A persistência é o caminho do êxito." <br>`);
document.write(`Charles Chaplin <hr>`);

//array com os meses do ano
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho']
//varre o array e escreve os meses na tela, separados por vírgula, sem o último
document.write("<h2>Meses do ano</h2>");
for (let i = 0; i < meses.length; i++) {
    if (i < meses.length - 1) {
        document.write(`${meses[i]}, `);
    } else {
        document.write(`${meses[i]}...`);
    }
}
document.write("<hr>");

//objeto jogo
let jogo = {
    nome: 'Valorant',
    genero: 'FPS',
    desenvolvedora: 'Riot Games',
    anoLancamento: 2020
}
// escreve o objeto na tela
document.write("<h2>Jogo</h2>");
document.write(`Nome: ${jogo.nome} <br>`);
document.write(`Gênero: ${jogo.genero} <br>`);
document.write(`Desenvolvedora: ${jogo.desenvolvedora} <br>`);
document.write(`Ano de lançamento: ${jogo.anoLancamento} <hr>`);