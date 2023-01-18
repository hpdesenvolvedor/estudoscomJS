/*
Henrique Nunes da Paixão tem 31 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925926924
Henrique Nunes nasceu em 1990;
*/

const nome = 'Henrique Nunes';
const sobrenome = 'Paixão';
const idade = 31;
const peso = 84;
const alturaEmM = 1.80;
//let imc; // peso / (altura * altura)
//let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
console.log(indiceMassaCorporal);

anoNascimento = (2022 - idade);
console.log(anoNascimento);

console.log(`${nome}, ${sobrenome}, tem ${idade} anos, pesa ${peso} kg`);

console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);

console.log(`${nome} nasceu em ${anoNascimento}.`);