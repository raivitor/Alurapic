var http = require('http');
var app = require('./config/express');
require('./config/database')('raivitor:hehehehe@ds117830.mlab.com:17830/horadoshow');
//require('./config/database')('localhost/alurapic');

var porta = process.env.PORT || 3000;
http.createServer(app).listen(porta, function () {
	console.log('Servidor iniciado');
})