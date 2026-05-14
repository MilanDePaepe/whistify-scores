var express = require("express");
var router = express.Router();
const gamesController = require("../controllers/gamesController");
const game = require("../models/game");

/* GET home page. */
router.get("/", gamesController.getGames);

router.post("/", gamesController.createGame);

module.exports = router;
