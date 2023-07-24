// Faça um programa que leia 5 números e mostre a soma e a média deles.

let nValor = 0;

for(var i = 1; i <= 4; i++) {
    let valor = parseFloat(prompt());

    nValor += valor;
}

console.log(`Soma: ${nValor}`);
console.log(`Média: ${nValor/i}`);
