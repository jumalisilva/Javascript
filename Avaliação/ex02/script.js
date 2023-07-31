// 02 - Imagine que você está indo ao supermercado e precisa fazer algumas operações matemáticas. Escreva um programa que defina duas variáveis numéricas representando o valor total das suas compras e o valor que você tem disponível para gastar. Em seguida, realize as operações de soma, subtração, multiplicação, divisão entre elas e exiba o resultado de cada operação no console. 

let num1 = 150;
let num2 = 200;

let operacao = Number(prompt("Digite o número correspondente a cada operação matemática: \n 1. Soma \n 2. Subtração \n 3. Multiplicação \n 4. Divisão"));

let resultado;

switch (operacao) {
    case 1:
        resultado = `O resultado da soma de ${num1} com ${num2} é ${num1 + num2}.`;
        break;
    case 2: 
        resultado = `O resultado da subtração de ${num1} com ${num2} é ${num1 - num2}.`;
        break;
    case 3:
        resultado = `O resultado da multiplicação de ${num1} com ${num2} é ${num1 * num2}.`;
        break;
    case 4:
        resultado = `O resultado da divisão de ${num1} com ${num2} é ${num1 / num2}.`;
        break;
    default:
        resultado = "Operação inválida."
}

console.log(resultado);
