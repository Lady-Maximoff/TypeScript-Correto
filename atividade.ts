
//Com valor opcional
function calcularSalario1(salario1: number, aumento1?: number):number{
    let x = aumento1 || 5;
    return ((salario1 * x / 100) +salario1);
}
console.log(`Seu novo salário é ${calcularSalario(1000)}`);


//Função com valor padrão

function calcularSalario(salario: number, aumento: number = 5){
    let x = aumento || 5;
    return ((salario * x / 100) +salario);
}
console.log(`Seu novo salário é ${calcularSalario(1000)}`);
    

    



