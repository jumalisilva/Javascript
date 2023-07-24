console.log("Hello World!");
console.log("Meu nome é Sr. Madruga");
console.log(`Este aqui é o template literals`);

let nome = "Julia ";
let idade = 20;
let resultado = nome + idade

console.log(nome + idade); //concatenação traz o resultado de uma variável

console.log("Meu nome é: " + nome + "Minha idade é: " + idade); //concatenação traz o resultado de uma variável

console.log(`Meu nome é: ${nome} Minha idade é: ${idade}`); // a crase serve para não usar o sinal de +
            //string    //variável
            //$ e {} serverm para chamar o conteúdo da variável

let nome1 = prompt();
alert(`O nome digitado foi: ${nome1}`); //alert serve para criar uma caixinha com o que foi digitado ao invés de aparecer no console
