/* 05 - Escreva um programa em JavaScript que declare uma variável "idade" com o valor 23 e uma variável "cnh" com o valor false.
 
Em seguida, utilize uma estrutura condicional if-else-if para verificar se a idade é maior ou igual a 18 e se a pessoa possui CNH. Caso ambas as condições sejam verdadeiras, imprima no console a mensagem "Sim, pode dirigir".
 
Caso a idade seja maior ou igual a 18 mas a pessoa não possui CNH, imprima no console a mensagem "Não pode dirigir, mas pode fazer a CNH".
 
Caso contrário, ou seja, se a pessoa tiver menos de 18 anos, imprima no console a mensagem "Não pode dirigir".
 
Certifique-se de que a estrutura condicional esteja completa, com o uso das chaves {} para delimitar o bloco de código a ser executado em caso de cada condição.*/

let idade = 23;
let cnh = "false"

if (idade >= 18 && cnh == "true") {
    console.log("Sim, pode dirigir!");
} else if (idade >= 18 && cnh == "false") {
    console.log("Não pode dirigir, mas pode fazer CNH.");
} else {
    console.log("Não pode dirigir.");
}
