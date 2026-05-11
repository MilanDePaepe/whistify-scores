const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  id: String,
  score: Number,
});

const roundSchema = new mongoose.Schema({
  roundNumber: Number,
  scores: [scoreSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Round", roundSchema);
