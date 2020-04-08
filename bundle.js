"use strict";

var arr = [1, 3, 4, 5, 6]; // arrow function

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return 'teste';
};

console.log(teste());

var teste1 = function teste1() {
  return 'teste';
};

var teste2 = function teste2() {
  return [1, 2, 3];
};

var teste3 = function teste3() {
  return 3;
};

console.log(teste1());
console.log(teste2());
console.log(teste3()); //object needes a parenteses 

var teste4 = function teste4() {
  return {
    nome: 'Thais'
  };
};

console.log(teste4());
