import { PokemonResponse } from '@interfaces/pokemon-data'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function setApiUrl(pokemon: string | number) {
  const url = `https://pokeapi.co/api/v2/pokemon/${String(pokemon)}`
  return url
}

export async function fetchData(
  pokemon: string | number,
): Promise<PokemonResponse> {
  const response = await axios.get<PokemonResponse>(setApiUrl(pokemon))
  return response.data
}

export function usePokeData(pokemon: string | number) {
  const query = useQuery<PokemonResponse>({
    queryFn: () => fetchData(String(pokemon)),
    queryKey: ['pokemon-data', pokemon],
  })
  return query
}
