//  10 - Imagine que você precisa imprimir a tabuada de um número. Escreva uma função chamada "imprimeTabuada" que recebe um parâmetro "num".A função deve imprimir no console a tabuada do número recebido, de 1 até 10. Em seguida, chame a função "imprimeTabuada" com diferentes valores para "num" e exiba o resultado no console. Por exemplo, se o número recebido for 5, a função deve imprimir a tabuada do 5, ou seja: 5 x 1 = 5, 5 x 2 = 10, 5 x 3 = 15, ..., 5 x 10 = 50. 

let num = Number(prompt("Digite um número:"));

for (i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}