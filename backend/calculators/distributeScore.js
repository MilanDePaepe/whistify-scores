exports.distributeScore = (players, against, playersScore, againstScore) => {
  let result = {};
  players.forEach((player) => {
    result[player] = playersScore;
  });
  against.forEach((player) => {
    result[player] = againstScore;
  });
  return Object.entries(result).map(([id, score]) => ({ id, score }));
};
