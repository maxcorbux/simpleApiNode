let moongose = require("mongoose");

module.exports = () => {
    let schema = moongose.Schema({
        title: [String],
        done: Boolean,

    });
    return moongose.model("Tarefas", schema);
}