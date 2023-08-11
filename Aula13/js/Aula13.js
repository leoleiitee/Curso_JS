/*
    Aula 13 de JS sobre estrutura de repetição
*/

// for - Para faça
for (let i = 1; i <= 5; i++) {
    document.write(i + " ");
}

for (let i = 5; i >= 0; i--) {
    document.write(i + " ");
}

let carros = ["uno", "palio", "gol", "fusca", "chevete"];

for (let i = 0; i < carros.length; i++) {
    document.write(`<li>${carros[i]}</li>`)
    // document.write(carros[i] + "<br>");
}

// foreach - para cada
let frutas = ["maça", "banana", "uva", "pera", "mamão"];

frutas.forEach(function (value, index) {
    document.write(`<li>${index} - ${value}</li>`)
})

// foreach do array de carros
// carros.forEach(function (value, index) {
//     document.write(`<li>${index} - ${value}</li>`)
// })

// while - enquanto
let count = 0;

// while (count <= 5) {
//     document.write(count + " ");
//     count++;
// }

//while do array de frutas

while (count < frutas.length) {
    document.write(`<li>${frutas[count]}</li>`)
    count++;
}


// do while - faça enquanto
count = 0;

do {
    document.write(carros[count] + "<br>");
    count++;
}
while (count <= 5);
