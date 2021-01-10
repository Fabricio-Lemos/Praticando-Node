const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

//Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Conexão com Banco de Dados MySQL
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('teste', 'root', '0636OBgl', {
        host: 'localhost',
        dialect:'mysql'
    })

//Rotas

    app.get('/cad', function(req, res){
        res.render('formulario')
    })

app.listen(8081, function(){
    console.log('Servidor iniciado!')
})