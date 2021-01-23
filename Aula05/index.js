const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Bem Vindos ao Meu App!')
})

app.get('/ola/:nome/:cargo', function(req,res){
    res.send('<title>Meu App</title><h1>Ola' + ' ' + req.params.nome + '</h1>' + '<h2> Seu cargo e: ' + req.params.cargo)
})

app.listen(8081, function(){console.log('Servidor Iniciado')})