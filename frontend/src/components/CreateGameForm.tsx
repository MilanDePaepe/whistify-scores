import { useState } from 'react'
import { createGame } from '../api/client'
import type { Game } from '../types'

interface Props {
  onCreated: (game: Game) => void
}

export default function CreateGameForm({ onCreated }: Props) {
  const [name, setName] = useState('')
  const [players, setPlayers] = useState(['', '', '', ''])
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Geef een spelnaam op')
      return
    }
    if (players.some((p) => !p.trim())) {
      setError('Vul alle 4 spelersnamen in')
      return
    }
    if (new Set(players.map((p) => p.trim().toLowerCase())).size < 4) {
      setError('Spelersnamen moeten uniek zijn')
      return
    }

    setBusy(true)
    try {
      const { game } = await createGame({ name: name.trim(), players: players.map((p) => p.trim()) })
      onCreated(game)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Fout bij aanmaken')
    } finally {
      setBusy(false)
    }
  }

  const updatePlayer = (i: number, value: string) => {
    setPlayers((prev) => {
      const next = [...prev]
      next[i] = value
      return next
    })
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-4 text-lg font-semibold text-zinc-100">Nieuw spel</h2>

      <div className="mb-4">
        <label className="mb-1 block text-sm text-zinc-400">Spelnaam</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="bv. Vrijdagavond"
          className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors focus:border-amber-500"
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-3">
        {players.map((p, i) => (
          <div key={i}>
            <label className="mb-1 block text-sm text-zinc-400">Speler {i + 1}</label>
            <input
              value={p}
              onChange={(e) => updatePlayer(i, e.target.value)}
              placeholder={`Naam ${i + 1}`}
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors focus:border-amber-500"
            />
          </div>
        ))}
      </div>

      {error && <p className="mb-3 text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={busy}
        className="rounded-md bg-amber-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-500 disabled:opacity-50"
      >
        {busy ? 'Bezig...' : 'Aanmaken'}
      </button>
    </form>
  )
}
