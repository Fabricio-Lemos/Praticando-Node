var http = require('http')

http.createServer(function(req, res){
    res.end('Hello World! Welcome to my all new WebServer created by Node js')
}).listen(8081)

console.log('Servidor Iniciado')