/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tablea a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado:

1. À vista em dinheiro ou chque, recebe 10% d edesconto.
2. À vsita no cartão de crédito, recebe 15% de desconto.
3. Em duas vezes, preço normal de etiqueta sem juros.
4. Em 3 vezes ou mais, preço normal de etiqueta mais juros de 10%.

*/


let valor = 250
let pagamento = prompt("Selecione a forma de pagamento. ")

switch (pagamento) {
    case "1":
        alert(valor - (valor * 0,10))
        break;
    case "2":
        alert(valor - (valor * 0,15))
        break;
    case "3":
        alert(valor / 2)
        break;
    case "4":
        alert(valor + (valor * 0,10))
        break;
}