function countChars(frase, c) {
    // Inicializa um contador para contar as ocorrências
    let count = 0;

    // Percorre cada caractere da string frase
    for (let i = 0; i < frase.length; i++) {
        // Verifica se o caractere na posição i é igual ao caractere c
        if (frase.charAt(i) === c) {
            count++;
        }
    }

    // Retorna o número de ocorrências do caractere c na string frase
    return count;
}

console.log(countChars('Hello world', 'o')); // Saída esperada: 2 (o caractere 'o' aparece duas vezes em 'Hello world')

