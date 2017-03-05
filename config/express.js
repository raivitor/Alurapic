var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var load = require('express-load');

app.use(express.static('./public'));
app.use(bodyParser.json());

load('models', {
		cwd: 'app'
	})
	.then('api')
	.then('routes')
	.into(app);
	
module.exports = app;