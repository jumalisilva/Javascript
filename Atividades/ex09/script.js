// Crie um algoritmo que leia um nome e uma idade e exiba se essa pessoa pode ou não dirigir.

let nome = "Camila";
let idade = 16;

if(idade >= 18) {
    console.log(`${nome} pode dirgir!`);
} else {
    console.log(`${nome} não pode dirigir!`);
}


idade >= 18 ? console.log(`${nome} pode dirigir!`) : console.log(`${nome} não pode dirigir!`)