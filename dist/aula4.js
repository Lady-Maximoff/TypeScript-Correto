var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Verde"] = 2] = "Verde";
})(Cor || (Cor = {}));
var cor = "Vermelho";
/*if (cor == 'Verde'){
    console.log("Siga! Acelere");
}else {
    console.log("Pare!");
}*/
if (cor == Cor[2]) {
    console.log("Siga! Acelere");
}
else {
    console.log("Pare!");
}
console.log("Valor enum: ");
console.log(Cor.Verde);
var corDoEnum;
corDoEnum = Cor.Verde;
console.log("Variável do tipo enum: ");
console.log(corDoEnum);
console.log(Cor[1]);
