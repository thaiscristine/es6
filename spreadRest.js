// REST - resto das propriedades

const usuario = {
    name: "Thais",
    empresa: "Brunatha",
    idade: 25
};

const { name, ...resto } = usuario;
//console.log(name);
//console.log(resto);

//arrays / vetores
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
//console.log(a, b,c)

//parametros de funções
/*function soma(a, b, c, d, e) {
    return a + b + c + d + e;
}*/
function soma(...params) {
    return params.reduce((total, next) => total + next);
}
//console.log(soma(1,2,3));

// SPREAD -> propagar -> envia os dados para outra estrutura de dados
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];
//console.log(arr3);

// sobrepor dado
const usuario2 = { ...usuario, name: "Thaisss" };
console.log(usuario2)

