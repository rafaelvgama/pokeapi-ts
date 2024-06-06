import Button from '@components/Button'
import Card from '@components/Card'
import Wrapper from '@components/Wrapper'
import { usePokeData } from '@hooks/usePokeData'
import { FormEvent, KeyboardEvent, useState } from 'react'

const App = () => {
  const [inputPokemon, setInputPokemon] = useState('')
  const [pokemon, setPokemon] = useState<string | number>('bulbasaur')
  const { data, isLoading, isLoadingError } = usePokeData(pokemon)
  const pokemonId = data?.id
  const pokemonName = data?.name
  const pokemonImg = data?.sprites
  const pokemonTypes = data?.types

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputPokemon !== '') {
      setPokemon(inputPokemon.toLowerCase())
      setInputPokemon('')
    }
  }

  const handlePreviousClick = () => {
    if (Number(pokemonId) > 1) {
      setPokemon(Number(pokemonId) - 1)
    }
  }

  const handleNextClick = () => {
    if (Number(pokemonId) < 1025) {
      setPokemon(Number(pokemonId) + 1)
    }
  }

  return (
    <Wrapper>
      <div className='flex flex-col gap-4'>
        <Card
          id={pokemonId}
          name={pokemonName}
          sprites={pokemonImg}
          types={pokemonTypes}
          loading={isLoading}
          loadingError={isLoadingError}
        />

        <form onSubmit={handleSubmit}>
          <input
            id='pokemon-name'
            type='text'
            placeholder='Pokémon name'
            value={inputPokemon}
            onKeyDown={handleKeyDown}
            onChange={({ target }) => setInputPokemon(target.value)}
            className='w-80 rounded-md border-2 border-blue-500 p-2 shadow-md outline-none'
          />
        </form>
        <div className='flex justify-between'>
          <Button
            text={'< Previous'}
            color='blue'
            onClick={handlePreviousClick}
          />
          <Button
            text={'Next >'}
            color='red'
            onClick={handleNextClick}
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default App
