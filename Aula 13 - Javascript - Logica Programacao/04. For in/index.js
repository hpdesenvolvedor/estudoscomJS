// For in -> Lê os indices ou chaves do objeto

const pessoa = {
    nome: 'Henrique',
    sobrenome: 'Nunes',
    idade: 31
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
/*
for (let i in pessoa) {
    console.log(i);
}
*/
//                0       1       2
/*const frutas = ['Pera', 'Maçã', 'Uva'];
for (let i in frutas) {
    console.log(i);
}
*/



/*
for (let i = 0; i < frutas.length; i++ ) {
    console.log(frutas[i])
}
*/