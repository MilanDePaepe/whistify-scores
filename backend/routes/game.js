var express = require("express");
var router = express.Router();

const controller = require("../controllers/gamesController");

/* GET games listing. */
router.get("/", controller.getGames);

router.post("/", controller.createGame);

router.get("/:id/rounds", controller.getRoundsByGameId);

router.post("/:id/rounds", controller.createRound);

router.get("/:id", controller.getGameById);

router.delete("/:id", controller.deleteGame);

module.exports = router;
