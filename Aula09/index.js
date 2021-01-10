const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

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
    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//Rotas

    app.get('/cad', function(req, res){
        res.render('formulario')
    })
    app.post('/postar', function(req, res){
        res.send('Titulo: ' + req.body.titulo + ' ' + 'e Conteudo: ' + req.body.conteudo)
    })

app.listen(8081, function(){
    console.log('Servidor iniciado!')
})