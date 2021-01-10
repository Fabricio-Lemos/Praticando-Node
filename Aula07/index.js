const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '0636OBgl', {
    host: 'localhost',
    dialect:'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: 'Praticando Node',
    conteudo: 'Estou Aprendendo a usar o node Js e está sendo eficiente.'
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})