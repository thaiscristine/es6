"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Diego',
  idade: 26,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var ages = [];
usuarios.map(function (user) {
  return ages.push(user.idade);
});
console.log(ages);
var filtering = usuarios.filter(function (user) {
  return user.idade > 18 && user.empresa === 'Rocketseat';
});
console.log(filtering);
var filter = usuarios.filter(function (item) {
  return item.idade > 18 && item.empresa === 'Rocketseat'; // operacao de módulo
});
console.log(filter);
var google = usuarios.find(function (user) {
  return user.empresa === 'Google';
});
console.log(google);
var operations = usuarios.map(function (user) {
  return _objectSpread({}, user, {
    idade: user.idade * 2
  });
}).filter(function (user) {
  return user.idade > 50;
});
console.log(operations);
