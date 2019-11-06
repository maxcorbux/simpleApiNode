let mongoose = require("mongoose");

module.exports = () => {
    let schema = mongoose.Schema({
        nome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            index: {
                unique: true
            }
        }
    });
    return mongoose.model('Contato', schema);
}