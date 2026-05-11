import distributeScore from "./distributeScore";
import scores from "./scores.js";

export default function calculateSolo(players, against, target, tricks) {
  let score;

  const s = scores[`SOLO_${target}`];
  if (tricks >= target) {
    score = s.standardScore + s.puntenOverslagen * (tricks - target);
    score = Math.min(score, s.maxScore);
  } else {
    score = s.standardScore + s.puntenOverslagen * (target - tricks - 1);
    score = -score;
  }
  return distributeScore(players, against, score, -score / 3);
}
