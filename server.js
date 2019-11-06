const express = require("express");
const app = express();
const consign = require("consign");
let login = "testeiro";
let senha = "123teste123";
require("./config/database.js")(`mongodb+srv://${login}:${senha}@teste-j0o3k.mongodb.net/test?retryWrites=true&w=majority`);

app.set("json spaces", 4);

consign()
    .include("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);