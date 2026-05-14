import { useState } from "react";
import { createRound } from "../api/client";
import type { Player, Round, GameType } from "../types";
import { ROUND_TYPES, needsTarget, getTargetRange } from "../types";

interface Props {
  players: Player[];
  gameId: string;
  onRoundAdded: (round: Round) => void;
}

export default function AddRoundForm({ players, gameId, onRoundAdded }: Props) {
  const [type, setType] = useState<GameType>("SOLO");
  const [selectedIdx, setSelectedIdx] = useState<number[]>([]);
  const [target, setTarget] = useState(5);
  const [tricks, setTricks] = useState(0);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const handleTypeChange = (newType: GameType) => {
    setType(newType);
    setSelectedIdx([]);
    if (needsTarget(newType)) {
      const [min] = getTargetRange(newType);
      setTarget(min);
    } else {
      setTarget(0);
    }
    setTricks(0);
  };

  const togglePlayer = (idx: number) => {
    setSelectedIdx((prev) => {
      if (prev.includes(idx)) return prev.filter((i) => i !== idx);
      if (prev.length >= 2) return prev;
      if (prev.length === 1) {
        if (type !== "SAMEN" && type !== "TROEL" && type !== "TROELA")
          return [idx];
      }
      return [...prev, idx];
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (selectedIdx.length === 0) {
      setError("Selecteer wie speelt");
      return;
    }
    if (
      type !== "SAMEN" &&
      type !== "TROEL" &&
      type !== "TROELA" &&
      selectedIdx.length !== 1
    ) {
      setError("Selecteer exact 1 speler voor dit type");
      return;
    }
    if (
      (type === "SAMEN" || type === "TROEL" || type === "TROELA") &&
      selectedIdx.length !== 2
    ) {
      setError("Selecteer exact 2 spelers voor Samen");
      return;
    }

    const against = players
      .map((_, i) => i)
      .filter((i) => !selectedIdx.includes(i));

    setBusy(true);
    try {
      const { round } = await createRound(gameId, {
        type,
        players: selectedIdx,
        against,
        target,
        tricks,
      });
      onRoundAdded(round);
      setSelectedIdx([]);
      setTricks(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fout bij toevoegen");
    } finally {
      setBusy(false);
    }
  };

  const showTarget = needsTarget(type);
  const [targetMin, targetMax] = getTargetRange(type);

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-zinc-800 bg-zinc-900 p-6"
    >
      <h2 className="mb-4 text-lg font-semibold text-zinc-100">
        Ronde toevoegen
      </h2>

      <div className="mb-4">
        <label className="mb-1.5 block text-sm text-zinc-400">Type</label>
        <select
          value={type}
          onChange={(e) => handleTypeChange(e.target.value as GameType)}
          className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 outline-none transition-colors focus:border-amber-500"
        >
          {ROUND_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="mb-1.5 block text-sm text-zinc-400">
          {type === "SAMEN" ? "Wie spelen er samen?" : "Wie speelt?"}
        </label>
        <div className="flex gap-2">
          {players.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => togglePlayer(i)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                selectedIdx.includes(i)
                  ? "bg-amber-600 text-white"
                  : "border border-zinc-700 bg-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {showTarget && (
        <div className="mb-4">
          <label className="mb-1.5 block text-sm text-zinc-400">Target</label>
          <select
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 outline-none transition-colors focus:border-amber-500"
          >
            {Array.from({ length: targetMax - targetMin + 1 }, (_, i) => {
              const v = targetMin + i;
              return (
                <option key={v} value={v}>
                  {v}
                </option>
              );
            })}
          </select>
        </div>
      )}

      <div className="mb-4">
        <label className="mb-1.5 block text-sm text-zinc-400">
          Werkelijk aantal slagen
        </label>
        <select
          value={tricks}
          onChange={(e) => setTricks(Number(e.target.value))}
          className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 outline-none transition-colors focus:border-amber-500"
        >
          {Array.from({ length: 14 }, (_, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="mb-3 text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={busy}
        className="rounded-md bg-amber-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-500 disabled:opacity-50"
      >
        {busy ? "Bezig..." : "Toevoegen"}
      </button>
    </form>
  );
}
