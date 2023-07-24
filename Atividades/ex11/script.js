// Faça um programa que leia 5 números e informe o maior número

let valor = 1
let maior = 0
let valorprompt

while (valor <= 5) {

    valorprompt = parseInt(prompt());
    if (maior < valorprompt) {
        maior = valorprompt
    }

    valor++;
} 

console.log(maior)