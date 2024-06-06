import Box from '@components/Box'
import Loader from '@components/Loader'
import { PokemonType } from '@interfaces/pokemon-data'

type CardProps = {
  id: number | undefined
  name: string | undefined
  types: { type: PokemonType }[] | undefined
  sprites: { front_default: string } | undefined
  loading: boolean
  loadingError: boolean
}

const Card = ({
  id,
  name,
  sprites,
  types,
  loading,
  loadingError,
}: CardProps) => {
  let type1 = ''
  let type2 = ''
  if (types?.length === 2) {
    type1 = types[0].type.name
    type2 = types[1].type.name
  } else if (types?.length === 1) {
    type1 = types[0].type.name
  }

  return (
    <Box>
      <div className='w-80'>
        <div className='relative flex items-center justify-center'>
          {!loading && !loadingError ?
            <img
              src={sprites?.front_default}
              alt='pokémon'
              className='absolute h-48 w-48'
            />
          : null}
          <img
            src='./src/assets/images/background.jpg'
            alt='background'
            className='rounded-t-md'
          />
        </div>
        <div className='flex min-h-[76px] items-center justify-between p-3'>
          <div>
            {id && name ?
              <h1 className=' text-lg font-bold capitalize'>
                {`${id} | ${name}`}
              </h1>
            : null}

            {type1 !== '' ?
              <span className='mr-2 inline-block text-xs capitalize'>
                {type1}
              </span>
            : null}
            {type2 !== '' ?
              <span className='inline-block text-xs capitalize'>{type2}</span>
            : null}
          </div>
          {loading ?
            <div>
              <Loader />
            </div>
          : null}
          {loadingError ?
            <h1>No Results</h1>
          : null}
        </div>
      </div>
    </Box>
  )
}

export default Card
