const linhas = 8;

// Variável para armazenar o padrão final
let saida = '';

// Loop pelas linhas
for (let i = 1; i <= linhas; i++) {
    // Loop pelos caracteres dentro de cada linha
    for (let j = 1; j <= 8; j++) {
        // Alternando entre '#' e ' '
        if ((i + j) % 2 === 0) {
            saida += '#';
        } else {
            saida += ' ';
        }
    }
    // Adiciona uma quebra de linha ao final de cada linha
    saida += '\n';
}

// Exibir o resultado na página
 console.log(saida);
