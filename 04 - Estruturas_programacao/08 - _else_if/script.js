// let nota = prompt();

// if(nota >= 7) {
//     alert("Aprovado");
// } else if (nota > 5){
//     alert("Recuperação")
// } else {
//     alert ("Reprovado")
// }

let nota1 = parseFloat(prompt("Digite sua Nota 01: "));
let nota2 = parseFloat(prompt("Digite sua Nota 02: "));
let nota3 = parseFloat(prompt("Digite sua Nota 03: "));
let nota4 = parseFloat(prompt("Digite sua Nota 04: "));

let media = ((nota1 + nota2 + nota3 + nota4) / 4);

if(media >= 7) {
    alert(`Aprovado! Nota final: ${media.toFixed(2)}`);
} else if (media >= 5) {
    alert(`Recuperação! Nota final: ${media.toFixed(2)}`);
} else {
    alert (`Reprovado! Nota final: ${media.toFixed(2)}`);
}
