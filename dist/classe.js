var Laptop = /** @class */ (function () {
    /*Construtor sem parâmetro²
    constructor(){}
*/
    //Construtor com parâmetro¹
    function Laptop(tela) {
        this.tela = tela; //Tudo com this é da classe
    }
    Laptop.prototype.ligarMonitor = function () {
        console.log('O monitor foi ligado');
    };
    return Laptop;
}());
var computador;
var outro;
/* parâmetro¹
computador = new Laptop(14);
*/
computador = new Laptop(14);
outro = new Laptop(21);
computador.ligarMonitor();
console.log("O tamanho da tela \u00E9 de ".concat(computador.tela, " polegadas"));
console.log("O tamanho da tela \u00E9 de ".concat(outro.tela, " polegadas"));
