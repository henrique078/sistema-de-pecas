// Variáveis são um espaço na memória do computador para guardar algum valor.

let pesoPeca = 101;

if (pesoPeca > 100) {
    console.log("Peça cadastrada!");
} else {
    console.log("Erro! A peça pesa menos de 100g")
};

let numeroPecas = 12;

if (numeroPecas < 10) {
    console.log("Peças cadastrada!");
} else {
    console.log("Erro! Limite de peças excedido!")
};

let nomePeca = "Disco de freio";

console.log ("O comprimento do nome da peça é:", nomePeca.length);

let tamanhoNome = nomePeca.length;

if (tamanhoNome < 3 ) {
    console.log("Não é possível cadastrar! Nome muito curto!");
} else {
    console.log("Peça cadastrada!")
}