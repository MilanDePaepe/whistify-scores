import { Link } from 'react-router-dom'
import type { Game } from '../types'

interface Props {
  game: Game
}

export default function GameCard({ game }: Props) {
  return (
    <Link
      to={`/game/${game._id}`}
      className="group block rounded-lg border border-zinc-800 bg-zinc-900 p-5 transition-colors hover:border-amber-500/50 hover:bg-zinc-800/50"
    >
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
  )
}
