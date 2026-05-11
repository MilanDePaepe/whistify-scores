const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  players: [{ id: String, name: String }],
  rounds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Round" }],
});

module.exports = mongoose.model("Game", gameSchema);
