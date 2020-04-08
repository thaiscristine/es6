// Valores padrões
function soma(a = 3,b = 6) {
    return a + b;
}

console.log(soma(1)); // 7
console.log(soma());  // 9

const soma2 = (a = 3,b = 6) => a + b;

console.log(soma2());