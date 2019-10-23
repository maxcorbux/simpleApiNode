const express = require("express");
const app = express();
const PORT = 3000;

app.set("json spaces", 4);

app.listen(PORT, () => {
    console.log(`Task api - porta ${PORT}`);
});
app.get("/", (req, resp) => {
    resp.json({ status: "API RODANDO" })
});
app.get("/tasks", (req, resp) => {
    resp.json({
        task: [
            { title: "Fazer compras" },
            { title: "Consertar o pc" }
        ]
    });
});