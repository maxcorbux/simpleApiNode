module.exports = app => {
    let Contato = app.models.contato;
    let controller = {};
    controller.listaContato = function(req, resp) {
        let promise = Contato.find().exec()
            .then(function(contato) {
                resp.json(contato);
            }, erro => {
                console.error(erro);
                resp.status(500).json(erro);
            });
    }
    controller.obtemContato = function(req, resp) {

    }
    controller.removeContato = function(req, resp) {

    }
    controller.salvaContato = function(req, resp) {

    }
    return controller
}