const express = require('express');
const app = express();

console.log('Servidor Iniciado')

app.get('/', function(req,res){
    res.send('Ola, Esta e minha pagina')
})

app.listen(8081)