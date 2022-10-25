class Laptop{
    tela: number; //atributo

    /*Construtor sem parâmetro²
    constructor(){}
*/
    //Construtor com parâmetro¹
    constructor(tela:number){
        this.tela = tela; //Tudo com this é da classe
    }

    ligarMonitor(){ //método
        console.log('O monitor foi ligado');
    }

}

let computador: Laptop;
let outro: Laptop;

/* parâmetro¹
computador = new Laptop(14);
*/
 
computador = new Laptop(14);
outro = new Laptop(21);

computador.ligarMonitor();

console.log(`O tamanho da tela é de ${computador.tela} polegadas`);
console.log(`O tamanho da tela é de ${outro.tela} polegadas`);