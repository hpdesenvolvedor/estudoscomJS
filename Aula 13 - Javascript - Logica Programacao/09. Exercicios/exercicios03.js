/* Escreva um função que recebe
um numero e retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número
Use a função com númerode 0 a 100. */

function numRecebe(numero){
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    
        return numero  
}

for (let i = 0; i <= 100; i++) {
    console.log(i, numRecebe(i))
}