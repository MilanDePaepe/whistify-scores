const calculators = require("./calculators");

exports.calculateScores = (type, players, against, target, tricks) => {
  let scores;
  switch (type) {
    case "SOLO":
      scores = calculators.calculateSolo(players, against, target, tricks);
      break;
    case "SAMEN":
      scores = calculators.calculateSamen(players, against, target, tricks);
      break;
    case "ABONDANCE":
      scores = calculators.calculateSolo(players, against, target, tricks);
      break;
    case "KLEINE_MISERIE":
      scores = calculators.calculateExact(
        players,
        against,
        tricks,
        "KLEINE_MISERIE",
      );
      break;
    case "GROTE_MISERIE":
      scores = calculators.calculateExact(
        players,
        against,
        tricks,
        "GROTE_MISERIE",
      );
      break;
    case "BLOTE_MISERIE":
      scores = calculators.calculateExact(
        players,
        against,
        tricks,
        "BLOTE_MISERIE",
      );
      break;
    case "PICCOLO":
      scores = calculators.calculateExact(players, against, tricks, "PICCOLO");
      break;
    case "TROEL":
      scores = calculators.calculateTroel(players, against, tricks, "TROEL");
      break;
    case "TROELA":
      scores = calculators.calculateTroel(players, against, tricks, "TROELA");
      break;
    case "SOLO_SLIM":
      scores = calculators.calculateSolo(players, against, target, tricks);
      break;
    default:
      break;
  }

  return scores;
};
