enum Cor{
    Vermelho,
    Amarelo,
    Verde
}

let cor = "Vermelho";

/*if (cor == 'Verde'){
    console.log("Siga! Acelere");
}else {
    console.log("Pare!");
}*/

if (cor == Cor[2]){
    console.log("Siga! Acelere");
}else {
    console.log("Pare!");
}


console.log("Valor enum: ");
console.log(Cor.Verde);

let corDoEnum: Cor;
corDoEnum = Cor.Verde;

console.log("Variável do tipo enum: ");
console.log(corDoEnum);

console.log(Cor[1]);
