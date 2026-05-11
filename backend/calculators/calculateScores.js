import calculateExact from "./calculateExact";
import calculateSolo from "./calculateSolo";
import calculateTroel from "./calculateTroel";
import calculateSamen from "./calculateSamen";

export default function calculateScores(
  type,
  players,
  against,
  target,
  tricks,
) {
  let scores;
  switch (type) {
    case "SOLO":
      scores = calculateSolo(players, against, target, tricks);
      break;
    case "SAMEN":
      scores = calculateSamen(players, against, target, tricks);
      break;
    case "ABONDANCE":
      scores = calculateSolo(players, against, target, tricks);
      break;
    case "KLEINE_MISERIE":
      scores = calculateExact(players, against, tricks, "KLEINE_MISERIE");
      break;
    case "GROTE_MISERIE":
      scores = calculateExact(players, against, tricks, "GROTE_MISERIE");
      break;
    case "BLOTE_MISERIE":
      scores = calculateExact(players, against, tricks, "BLOTE_MISERIE");
      break;
    case "PICCOLO":
      scores = calculateExact(players, against, tricks, "PICCOLO");
      break;
    case "TROEL":
      scores = calculateTroel(players, against, tricks, "TROEL");
      break;
    case "TROELA":
      scores = calculateTroel(players, against, tricks, "TROELA");
      break;
    case "SOLO_SLIM":
      scores = calculateSolo(players, against, target, tricks);
      break;
    default:
      break;
  }

  return scores;
}
