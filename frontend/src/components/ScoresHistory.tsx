import { Suspense, useState } from "react";
import type { Player, Round } from "../types";
import ScoreTable from "./ScoreTable";
import ScoreChart from "./ScoreChart";

interface Props {
  players: Player[];
  rounds: Round[];
}
export default function ScoresHistory({ players, rounds }: Props) {
  const [selected, setSelected] = useState("table");

  if (selected === "table") {
    return (
      <div>
        <div className="flex gap-2">
          <button
            key="table"
            type="button"
            onClick={() => setSelected("table")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${"bg-amber-600 text-white"}`}
          >
            Table
          </button>
          <button
            key="graph"
            type="button"
            onClick={() => setSelected("graph")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${"border border-zinc-700 bg-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"}`}
          >
            Graph
          </button>
        </div>
        <br />

        <div className="mb-8">
          <ScoreTable players={players} rounds={rounds} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2">
        <button
          key="table"
          type="button"
          onClick={() => setSelected("table")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${"border border-zinc-700 bg-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"}`}
        >
          Table
        </button>
        <button
          key="graph"
          type="button"
          onClick={() => setSelected("graph")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${"bg-amber-600 text-white"}`}
        >
          Graph
        </button>
      </div>
      <br />

      <div className="mb-8">
        <Suspense
          fallback={
            <div className="h-92.5 animate-pulse rounded-lg border border-zinc-800 bg-zinc-900 p-6" />
          }
        >
          <ScoreChart players={players} rounds={rounds} />
        </Suspense>
      </div>
    </div>
  );
}
