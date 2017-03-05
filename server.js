var http = require('http');
var app = require('./config/express');
require('./config/database')('raivitor:hehehehe@ds117830.mlab.com:17830/horadoshow');
//require('./config/database')('localhost/alurapic');
 
var porta = process.env.PORT || 5000;
http.createServer(app).listen(porta, function () {
	console.log('Servidor iniciado');
})

/*
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});*/