exports.distributeScore = (players, against, playersScore, againstScore) => {
  let result = {};
  players.forEach((player) => {
    result[player] = playersScore;
  });
  against.forEach((player) => {
    result[player] = againstScore;
  });
  return result;
};
