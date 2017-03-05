var mongoose = require('mongoose');
var api = {}
var model = mongoose.model('Foto');

api.lista = function(req, res) {
	model
		.find({})
		.then((fotos) => res.json(fotos)
		, function (error) {
			res.status(500).json(error);
		});
};

api.buscaPorId = function(req, res) {
	model
		.findById(req.params.id)
		.then(function (foto) {
			if(!foto) throw Error('Foto não encontrada');
			res.json(foto);
		}, function (error) {
			console.log(error);
			res.status(404).json(error);
		});
};

api.removePorId = function(req, res) {
	model
		.remove({_id: req.params.id})
		.then(function (argument) {
			res.sendStatus(204);
		}, function (error) {
			console.log(error);
			res.status(500).json(error);
		});
};

api.adiciona = function (res, req) {
	var foto = res.body;
	model
		.create(foto)
		.then(function (foto) {
			res.json(foto);
		}, function (error) {
			console.log(error);
			res.status(500).json(error);
		});
};

api.atualiza = function(req, res){
	model
		.findByIdAndUpdate(req.params.id, req.body)
		.then(function (foto) {
			res.json(foto);
		}, function (error) {
			console.log(error);
			res.status(500).json(error);
		});
};

module.exports = api;