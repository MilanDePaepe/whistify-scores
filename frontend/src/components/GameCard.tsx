import { Link } from 'react-router-dom'
import type { Game } from '../types'

interface Props {
  game: Game
  onDelete: (id: string) => void
}

export default function GameCard({ game, onDelete }: Props) {
  return (
    <div className="group relative rounded-lg border border-zinc-800 bg-zinc-900 p-5 transition-colors hover:border-amber-500/50 hover:bg-zinc-800/50">
      <Link to={`/game/${game._id}`} className="block">
        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-amber-400">
          {game.name}
        </h3>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {game.players.map((p) => (
            <span
              key={p.id}
              className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400"
            >
              {p.name}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm text-zinc-500">
          {game.rounds.length} {game.rounds.length === 1 ? 'ronde' : 'ronden'}
        </p>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault()
          onDelete(game._id)
        }}
        className="absolute right-2 top-2 rounded-md p-1.5 text-red-400 opacity-0 transition-opacity hover:bg-red-900/50 group-hover:opacity-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
          <path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
      </button>
    </div>
  )
}
