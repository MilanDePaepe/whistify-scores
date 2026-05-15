import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getScoreForPlayer } from "../types";
import type { Player, Round } from "../types";

const COLORS = ["#f59e0b", "#10b981", "#ef4444", "#3b82f6"];

interface Props {
  players: Player[];
  rounds: Round[];
}

export default function ScoreChart({ players, rounds }: Props) {
  const totals: Record<string, number> = {};
  players.forEach((p) => (totals[p.id] = 0));

  const chartData = rounds.map((round, ri) => {
    const point: Record<string, number | string> = { round: ri + 1 };
    players.forEach((p) => {
      totals[p.id] += getScoreForPlayer(round.scores, p.id);
      point[p.name] = totals[p.id];
    });
    return point;
  });

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-4 text-lg font-semibold text-zinc-100">
        Scoreverloop
      </h2>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
          <XAxis
            dataKey="round"
            stroke="#a1a1aa"
            tick={{ fill: "#a1a1aa", fontSize: 12 }}
            label={{
              value: "Ronde",
              position: "insideBottomRight",
              offset: -5,
              style: { fill: "#a1a1aa", fontSize: 12 },
            }}
          />
          <YAxis
            stroke="#a1a1aa"
            tick={{ fill: "#a1a1aa", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              borderRadius: "8px",
              fontSize: "13px",
            }}
            labelStyle={{ color: "#d4d4d8" }}
          />
          <Legend
            wrapperStyle={{ fontSize: "13px", color: "#d4d4d8" }}
          />
          {players.map((p, i) => (
            <Line
              key={p.id}
              type="monotone"
              dataKey={p.name}
              stroke={COLORS[i] ?? COLORS[0]}
              strokeWidth={2}
              dot={{ r: 4, fill: COLORS[i] ?? COLORS[0] }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
