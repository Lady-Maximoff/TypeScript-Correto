function qualNome(nome) {
    console.log("Você passou o nome: " + nome);
}
function somar(n1, n2) {
    return (n1 + n2);
}
//função dentro da variável numeroMaior
var numeroMaior = function (valor) {
    return valor > 10;
};
//função com parametro opcional, usando o ?
function exibir(nome, idade) {
    var i = idade || 0;
    console.log("Nome: " + nome + ". Idade: " + i);
}
//Arrow Function
var multiplicar = function (n1, n2) {
    return n1 * n2;
};
//Exercício
var idadeNascimento = function (nome, ano) {
    var idade = 2022 - ano;
    console.log("Nome: " + nome + ". Idade: " + idade);
};
//Array
var numeros = [5, 1, 12, 20];
function listar(x) {
    for (var i = 0; i < x.length; i++) {
        console.log(x[i]);
    }
}
//Desafio 
qualNome("Ariane");
console.log(somar(2, 2));
console.log(numeroMaior(12));
exibir("Ariane");
console.log(multiplicar(2, 2));
idadeNascimento("Ariane", 2000);
//console.log(numeros);
listar(numeros);
numeros.forEach(function (x) {
    console.log("Valor Original: " + x);
    console.log("Valor Alterado: " + (x * 2));
});
console.log("Números antes da ordenação: ");
console.log(numeros);
numeros.sort();
console.log("Números depois da ordenação(ordem incorreta): ");
console.log(numeros);
function maior(n1, n2) {
    var resultado = n1 - n2;
    return resultado;
}
console.log(maior(5, 1));
numeros.sort(function (n1, n2) {
    return n1 - n2;
});
console.log('Números ordenados (ordem correta): ');
console.log(numeros);
