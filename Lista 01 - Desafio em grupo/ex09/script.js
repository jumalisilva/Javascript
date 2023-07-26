//  Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console.

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

let operacao = Number(prompt("Selecione uma operação: \n 1. Soma [+] \n 2. Subtração [-] \n 3. Divisão [/] \n 4. Multiplicação [*] "));

let resultado;

switch (operacao) {
    case 1:
        resultado = num1 + num2;
        break;
    case 2:
        resultado = num1 - num2;
        break;
    case 3:
        resultado = num1 / num2;
        break;
    case 4:
        resultado = num1 * num2;
        break;
    default:
        resultado = "Operação inválida."

}

console.log(resultado)