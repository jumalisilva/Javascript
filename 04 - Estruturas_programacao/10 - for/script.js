// Desenvolva um programa em JS que solicite ao usuário que digite um número qualquer e, em seguida, imprima no console todos os números decrescentes a partir desse número até zero. Para isso, utilize um loop "for" que inicialize uma variável com o número digitado pelo usuário e decremente o seu valor em cada iteração até que ela atinja o valor zero. Durante cada iteração, o número atual deve ser impresso no console.

// for (let i = prompt(`Digite um número: `); i >= 0; i--) {
//     console.log(i);
//     console.log(i);
// } 

//______________________________________________________________________________________________


// Imprima no console os números de 1 a 5

// for (let i = 1; i <= 5; i++) {
//     condição.log(i);
// }

//_______________________________________________________________________________________________

// Desenvolva um programa que solicite ao usuário que digite um número e, em seguida, imprima no console a soma dos números ímpares entre 1 e esse número.

// let n = Number(prompt("Digite um número: "));

// let somaImpares = 0;

// for (let i = 1; i <= n; i += 2) {
//     somaImpares += i;
// }

// console.log(`A soma dos números ímpares entre 1 e ${n} é: ${somaImpares} `);

//____________________________________________________________________________________________


// Imprima os números de 1 a 10 no console.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//____________________________________________________________________________________________

// // Imprima os números de 10 a 1 no console.

// for (let i = 10; i <=1; i--) {
//     console.log(i);
// }

//_____________________________________________________________________________________________


// Imprima os números pares de 0 a 20 no console.

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

//______________________________________________________________________________________________

// Imprima os números ímpares de 10 a 30 no console.

// for (let i = 11; i <= 30; i+2) {
//     console.log(i);
// }

//_______________________________________________________________________________________________


// Imprima os números de 100 a 0, decrementando de 5 em 5, no console

// for (let i = 100; i >= 0; i -= 5) {
//     console.log(i);
// }

//_____________________________________________________________________________________________

// Imprima a tabuada de multiplicação do número 7, do 1 ao 10, no console.

// let n = 7
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
// }

//__________________________________________________________________________________________________

// Solcite ao usuário que digite um número no prompt e, em seguida, imprima os números pares de 0 até esse número no console.

// let numero = parseInt(prompt(`Digite um número:`));

// for (let i = 0; i <= numero; i += 2) {
//     console.log(i);
// }


//_______________________________________________________________________________________________________

// Solicite ao usuário que digite dois números, e, em seguida, imprima os números entre esses números no console, em ordem crescente.

// let numero1 = parseFloat(prompt("Digite o primeiro número: ")); // no lugar de parseFloat poderia ser Number
// let numero2 = parseFloat(prompt("Digite o segundo número: "));

// for (let i = numero1; i <= numero2; i++) {
//     console.log(i);
// }

// OU

// if (numero1 > numero2) {
//     for (let i = numero2; i < numero1; i++) {
//         console.log(i);
//     }
// }
// else {
//     alert("O primeiro número deve ser maior que o segundo!");
//     numero1 = Number(prompt("Digite novamente o primeiro número"));
//     for (let i = numero2; i < numero1; i++) {
//         console.log(i);
//     }
// }
    