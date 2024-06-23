import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '.'

vi.mock('@hooks/usePokeData', () => ({
  usePokeData: () => ({
    data: {
      id: 1,
      name: 'bulbasaur',
      sprites: {
        front_default: 'https://example.com/bulbasaur.png',
      },
      types: [{ type: { name: 'grass' } }],
    },
    isLoading: false,
    isLoadingError: false,
  }),
}))

describe('Home Component', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  )
  it('should render the componente properly', () => {
    expect(screen.getByTestId('Home')).toBeInTheDocument()
    expect(screen.getByAltText('pokeapi')).toHaveAttribute(
      'src',
      'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png',
    )
    expect(screen.getByText('1 | bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('grass')).toBeInTheDocument()
    expect(screen.getByAltText('pokémon')).toHaveAttribute(
      'src',
      'https://example.com/bulbasaur.png',
    )
  })
})
