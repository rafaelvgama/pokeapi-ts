export interface PokemonType {
  name: string
}

export interface PokemonResponse {
  id: number
  name: string
  types: { type: PokemonType }[]
  sprites: { front_default: string }
}
