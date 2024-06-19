for (let i = 1; i <= 100; i++) {
    // Verificar se o número é divisível por 3 e por 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    // Verificar se o número é divisível por 3
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    // Verificar se o número é divisível por 5
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    // Caso contrário, imprimir o número
    else {
        console.log(i);
    }
}
