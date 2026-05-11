import { calculateScores } from "../calculators/calculateScores.js";
import Game from "../models/game.js";
import Round from "../models/round.js";

export async function getGames(req, res, next) {
  const games = await Game.find();

  return res.json({ games: games, fields: { players: ["name"] } });
}

export async function getGameById(req, res, next) {
  const gameId = req.params.id;
  const game = await Game.findById(gameId);
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }
  return res.json({ game: game });
}

export async function createGame(req, res, next) {
  let players = req.body.players;
  if (!players) {
    return res.status(400).json({ error: "players are required" });
  }
  if (players.lenght !== 4) {
    return res.status(400).json({ error: "There must be exactly 4 players" });
  }

  players = players.map((index, player) => {
    return { id: index, name: player };
  });

  const game = new Game({ players: players });
  await game.save();

  return res.json({ game: game });
}

export async function getRoundsByGameId(req, res, next) {
  const gameId = req.params.id;
  const game = await Game.findById(gameId).populate("rounds");
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }
  const rounds = game.rounds;
  return res.json({ rounds: rounds });
}

export async function createRound(req, res, next) {
  const gameId = req.params.id;
  const type = req.body.type;
  const players = req.body.players;
  const against = req.body.against;
  const target = req.body.target;
  const tricks = req.body.tricks;
  const scores = calculateScores(type, players, against, target, tricks);

  const game = await Game.findById(gameId);
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  const round = await Round.create({
    type: type,
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
}

// round = {
//   type: "SOLO",
//   players: [0],
//   against: [1, 2, 3],
//   target: 5,
//   tricks: 5,
// };
