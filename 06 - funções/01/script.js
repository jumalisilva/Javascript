// parâmetro é a mesma coisa que argumento

// Ex 01
// function imprimirNoConsole() {
//     console.log("Olá, jovem!");
// } // esse código não funcionaria se a função não for chamada

// imprimirNoConsole(); // é preciso chamar a função para o código funcionar
// _____________________________________

// Ex 02

// a função vai receber um parâmetro (algo vai entrar nos parênteses)
// function imprimirUmNumero(num) {
//     console.log(`O número é: ${num}`);
// }

// imprimirUmNumero(2);
// imprimirUmNumero(8);
// imprimirUmNumero(20);

//_____________________________________

// Crie uma função que receba o nome do usuário no prompt e imprima no console "O nome digitado foi: [nome do usuário]".

// let nome = prompt("Digite seu nome: "); // essa variavel nome é diferente da variavel nome dentro da function por conta do escopo (a variavel nome dentro da function só funciona dentro da function)

// function nomeDoUsuario(nome) {
//     console.log(`O nome digitado foi: ${nome}.`);
// }

// nomeDoUsuario(nome);

 //__________________________________

 // Escreva uma função que imprima no console o dobro de um número a partir do número que foi definido na chamada da função (direto no programa). 

// function dobroDoNumero(num) {
//     console.log(num * 2);
// }

// dobroDoNumero(5);

//___________________________________

// Escreva uma função que imprima no console a potência de um número a ele mesmo a partir do número que foi definido na chamada da função (direto no programa).

// function imprimirPotencia(numero) {
//     var potencia = Math.pow(numero, numero);
//     console.log(`O número ${numero} elevado a ele mesmo é: ${potencia}.`);
// }

// __________________________________

// imprimirPotencia(5);

// function imprimirPotencia(base, expoente) {
//     var potencia = Math.pow(base, expoente);
//     console.log(`A base é ${base} e o expoente é ${expoente}.`);
// }

// imprimirPotencia(5, 2);

//_________________________________

// Função anônima:

// const numeroAleatorio = function() {
//     console.log(Math.random());
// }

// numeroAleatorio();
// numeroAleatorio();
// numeroAleatorio();
// numeroAleatorio();

//_________________________________

// function repetirNumero(numero) {
//     for (let i = 0; i < 10; i ++) {
//         console.log(numero)
//     }
// }

// var numero = prompt("Digite um número:");

// repetirNumero(numero);

//__________________________________

// Escreva uma função que multiplique três números

// function multiplicacao(num1, num2, num3) {
//     console.log(`O resultado da multiplicação dos números ${num1} x ${num2} x ${num3} é ${num1 * num2 * num3}.`)
// }

// multiplicacao(2, 4, 6);

//_______________________________________________________

// Aula do dia 21/08/2023

// Função que retorne o tipo de dado digitado:

// function verificaTipoDeDado(dado) {
//     if (typeof dado === 'string') {
//         console.log("Este dado é uma string.");
//     } else if (typeof dado === 'number') {
//         console.log("Este dado é um número.");
//     } else if (typeof dado === 'boolean') {
//         console.log("Este dado é um boolean.");
//     }
// }

// verificaTipoDeDado(true);
// verificaTipoDeDado(23);
// verificaTipoDeDado("teste");

//_____________________________________________________________

// Função que some dois números:

// function soma(a, b) {
//     var resultado = a + b;
//     return resultado; // o return é essencial para que o resultado apareça e não fique como "Undefined"
// }

// var resultadoDaSoma = soma(3, 5);
// console.log(resultadoDaSoma);

//___________________________________________________________________________

// Criar uma função que receba dois números no prompt e retorne a multiplicação desses números.

// let a = Number(prompt("Digite o primeiro número:"));
// let b = Number(prompt("Digite o segundo número:"));

// function multi(a,b) {
//     var resultado = a * b;
//     return resultado;
// }

// var total = multi(a,b);
// console.log(total);

//______________________________________________

// Escrever uma função que receba 2 números e apresente a potenciação desses números, sendo o primeiro a base e o segundo o expoente, respectivamente.

// function pot(a, b) {
//     let potencia = Math.pow(a, b);
//     return potencia;
// }

// let resultado = pot(2, 3);
// console.log(resultado);

