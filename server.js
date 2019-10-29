const express = require("express");
const app = express();
const consign = require("consign");
const PORT = 3000;

app.set("json spaces", 4);

consign()
    .include("routes")
    .then("views")
    .into(app);

app.listen(PORT, () => {
    console.log(`Task api - porta ${PORT}`);
});