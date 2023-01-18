//const numero = Number(prompt ('Digite um número'));
//const numeroTitulo = document.getElementById('numero-titulo')
//const texto = document.getElementById('texto')
//const raizquadrada = document.getElementById('raiz-quadrada')

//numeroTitulo.innerHTML = numero;
//texto.innerHTML = `<p>Seu número + 2 é ${numero + 2} </p>`;
//raizquadrada.innerHTML = Math.sqrt(numero);

//function saudacao(){
//    console.log('Bom dia')
//}

//saudacao()

//function saudacao(nome){
//    console.log(`Bom dia ${nome}!`);
//}

//saudacao('Henrique');

//function saudacao(nome){
//    return `Bom dia ${nome}!`;
//}

//const variavel = saudacao('Henrique');
//console.log(variavel);

//function soma(x, y){
//    const resultado = x + y;
//    return resultado;
//}

//const resultado = soma( 5, 5);
//console.log(resultado)

/*const grupo1 = {
    nome: 'Henrique',
    idade: 22,                  //Quando utilizado a chaves é um objeto
    altura: 1.80,
};

console.log(grupo1.altura)*/
//---------------------------------
/*function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Henrique', 'Nunes', 31);
const pessoa2 = criaPessoa('Henrique', 'Nunes', 31);
const pessoa3 = criaPessoa('Henrique', 'Nunes', 31);

console.log(pessoa1.nome, pessoa2.sobrenome);*/

const a = {
    nome: 'Henrique',
    sobrenome: 'Nunes'
};

const b = a;
b.nome = 'Paixão';

console.log(b)