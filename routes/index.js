module.exports = app => {
    app.get('/', (req, resp) => {
        resp.json({ status: "NTASK api" });
    });
}