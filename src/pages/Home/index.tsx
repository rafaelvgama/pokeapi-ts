import Card from '@components/Card'
import Form from '@components/Form'
import PrevNextBtn from '@components/PrevNextBtn'
import { usePokeData } from '@hooks/usePokeData'
import { KeyboardEvent, useState } from 'react'

const Home = () => {
  const [inputPokemon, setInputPokemon] = useState('')
  const [pokemon, setPokemon] = useState<string | number>('bulbasaur')
  const { data, isLoading, isLoadingError } = usePokeData(pokemon)
  const pokemonId = data?.id
  const pokemonName = data?.name
  const pokemonImg = data?.sprites
  const pokemonTypes = data?.types

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputPokemon.trim() !== '') {
      setPokemon(inputPokemon.trim().toLowerCase())
      setInputPokemon('')
    }
  }

  const handleClickSearch = () => {
    if (inputPokemon.trim() !== '') {
      setPokemon(inputPokemon.trim().toLowerCase())
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
    <div
      data-testid='Home'
      className='flex h-screen w-screen items-center justify-center'
    >
      <div className='flex flex-col gap-4'>
        <img
          src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
          alt='pokeapi'
          className='w-40 self-center sm:w-80'
        />
        <Card
          id={pokemonId}
          name={pokemonName}
          sprites={pokemonImg}
          types={pokemonTypes}
          loading={isLoading}
          loadingError={isLoadingError}
        />
        <Form
          value={inputPokemon}
          onKeyDown={handleKeyDown}
          onClick={handleClickSearch}
          onSubmit={(event) => {
            event.preventDefault()
          }}
          onChange={({ target }) => {
            setInputPokemon(target.value)
          }}
        />
        <PrevNextBtn
          onClickNext={handleNextClick}
          onClickPrev={handlePreviousClick}
        />
      </div>
    </div>
  )
}

export default Home
