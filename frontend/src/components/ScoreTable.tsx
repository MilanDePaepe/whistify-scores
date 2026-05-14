import type { Player, Round } from '../types'
import { getScoreForPlayer } from '../types'

interface Props {
  players: Player[]
  rounds: Round[]
}

export default function ScoreTable({ players, rounds }: Props) {
  const totals: Record<string, number> = {}
  players.forEach((p) => (totals[p.id] = 0))

  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-800">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-zinc-800 bg-zinc-900">
            <th className="px-4 py-3 font-medium text-zinc-500">#</th>
            {players.map((p) => (
              <th key={p.id} className="px-4 py-3 font-medium text-zinc-300">
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rounds.length === 0 ? (
            <tr>
              <td
                colSpan={players.length + 1}
                className="px-4 py-12 text-center text-zinc-500"
              >
                Nog geen rondes. Voeg de eerste ronde toe!
              </td>
            </tr>
          ) : (
            rounds.map((round, ri) => {
              players.forEach((p) => {
                totals[p.id] += getScoreForPlayer(round.scores, p.id)
              })
              const roundLabel =
                round.type || `Ronde ${round.roundNumber ?? ri + 1}`

              return (
                <tr
                  key={round._id}
                  className="border-b border-zinc-800/50 transition-colors hover:bg-zinc-800/30"
                >
                  <td className="px-4 py-3 text-zinc-500">{roundLabel}</td>
                  {players.map((p) => {
                    const score = getScoreForPlayer(round.scores, p.id)
                    return (
                      <td
                        key={p.id}
                        className={`px-4 py-3 tabular-nums ${
                          score > 0
                            ? 'text-emerald-400'
                            : score < 0
                              ? 'text-red-400'
                              : 'text-zinc-400'
                        }`}
                      >
                        {score > 0 ? '+' : ''}
                        {score}
                      </td>
                    )
                  })}
                </tr>
              )
            })
          )}
        </tbody>
        {rounds.length > 0 && (
          <tfoot>
            <tr className="border-t-2 border-zinc-700 bg-zinc-900 font-semibold">
              <td className="px-4 py-3 text-zinc-400">Totaal</td>
              {players.map((p) => {
                const t = totals[p.id]
                return (
                  <td
                    key={p.id}
                    className={`px-4 py-3 tabular-nums ${
                      t > 0
                        ? 'text-emerald-400'
                        : t < 0
                          ? 'text-red-400'
                          : 'text-zinc-300'
                    }`}
                  >
                    {t > 0 ? '+' : ''}
                    {t}
                  </td>
                )
              })}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  )
}
