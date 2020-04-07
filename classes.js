class List {
    constructor() {
        this.data = [];
    }

    addTodo(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

// Efeito de herança
class TodoList extends List {
    constructor() {
        super();

        this.user = "Thais";
    }

    mostrarUsuario() {
        console.log(this.user);
    }
}

// classes estáticas nao precisam de constructor
class Matematica {
    static soma(a, b) {
        return a + b
    }
}

//instanciando a classe -> variável que armazena a TodoList();
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo('Novo Todo x');
}

MinhaLista.mostrarUsuario();

// Chama a classe sem instanciar
console.log(Matematica.soma(2,3));