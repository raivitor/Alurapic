module.exports = function(app) {
    var api = app.app.api.grupo;
    app.get('/v1/grupos', api.lista);
}