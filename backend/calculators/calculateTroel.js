import scores from "./scores.js";
import distributeScore from "./distributeScore.js";

export default function calculateTroel(players, against, tricks, type) {
  let score = scores[type].standardScore;
  score = tricks > scores[type].goal ? score : -score;
  return distributeScore(players, against, score, -score);
}
