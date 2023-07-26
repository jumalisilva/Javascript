// Escreva um programa em JavaScript que solicite uma nota ao usuário e verifique se ela é válida. Utilize uma estrutura de decisão if para verificar se a nota informada está dentro do intervalo de 0 a 10, e exiba a mensagem correspondente no console.

let nota = Number(prompt("Digite um número de 0 a 10: "));

if (nota <= 10) {
    console.log(`A nota ${nota} é valida.`);
} else {
    console.log(`A nota ${nota} não é valida.`);
}