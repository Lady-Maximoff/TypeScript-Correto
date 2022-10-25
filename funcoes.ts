function qualNome(nome: string): void{
    console.log("Você passou o nome: "+nome);
}

function somar(n1, n2: number): number{
    return (n1+n2);
}

//função dentro da variável numeroMaior
let numeroMaior = function (valor : number): boolean{
    return valor > 10;
}

//função com parametro opcional, usando o ?
function exibir(nome: string, idade?: number): void{
    let i = idade || 0;

    console.log("Nome: " +nome+ ". Idade: "+i);
}

//Arrow Function
let multiplicar = (n1, n2: number) => {
    return n1*n2;
}

//Exercício
let idadeNascimento = (nome: string, ano: number) =>{
    let idade = 2022 - ano;
    console.log("Nome: "+nome+ ". Idade: " +idade);
}

//Array
let numeros: Array <number> = [5, 1, 12, 20];
function listar(x: Array<number>):void {
    for(let i = 0; i < x.length; i++){
        console.log(x[i]);
    }
}

//Desafio 


    
qualNome("Ariane");

console.log(somar(2,2));

console.log(numeroMaior(12));

exibir("Ariane");

console.log(multiplicar(2, 2));

idadeNascimento("Ariane", 2000);

//console.log(numeros);
listar(numeros);

numeros.forEach((x) => {
    console.log("Valor Original: "+x);
    console.log("Valor Alterado: "+ (x * 2));
});

console.log("Números antes da ordenação: ");
console.log(numeros);
numeros.sort();
console.log("Números depois da ordenação(ordem incorreta): ");
console.log(numeros);

function maior(n1, n2: number): number{
    let resultado = n1 -n2;
    return resultado;
}

console.log(maior(5,1));

numeros.sort((n1, n2: number) => {
    return n1-n2; 
});

console.log('Números ordenados (ordem correta): ');
console.log(numeros);

