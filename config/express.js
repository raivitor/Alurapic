var express = require('express');
var app = express();
var consign = require('consign');
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

load()
	/*
	consign({
			cwd: __dirname + '/app'
		})
		.include('models')
		.then('api')
		.then('routes')
		.into(app);
	*/
module.exports = app;