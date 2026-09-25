import { useState } from "react";
import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { deleteGame } from "../api/client";
import type { Game, Round } from "../types";
import AddRoundForm from "../components/AddRoundForm";
import ScoresHistory from "../components/ScoresHistory";

export default function GamePage() {
  const initialData = useLoaderData() as {
    game: Game | null;
    rounds: Round[];
    error?: string;
  };
  const [game] = useState<Game | null>(initialData.game);
  const [rounds, setRounds] = useState<Round[]>(initialData.rounds);
  const [error, setError] = useState(initialData.error || "");

  const handleRoundAdded = (round: Round) => {
    setRounds((prev) => [...prev, round]);
  };

  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm("Weet je zeker dat je dit spel wilt verwijderen?"))
      return;
    try {
      await deleteGame(game!._id);
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fout bij verwijderen");
    }
  };

  if (error || !game) {
    return (
      <div className="rounded-lg border border-red-800 bg-red-950/50 p-6 text-center">
        <p className="text-red-400">{error || "Spel niet gevonden"}</p>
        <Link
          to="/"
          className="mt-3 inline-block text-sm text-amber-500 hover:text-amber-400"
        >
          Terug naar overzicht
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-300"
        >
          &larr; Overzicht
        </Link>
        <button
          onClick={handleDelete}
          className="rounded-lg bg-red-900/50 px-4 py-2 text-sm text-red-400 hover:bg-red-900"
        >
          Verwijder spel
        </button>
      </div>

      <h1 className="mb-6 text-2xl font-bold text-zinc-100">{game.name}</h1>

      <AddRoundForm
        players={game.players}
        gameId={game._id}
        onRoundAdded={handleRoundAdded}
      />
      <br />

      <ScoresHistory players={game.players} rounds={rounds} />
    </div>
  );
}
