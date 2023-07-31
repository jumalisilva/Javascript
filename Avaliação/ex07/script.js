//  07 - Imagine que você precisa verificar se um número é positivo, negativo ou zero. Escreva um programa que solicite ao usuário que informe um número utilizando a função prompt. Utilize a estrutura condicional if, else if e else para verificar se o número é positivo, negativo ou zero e exibir uma mensagem correspondente no console. 

let num = Number(prompt("Digite um número:"));

if (num > 0) {
    console.log(`O número ${num} é positivo.`);
} else if (num < 0) {
    console.log(`O número ${num} é negativo.`);
} else {
    console.log("O número digitado foi zero.");
}