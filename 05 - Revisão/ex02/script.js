/* 02 -  Escreva um programa em JavaScript que declare uma constante "nome" com o valor "Ana".
 
Em seguida, utilize uma estrutura condicional if para verificar se o valor da constante "nome" é igual a "Ana". Caso seja, imprima no console a mensagem "Olá Ana, tudo bem?" utilizando o recurso de template literals para interpolar a variável "nome" na mensagem. 
*/

const nome = "Ana";

if (nome == "Ana") {
    console.log(`Olá ${nome}, tudo bem?`);
}