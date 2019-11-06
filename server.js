const express = require("express");
const app = express();
const consign = require("consign");

app.set("json spaces", 4);

consign()
    .include("models")
    .then("libs")
    .then("routes")
    .then("libs/boot.js")
    .then("controllers")
    .into(app);

let login = app.libs.config.username;
let senha = app.libs.config.password;
require("./config/database.js")(`mongodb+srv://${login}:${senha}@teste-j0o3k.mongodb.net/test?retryWrites=true&w=majority`);