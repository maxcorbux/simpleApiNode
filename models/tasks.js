module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                { title: "Programar" },
                { title: "Continuar a Programar" }
            ]);
        }
    };
}