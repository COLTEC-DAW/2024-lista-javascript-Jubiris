// Definindo o número de linhas desejado
const linhas = 6; // Podemos ajustar conforme necessário

// Loop para construir cada linha
for (let i = 2; i <= linhas; i++) {
    let linha = ''; // String para armazenar a linha atual
    
    // Adicionar '#' à linha atual
    for (let j = 1; j <= i; j++) {
        linha += '#';
    }
    
    // Imprimir a linha no console
    console.log(linha);
}
