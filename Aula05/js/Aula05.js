/* 
    Arquivo: JS aula 05 - Objetos
*/

// Criação de um objeto
let pessoa = {
    nome : 'Lucas',
    idade : 25,
    peso : 80.5,
    altura : 1.80,
    doador : true
}

let produtos = {
    descricao : [],
    preco : []
}

const carros = {
    marca : ['Fiat', 'Ford', 'GM', 'VW', 'Renault'],
    modelo : ['Palio', 'Ka', 'Onix', 'Gol', 'Sandero'],
    ano : [2010, 2011, 2012, 2013, 2014]
}

//como acessar uma propriedade de um objeto (notação ponto) e (notação colchetes)
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.peso);
console.log(pessoa['altura']);
console.log(pessoa['doador']);

//operações com objetos - IMC = peso / altura²
let imc = pessoa.peso / (pessoa.altura * pessoa.altura);

//limita o número de casas decimais com o método toFixed()
console.log(`O IMC de ${pessoa.nome} é ${imc.toFixed(2)}`);

//alterar/atualizar o valor de uma propriedade de um objeto
pessoa.nome = 'Lucas de Souza';
produtos.descricao = ['Arroz']
produtos.preco = ['5.50']

//usando spreed operator para adicionar novos elementos ao array
produtos.descricao = [...produtos.descricao, 'Feijão', 'Macarrão']
produtos.preco = [...produtos.preco, '7.50', '4.50']

//usando spreed operator em objetos do tipo const
carros.marca = [...carros.marca, 'Hyundai', 'Toyota']  
carros.modelo = [...carros.modelo, 'HB20', 'Corolla']
carros.ano = [...carros.ano, 2015, 2016]