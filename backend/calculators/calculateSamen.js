import scores from "./scores.js";
import distributeScore from "./distributeScore.js";

export default function calculateSamen(players, against, target, tricks) {
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
  return distributeScore(players, against, score, -score);
}
