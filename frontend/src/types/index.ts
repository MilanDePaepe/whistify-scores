export interface Player {
  id: string
  name: string
}

export interface Game {
  _id: string
  name: string
  players: Player[]
  rounds: string[]
}

export interface RoundScore {
  id: string
  score: number
}

export interface Round {
  _id: string
  roundNumber?: number
  type?: string
  players?: number[]
  against?: number[]
  target?: number
  tricks?: number
  scores: Record<string, number> | RoundScore[]
  createdAt: string
}

export interface CreateGamePayload {
  name: string
  players: string[]
}

export interface CreateRoundPayload {
  type: string
  players: number[]
  against: number[]
  target: number
  tricks: number
}

export type GameType =
  | 'SOLO'
  | 'SAMEN'
  | 'ABONDANCE'
  | 'SOLO_SLIM'
  | 'KLEINE_MISERIE'
  | 'GROTE_MISERIE'
  | 'BLOTE_MISERIE'
  | 'PICCOLO'
  | 'TROEL'
  | 'TROELA'

export const ROUND_TYPES: { value: GameType; label: string }[] = [
  { value: 'SOLO', label: 'Solo' },
  { value: 'SAMEN', label: 'Samen' },
  { value: 'ABONDANCE', label: 'Abondance' },
  { value: 'SOLO_SLIM', label: 'Solo Slim' },
  { value: 'KLEINE_MISERIE', label: 'Kleine Miserie' },
  { value: 'GROTE_MISERIE', label: 'Grote Miserie' },
  { value: 'BLOTE_MISERIE', label: 'Blote Miserie' },
  { value: 'PICCOLO', label: 'Piccolo' },
  { value: 'TROEL', label: 'Troel' },
  { value: 'TROELA', label: 'Troela' },
]

export function isSoloType(type: GameType) {
  return ['SOLO', 'ABONDANCE', 'SOLO_SLIM'].includes(type)
}

export function isSamenType(type: GameType) {
  return type === 'SAMEN'
}

export function isExactType(type: GameType) {
  return ['KLEINE_MISERIE', 'GROTE_MISERIE', 'BLOTE_MISERIE', 'PICCOLO'].includes(type)
}

export function isTroelType(type: GameType) {
  return ['TROEL', 'TROELA'].includes(type)
}

export function needsTarget(type: GameType) {
  return isSoloType(type) || isSamenType(type)
}

export function getTargetRange(type: GameType): [number, number] {
  if (isSoloType(type)) return [5, 13]
  if (isSamenType(type)) return [8, 10]
  return [0, 0]
}

export function getScoreForPlayer(scores: Round['scores'], playerId: number | string): number {
  const key = String(playerId)
  if (Array.isArray(scores)) {
    return scores.find((s) => s.id === key)?.score ?? 0
  }
  return (scores as Record<string, number>)[key] ?? 0
}
