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

// Escreva uam função que multiplique três números

function multiplicacao(num1, num2, num3) {
    console.log(`O resultado da multiplicação dos números ${num1} x ${num2} x ${num3} é ${num1 * num2 * num3}.`)
}

multiplicacao(2, 4, 6);

//_______________________________________________________

// 