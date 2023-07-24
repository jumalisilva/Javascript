/* Faça um algoritmo que pergunte ao usuário uma operação e um número e depois exiba sua respectiva tabuada.

Considerar as 4 operações (+, -, *, /)

2 + 1 = 3
2 + 2 = 4
...
2 + 10 = 12

*/

let operacao;
let valOperacao;

do {  
    operacao = parseInt(prompt("Qual a operação? \n 1: Adição \n 2: Subtração \n 3: Divisão \n 4: Multiplicação"));
} while(operacao < 1 || operacao > 4);


valOperacao = parseFloat(prompt("Digite um valor. "));

let i = 0

switch (operacao) {
    case 1 :
        while (i <= 10) {
            console.log(`${valOperacao} + ${i} = ${valOperacao + i}`);
        
            i++;
        }
    case 2 :
        while (i <= 10) {
            console.log(`${valOperacao} - ${i} = ${valOperacao - i}`);
        
            i++
        }
    case 3 :
        while (i <= 10) {
            let result 
            i == 0 ? result = "Não é possível dividir." : result = valOperacao / i;
            console.log(`${valOperacao} / ${i} = ${result}`);
        
            i++
        }
    case 4 :
        while (i <= 10) {
            console.log(`${valOperacao} * ${i} = ${valOperacao * i}`);
        
            i++
        }
}

// condição: if/else e switch
// o switch é melhor que o for pois o for precisa criar variáveis