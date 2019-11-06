let mongoose = require("mongoose");

module.exports = function(uri) {
    mongoose.connect(uri, { useNewUrlParser: true });
    mongoose.connection.on('connected', function() {
        console.log("Conectado em " + uri);
    });
    mongoose.connection.on('disconnected', function() {
        console.log("desconectado em " + uri);
    });
    mongoose.connection.on('erro', function(erro) {
        console.log(erro);
    });
    process.on("SIGINT", () => {
        mongoose.connection.close(() => {
            console.log("Mongoose! Desconectado pelo término da aplicação ");
        });
        process.exit(0);
    });
}