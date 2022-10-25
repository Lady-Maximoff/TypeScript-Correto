//Uso da interpolação

let nome1: string = "Ariane";

console.log('O nome é: ' +nome1);

//interpolação
console.log(`O nome é: ${nome1} `);

let titulos = function(vezes: number): boolean {
    return vezes > 12;
}

//Função para dividir dois números:

function dividir(n1: number, n2: number): number { 
    return n1 / n2;
}

console.log(`O resultado é: ${dividir(10,2)}`);

/*let time = "Paris Saint-Germain"
let numeroDeTitulos = 4;

console.log(`Ter ${numeroDeTitulos} titulos não é o suficiente para ultrapassar o ${time}`);

console.log(`Ter ${numeroDeTitulos} titulos não é o suficiente para ultrapassar o ${time}? ${titulos(numeroDeTitulos)? 'Sim': 'Não'}`);*/


function avaliarNumero(n1: number){
    return (n1%2 == 0);
}
//Operador ternário ?
console.log(`O número é ${avaliarNumero(8) ? 'Par' : 'Ímpar'}`);


