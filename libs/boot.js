module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`N Task API - porta ${app.get('port')}`)
    });
};