//  04 - Imagine que você é um professor e precisa calcular a média final das notas de um aluno e informar a sua situação (aprovado, recuperação ou reprovado). Escreva um programa que solicite ao usuário que informe o nome do aluno e as 4 notas utilizando a função prompt. Em seguida, calcule a média final e armazene o resultado na variável mediaFinal. Utilize uma estrutura condicional para verificar a situação do aluno e exiba uma mensagem de alerta contendo o nome do aluno, a média final em pontos e a sua situação. 

let nomeDoAluno = prompt("Digite o nome do aluno:");

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));
let nota4 = Number(prompt("Digite a quarta nota:"));

let mediaFinal = (nota1 + nota2 + nota3 + nota4 / 4);

if (mediaFinal > 5) {
    alert(`O aluno ${nomeDoAluno} com média final ${mediaFinal} foi aprovado.`);
} else if (mediaFinal !== 0 ) {
    alert(`O aluno ${nomeDoAluno} com média final ${mediaFinal} está de recuperação.`);
} else if (mediaFinal == 0) {
    alert(`O aluno ${nomeDoAluno} com média final ${mediaFinal} foi reprovado.`);
}