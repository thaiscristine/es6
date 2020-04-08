const arr = [1, 3, 4, 5, 6];

// arrow function
const newArr = arr.map( item =>  item * 2);

console.log(newArr);

const teste = () => {
    return 'teste';
}
console.log(teste());

const teste1 = () => 'teste';
const teste2 = () => [1,2,3];
const teste3 = () => 3;
console.log(teste1());
console.log(teste2());
console.log(teste3());
//object needes a parenteses 
const teste4 = () => ({ nome: 'Thais'});
console.log(teste4());