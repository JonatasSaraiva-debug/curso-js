let x = 10; // variável de controle

while(x > 0) {// enquanto x for maior que 0, o código dentro do bloco será executado
    console.log("o x é: " + x);// exibe o valor atual de x
    x = x - 1;// decrementa o valor de x em 1 a cada iteração
}

let y = 0; // variável de controle

while(y <= 10) {// enquanto y for menor ou igual a 10, o código dentro do bloco será executado
    console.log("o y é: " + y);// exibe o valor atual de y
    y = y + 1;// incrementa o valor de y em 1 a cada iteração
}

let z = 1; // variável de controle

while(z > 0) {// enquanto z for maior que 0, o código dentro do bloco será executado
    console.log("o z é: " + z);// exibe o valor atual de z
}// isso travou meu computador, pois z nunca é decrementado, criando um loop infinito. Cuidado ao usar loops while para garantir que a condição de parada seja alcançada.