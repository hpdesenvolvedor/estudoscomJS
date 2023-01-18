const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue continua para próxima iteração
// Vreak sai do laço

for (let numero of numeros) {

    
    if (numero === 2) {   //o número que não será exibido e continua, isso é o que o 'continue' faz
        continue;
    }

    console.log(numero)

    if (numero === 7) {   //para no número indicado e sai isso é o 'break'
        break;
    }
}