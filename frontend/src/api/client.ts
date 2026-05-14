import type { Game, Round, CreateGamePayload, CreateRoundPayload } from '../types'

const BASE = '/api'

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: 'Request failed' }))
    throw new Error(body.error || 'Request failed')
  }
  return res.json()
}

export async function getGames(): Promise<{ games: Game[]; fields: string[] }> {
  const res = await fetch(`${BASE}/`)
  return handleResponse(res)
}

export async function createGame(data: CreateGamePayload): Promise<{ game: Game }> {
  const res = await fetch(`${BASE}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return handleResponse(res)
}

export async function getGame(id: string): Promise<{ game: Game }> {
  const res = await fetch(`${BASE}/game/${id}`)
  return handleResponse(res)
}

export async function getRounds(id: string): Promise<{ rounds: Round[]; fields: string[] }> {
  const res = await fetch(`${BASE}/game/${id}/rounds`)
  return handleResponse(res)
}

export async function createRound(
  id: string,
  data: CreateRoundPayload,
): Promise<{ round: Round }> {
  const res = await fetch(`${BASE}/game/${id}/rounds`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return handleResponse(res)
}
