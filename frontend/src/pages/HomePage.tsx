import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getGames } from '../api/client'
import type { Game } from '../types'
import GameCard from '../components/GameCard'
import CreateGameForm from '../components/CreateGameForm'

export default function HomePage() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const fetchGames = async () => {
    try {
      const data = await getGames()
      setGames(data.games)
    } catch {
      /* empty */
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGames()
  }, [])

  const handleCreated = (game: Game) => {
    navigate(`/game/${game._id}`)
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-zinc-100">Spellen</h1>

      <div className="mb-8">
        <CreateGameForm onCreated={handleCreated} />
      </div>

      {loading ? (
        <p className="text-sm text-zinc-500">Laden...</p>
      ) : games.length === 0 ? (
        <p className="rounded-lg border border-dashed border-zinc-800 p-12 text-center text-sm text-zinc-500">
          Nog geen spellen. Maak er een aan!
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      )}
    </div>
  )
}
