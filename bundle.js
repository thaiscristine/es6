"use strict";

var usuario = {
  nome: 'Thais',
  idade: 25,
  endereco: {
    cidade: 'SBC',
    estado: 'SP'
  }
}; //const { nome, idade, endereco: { estado } } = usuario;
//console.log(estado);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
