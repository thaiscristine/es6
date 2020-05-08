const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Diego', idade: 26, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const ages = [];
usuarios.map(user => ages.push(user.idade));
console.log(ages);

const filtering = usuarios.filter(user => user.idade > 18 && user.empresa === 'Rocketseat');
console.log(filtering);

const filter = usuarios.filter(function(item){
    return item.idade > 18 && item.empresa === 'Rocketseat'; // operacao de módulo
});
console.log(filter);

const google = usuarios.find(user => user.empresa === 'Google');
console.log(google);

const operations = usuarios.map(user => ({ ...user, idade:user.idade * 2 })).filter(user => user.idade > 50);
console.log(operations);