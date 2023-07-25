/* 04 - Imagine que alguém está dirigindo um carro em uma estrada, cujo limite de velocidade é de 80 km/h. Se essa pessoa estiver dirigindo a 55 km/h, não há problema e ela não receberá uma multa por excesso de velocidade. No entanto, se ela estiver dirigindo a uma velocidade maior que 80 km/h, ela será multada.
 
O programa em JavaScript simula essa situação, verificando se a velocidade do veículo é maior que 80 km/h e imprimindo a mensagem "Levou multa" caso seja, ou "Não levou multa" caso contrário. Isso pode ser útil para os motoristas se conscientizarem sobre a importância de respeitar os limites de velocidade e evitar multas e acidentes.
*/

let velocidade = 55;

if (velocidade > 80) {
    console.log("Levou multa!");
} else {
    console.log("Não levou multa.")
}