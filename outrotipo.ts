//Demonstração do tipo any

let ativo: any = true;
ativo = "Monstro";
ativo = [100, false, 'Uso do tipo any'];

console.log(ativo[2]);