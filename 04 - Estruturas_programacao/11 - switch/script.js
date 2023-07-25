// Ex 01

// let diaDaSemana = parseInt(prompt("Digite um número da semana: "));
// // estrutura de escolha
// switch (diaDaSemana) {
//     case 1:
//         console.log("Segunda-feira");
//         break;
//     case 2:
//         console.log("Terça-feira");
//         break;
//     case 3:
//         console.log("Quarta-feira");
//         break;
//     case 4:
//         console.log("Quinta-feira");
//         break;
//     case 5:
//         console.log("Sexta-feira");
//         break;
//         default: // qualquer caso que não seja algum dos cases
//             console.log("Fim de semana");
// }

//_________________________________________________________________________

// Ex 02

// let nomeDaFruta = prompt("Digite o nome de uma fruta:");

// switch (nomeDaFruta) {
//     case "limão":
//     case "uva":
//     case "laranja":
//         console.log("Essa fruta é cítrica.");
//         break;
//     case "abacate":
//     case "manga":
//         console.log("Essa fruta é tropical.");
//         break;
//     default:
//         console.log("Não sei que tipo de fruta é essa.");
// }

//__________________________________________________________________________

// Ex 03

// Crie um programa que solicite ao usuário que insira dois números e selecione uma operação (soma, subtração, multiplicação e divisão). Use um switch para selecionar a operação apropriada com base na entrada do usuário e exiba o resultado no console.

// let num1 = parseFloat(prompt("Digite o primeiro número: "));
// let num2 = parseFloat(prompt("Digite o segundo número: "));

// let operacao = parseInt(prompt("Selecione uma operação matemática:\n 1. Soma \n 2. Subtração \n 3. Multiplicação \n 4. Divisão "));

// let resultado;

// switch (operacao) {
//     case 1:
//         resultado = num1 + num2;
//         break;
//     case 2:
//         resultado = num1 - num2;
//         break;
//     case 3:
//         resultado = num1 * num2;
//         break;
//     case 4:
//         resultado = num1 / num2;
//         break;
//     default:
//         resultado = "Operação inválida."
// }

// console.log(resultado);


//____________________________________________________________

// EX 04

/**
Escreva um programa em JavaScript que solicite ao usuário que insira um número e verifique se ele é positivo, negativo ou zero. Se o número for maior que zero, o programa deve exibir "O número é positivo". Se o número for menor que zero, o programa deve exibir "O número é negativo". Se o número for igual a zero, o programa deve exibir "O número é zero". Se a entrada do usuário não for um número válido, o programa deve exibir "Entrada inválida".

Para implementar a verificação, utilize um switch statement. O programa deve seguir a seguinte estrutura:

Solicitar ao usuário que insira um número.

Verificar se o número é positivo, negativo ou zero utilizando um switch statement.

Exibir a mensagem correspondente ao tipo de número.

Se a entrada do usuário não for um número válido, exibir "Entrada inválida".

*/

// let num = parseFloat(prompt("Digite um número:"));

// switch (true) {
//     case (num > 0):
//         console.log("O número é positivo.");
//         break;
//     case (num < 0):
//         console.log("O número é negativo.");
//         break;
//     case (num == 0):
//         console.log("O número é igual a zero.");
//         break;
//     default:
//         console.log("Entrada inválida.");
// }

//________________________________________________________________

// Ex 05

/**
Escreva um programa em JavaScript que solicite ao usuário que insira um número correspondente ao dia da semana (1-7) e exiba o nome do dia da semana correspondente à entrada do usuário. Se a entrada do usuário não for um número válido, o programa deve exibir "Entrada inválida".

Para implementar a verificação do nome do dia da semana, utilize um switch statement. O programa deve seguir a seguinte estrutura:

Solicitar ao usuário que insira um número correspondente ao dia da semana (1-7).

Verificar qual é o número inserido pelo usuário e exibir o nome do dia da semana correspondente utilizando um switch statement.

Se a entrada do usuário não for um número válido, exibir "Entrada inválida".

*/

// let diaDaSemana = parseInt(prompt("Digite um número da semana (1-7): "));

// switch (diaDaSemana) {
//     case 1:
//         console.log("Segunda-feira");
//         break;
//     case 2:
//         console.log("Terça-feira");
//         break;
//     case 3:
//         console.log("Quarta-feira");
//         break;
//     case 4:
//         console.log("Quinta-feira");
//         break;
//     case 5:
//         console.log("Sexta-feira");
//         break;
//     case 6:
//         console.log("Sábado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;
//     default: 
//         alert("Entrada inválida.");
// }

//_____________________________________________________________________



