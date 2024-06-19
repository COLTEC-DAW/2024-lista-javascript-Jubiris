function verificaPalindromo(palavra) {
    
    // Remover espaços em branco e converter para letras minúsculas
    palavra = palavra.toLowerCase().replace(/\s/g, '');

    // Inverter a palavra
    const palavraInvertida = palavra.split('').reverse().join('');

    // Comparar a palavra original com a palavra invertida
    if (palavra === palavraInvertida) {
        return true;
    } else {
        return false;
    }
}

// Exemplo de uso:
const palavra = prompt('Digite uma palavra para verificar se é um palíndromo:');
const ehPalindromo = verificaPalindromo(palavra);

if (ehPalindromo) {
    console.log(`${palavra} é um palíndromo.`);
} else {
    console.log(`${palavra} não é um palíndromo.`);
}
