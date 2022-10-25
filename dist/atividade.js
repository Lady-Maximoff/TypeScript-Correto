//Com valor opcional
function calcularSalario1(salario1, aumento1) {
    var x = aumento1 || 5;
    return ((salario1 * x / 100) + salario1);
}
console.log("Seu novo sal\u00E1rio \u00E9 ".concat(calcularSalario(1000)));
//Função com valor padrão
function calcularSalario(salario, aumento) {
    if (aumento === void 0) { aumento = 5; }
    var x = aumento || 5;
    return ((salario * x / 100) + salario);
}
console.log("Seu novo sal\u00E1rio \u00E9 ".concat(calcularSalario(1000)));
