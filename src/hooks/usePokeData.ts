import { PokemonResponse } from '@interfaces/pokemon-data'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export async function fetchPokemonData(pokemon: string | number) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  const response = await axios.get<PokemonResponse>(url)
  return response.data
}

export function usePokeData(pokemon: string | number) {
  return useQuery<PokemonResponse>({
    queryFn: () => fetchPokemonData(pokemon),
    queryKey: ['pokemon-data', pokemon],
  })
}
