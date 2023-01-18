// Escreva uma função que recebe 2 número e retorne o maior deles

const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 5));


//Outro exemplo abaixo

function numeros(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(numeros(1,2));

