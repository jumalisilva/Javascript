// Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, imprimir o resultado dessa operação.

var numero = 7

if(numero % 2 == 0) {
    console.log(`Par, ${numero + 5}`);
} else {
    console.log(`Ímpar, ${numero + 8}`);
}

// ternário: valor % 2 == 0 ? console.log(valor+5) : console.log(valor+8)