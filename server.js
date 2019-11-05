const express = require("express");
const app = express();
const consign = require("consign");
const PORT = 3000;

app.set("json spaces", 4);

consign()
    .include("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);