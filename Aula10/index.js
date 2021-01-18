const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//Config
    //Template Engine
        app.engine('handlebars', handlebars({
            defaultLayout: 'main',
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true,
            }
        }))
        app.set('view engine', 'handlebars') //o original não se desoriginaliza
    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//Rotas
    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'desc']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
    })

    app.get('/cad', function(req, res){
        res.render('formulario')
    })
    app.post('/postar', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('Ocorreu um erro: ' + erro)
        })
    })
    app.get('/del/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send('Deletado Com Sucesso!')
        }).catch(function(){
            res.send('Essa Postagem não existe')
        })
    })

app.listen(8081, function(){
    console.log('Servidor iniciado!')
})