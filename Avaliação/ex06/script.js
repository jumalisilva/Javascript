//  06 - Imagine que você precisa imprimir na tela os números pares de 1 a 20 utilizando a estrutura de repetição while. Escreva um programa que defina uma variável i com o valor inicial de 1 e utilize um loop while para imprimir o valor de i no console enquanto i for menor ou igual a 20. Dentro do loop, utilize uma estrutura condicional if para verificar se i é par. Se i for par, exiba o valor de i no console. Em seguida, incremente o valor de i em uma unidade para que o loop continue imprimindo os valores pares de 1 a 20. 

let i = 1;

while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
    }

    i++
}