//Mudando os valores conforme os comentários abaixo

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const varAtemp = varA
varA = varB;
varB = varC;
varC = varAtemp;

// [varA, varB, varC] = [varB, varC, varA]; Assim também funciona

console.log(varA, varB, varC);