import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getGame, getRounds, deleteGame } from "../api/client";
import type { Game, Round } from "../types";
import ScoreTable from "../components/ScoreTable";
import AddRoundForm from "../components/AddRoundForm";

export default function GamePage() {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    Promise.all([getGame(id), getRounds(id)])
      .then(([gameData, roundsData]) => {
        setGame(gameData.game);
        setRounds(roundsData.rounds);
      })
      .catch((err) =>
        setError(err instanceof Error ? err.message : "Fout bij laden"),
      )
      .finally(() => setLoading(false));
  }, [id]);

  const handleRoundAdded = (round: Round) => {
    setRounds((prev) => [...prev, round]);
  };

  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm("Weet je zeker dat je dit spel wilt verwijderen?")) return;
    try {
      await deleteGame(id!);
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fout bij verwijderen");
    }
  };

  if (loading) {
    return <p className="text-sm text-zinc-500">Laden...</p>;
  }

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

      <div className="mb-8">
        <ScoreTable players={game.players} rounds={rounds} />
      </div>
    </div>
  );
}
