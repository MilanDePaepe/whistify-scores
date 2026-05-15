const calculators = require("../calculators/calculateScores");
const Game = require("../models/game");
const Round = require("../models/round");

exports.getGames = async (req, res, next) => {
  const games = await Game.find();

  return res.json({ games: games, fields: ["players", "name"] });
};

exports.getGameById = async (req, res, next) => {
  const gameId = req.params.id;
  const game = await Game.findById(gameId);
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }
  return res.json({ game: game });
};

exports.createGame = async (req, res, next) => {
  let players = req.body.players;
  const name = req.body.name;
  if (!name) {
    return res.status(400).json({ error: "name is required" });
  }
  if (!players) {
    return res.status(400).json({ error: "players are required" });
  }
  if (players.length !== 4) {
    return res.status(400).json({ error: "There must be exactly 4 players" });
  }

  players = players.map((player, index) => {
    return { id: index, name: player };
  });

  const game = new Game({ name: name, players: players });
  await game.save();

  return res.json({ game: game });
};

exports.getRoundsByGameId = async (req, res, next) => {
  const gameId = req.params.id;
  const game = await Game.findById(gameId).populate("rounds");
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }
  const rounds = game.rounds;
  return res.json({
    rounds: rounds,
    fields: ["type", "dealer", "players", "against", "target", "tricks"],
  });
};

exports.createRound = async (req, res, next) => {
  const gameId = req.params.id;
  const type = req.body.type;
  const dealer = req.body.dealer;
  const players = req.body.players;
  const against = req.body.against;
  const target = req.body.target;
  const tricks = req.body.tricks;
  const scores = calculators.calculateScores(
    type,
    players,
    against,
    target,
    tricks,
  );

  const game = await Game.findById(gameId);
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  const roundNumber = game.rounds.length + 1;
  const round = await Round.create({
    roundNumber: roundNumber,
    type: type,
    dealer: dealer,
    players: players,
    against: against,
    target: target,
    tricks: tricks,
    scores: scores,
  });
  await round.save();
  game.rounds.push(round._id);
  await game.save();
  return res.json({ round: round });
};

exports.deleteGame = async (req, res, next) => {
  const gameId = req.params.id;
  const game = await Game.findById(gameId);
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }
  await Round.deleteMany({ _id: { $in: game.rounds } });
  await Game.findByIdAndDelete(gameId);
  return res.json({ message: "Game deleted" });
};
