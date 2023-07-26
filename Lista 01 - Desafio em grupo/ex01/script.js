// Escreva um programa em JavaScript que solicite dois números ao usuário e exiba o maior número no console. Utilize uma estrutura de decisão if para comparar os números e exibir o maior número no console.

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

if (num1 > num2) {
    console.log(`O maior número digitado foi ${num1}.`);
} else {
    console.log(`O maior número digitado foi ${num2}.`);
}