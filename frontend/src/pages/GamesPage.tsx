import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { deleteGame } from "../api/client";
import type { Game } from "../types";
import GameCard from "../components/GameCard";
import CreateGameForm from "../components/CreateGameForm";

export default function GamesPage() {
  const initialGames = useLoaderData() as Game[];
  const [games, setGames] = useState<Game[]>(initialGames);
  const navigate = useNavigate();

  const handleCreated = (game: Game) => {
    navigate(`/game/${game._id}`);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Weet je zeker dat je dit spel wilt verwijderen?"))
      return;
    try {
      await deleteGame(id);
      setGames((prev) => prev.filter((g) => g._id !== id));
    } catch {
      /* empty */
    }
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-zinc-100">Spellen</h1>

      <div className="mb-8">
        <CreateGameForm onCreated={handleCreated} />
      </div>

      {games.length === 0 ? (
        <p className="rounded-lg border border-dashed border-zinc-800 p-12 text-center text-sm text-zinc-500">
          Nog geen spellen. Maak er een aan!
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game._id} game={game} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
