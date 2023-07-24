/* Crie uma lista com 5 itens;
alterar o terceiro item e quinto item;
adicionar um sexto item;

Criar uma outra lista com dois itens.

Unir ambas as listas.

*/

let frutas = ["maçã", "banana", "uva", "melância", "melão"]

frutas[2] = "ameixa";
frutas[4] = "morango";

frutas.push("limão");

console.log(frutas);

let lugares = ["mercado", "feira"]

const lugaresFrutas = frutas.concat(lugares); // para unir listas ou frutas.concat(lugares)

console.log(lugaresFrutas);