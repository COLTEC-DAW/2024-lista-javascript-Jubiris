function toList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}
console.log(toList([1, 2, 3])); 
// Saída esperada: { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
