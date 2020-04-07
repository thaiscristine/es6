const arr = [1,2,3,4,5,6,7,8,9];

// map percorre todos os itens do array e tem acesso aos mesmos e ao index
const newArr = arr.map(function(item, index){
    return item + index;
});
//console.log(newArr);

// reduce percorre todo o array trabalhando com o valor total(that starts 0) e o valor do próximo item
const sum = arr.reduce(function(total, next){
    return total + next;
    // 0 + 1 // 1 + 2 // 3 + 3 // 6 + 4 // ... 
})
//console.log(sum);

// filter percorre todo o array com acesso a cada item. Retorna sempre true or false
const filter = arr.filter(function(item){
    return item % 2 === 0; // operacao de módulo
})
//console.log(filter);

// find percorre o array verificando item por item. Retorna o valor se encontrado e undefined caso o contrário
const find = arr.find(function(item){
    return item === 2;
});
console.log(find)