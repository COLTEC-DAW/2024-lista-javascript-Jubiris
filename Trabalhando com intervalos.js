function range(min, max, i = 1) {
    let result = [];
    for (let num = min; num <= max; num += i) {
        result.push(num);
    }
    return result;
}

console.log(range(1, 5)); // Saída esperada: [1, 2, 3, 4, 5]
