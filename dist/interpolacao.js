//Uso da interpolação
var nome1 = "Ariane";
console.log('O nome é: ' + nome1);
//interpolação
console.log("O nome \u00E9: ".concat(nome1, " "));
var titulos = function (vezes) {
    return vezes > 12;
};
//Função para dividir dois números:
function dividir(n1, n2) {
    return n1 / n2;
}
console.log("O resultado \u00E9: ".concat(dividir(10, 2)));
/*let time = "Paris Saint-Germain"
let numeroDeTitulos = 4;

console.log(`Ter ${numeroDeTitulos} titulos não é o suficiente para ultrapassar o ${time}`);

console.log(`Ter ${numeroDeTitulos} titulos não é o suficiente para ultrapassar o ${time}? ${titulos(numeroDeTitulos)? 'Sim': 'Não'}`);*/
function avaliarNumero(n1) {
    return (n1 % 2 == 0);
}
//Operador ternário ?
console.log("O n\u00FAmero \u00E9 ".concat(avaliarNumero(8) ? 'Par' : 'Ímpar'));
