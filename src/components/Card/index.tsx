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
  return (
    <Box>
      <div className=''>
        <div className='relative flex items-center justify-center'>
          {!loading && !loadingError ?
            <img
              src={sprites?.front_default}
              alt='pokémon'
              className='absolute h-48 w-48 sm:h-96 sm:w-96'
            />
          : null}
          <img
            src='./public/assets/images/background.jpg'
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

            <div className='flex gap-2'>
              {types?.map((type) => (
                <span
                  className='inline-block text-xs capitalize'
                  key={type.type.name}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
          {loading ?
            <div>
              <Loader tailwindSize={11} />
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
