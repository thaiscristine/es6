class Usuario {
    constructor(email, senha) {
        this.user = [];
        this.user.email = email;
        this.user.senha = senha;
    }

    isAdmin(){
        const admin = this.user.admin ? true : false;
        return admin;
    }
}

class Admin extends Usuario {
    constructor(){
        super();
        this.user.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const User2 = new Usuario('thais@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
const Adm2 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
console.log(User2.isAdmin()); // false

console.log(Adm2.isAdmin()) // true
