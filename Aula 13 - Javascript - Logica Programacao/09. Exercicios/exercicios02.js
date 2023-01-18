/* Escreva um função chamada ePaisagem que 
recebe dois argumentos, largura e alltura
de uma imagem (number).allturaretorne true se a imagem 
estiver no modo paisagem. OLHAR O ARROW FUNCTION NO ULTIMO EXEMPLO*/

/*
function ePaisagem (largura, altura){
    if(largura > altura){
        return(true);
    } else {
        return(false);
    }
    
};


console.log(ePaisagem(10920, 1000));

/* OUTRO EXEMPLO 


function ePaisagem(largura, alltura) {
    return largura > alltura ? true : false;
}

console.log(ePaisagem(1920, 1080));
*/

// Transformando em Arrow Function

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1960, 1950))