const usuario = {
    nome: 'Thais',
    idade: 25,
    endereco: {
        cidade: 'SBC',
        estado: 'SP',
    },
};

//const { nome, idade, endereco: { estado } } = usuario;
//console.log(estado);

function mostraNome({ nome, idade }) {
    console.log(nome, idade)
}

mostraNome(usuario)