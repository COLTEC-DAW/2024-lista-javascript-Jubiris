function deepEquals(obj1, obj2) {

    // Verificar se são do mesmo tipo
    if (typeof obj1 !== typeof obj2) {
        return false;
    }

    // Verificar se são objetos ou arrays
    if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
        
        // Verificar se têm o mesmo número de propriedades
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        
        // Verificar cada propriedade recursivamente
        for (let prop in obj1) {
            if (!deepEquals(obj1[prop], obj2[prop])) {
                return false;
            }
        }
        
        return true;
    }

    // Comparar valores diretamente se não forem objetos ou arrays
    return obj1 === obj2;
}
console.log(deepEquals({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // Saída esperada: true

