const scores = require("./scores");
const distrubutor = require("./distributeScore");

exports.calculateSolo = (players, against, target, tricks) => {
  let score;

  const s = scores[`SOLO_${target}`];
  if (tricks >= target) {
    score = s.standardScore + s.puntenOverslagen * (tricks - target);
    score = Math.min(score, s.maxScore);
  } else {
    score = s.standardScore + s.puntenOverslagen * (target - tricks - 1);
    score = -score;
  }
  return distrubutor.distributeScore(players, against, score, -score / 3);
};

exports.calculateSamen = (players, against, target, tricks) => {
  let score;

  if (tricks >= target) {
    // tricks >= target: use the score for the exact number of tricks
    score = scores[`SAMEN_${tricks}`];
  } else {
    score =
      scores[`SAMEN_${target}`].standardScore +
      scores[`SAMEN_${target}`].puntenOnderslagen * (target - tricks - 1);
    score = -score;
  }
  return distrubutor.distributeScore(players, against, score, -score);
};

exports.calculateExact = (players, against, tricks, type) => {
  let score = scores[type].standardScore;
  score = tricks == scores[type].goal ? score : -score;

  return distrubutor.distributeScore(players, against, score, -score / 3);
};

exports.calculateTroel = (players, against, tricks, type) => {
  let score = scores[type].standardScore;
  score = tricks > scores[type].goal ? score : -score;
  return distrubutor.distributeScore(players, against, score, -score);
};
