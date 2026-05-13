const express = require("express");
const { json, urlencoded } = express;

const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const gameRouter = require("./routes/game");

var app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/game", gameRouter);

module.exports = app;
