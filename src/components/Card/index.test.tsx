import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Card from '.'

describe('Card component', () => {
  it('should render the component properly with data', () => {
    const mockProps = {
      id: 12,
      name: 'poketest',
      types: [{ type: { name: 'type0' } }, { type: { name: 'type1' } }],
      sprites: { front_default: 'https://pokeimage' },
      loading: false,
      loadingError: false,
    }
    render(
      <BrowserRouter>
        <Card
          id={mockProps.id}
          name={mockProps.name}
          types={mockProps.types}
          sprites={mockProps.sprites}
          loading={mockProps.loading}
          loadingError={mockProps.loadingError}
        />
      </BrowserRouter>,
    )
    expect(screen.getByRole('img', { name: 'pokémon' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'background' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '12 | poketest',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('type0')).toBeInTheDocument()
    expect(screen.getByText('type1')).toBeInTheDocument()
  })

  it('should render the component properly with no data', () => {
    const mockProps = {
      id: undefined,
      name: undefined,
      types: undefined,
      sprites: undefined,
      loading: false,
      loadingError: true,
    }
    render(
      <BrowserRouter>
        <Card
          id={mockProps.id}
          name={mockProps.name}
          types={mockProps.types}
          sprites={mockProps.sprites}
          loading={mockProps.loading}
          loadingError={mockProps.loadingError}
        />
      </BrowserRouter>,
    )
    expect(screen.queryByRole('img', { name: 'pokémon' })).toBeNull()
    expect(screen.getByRole('img', { name: 'background' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'No Results',
      }),
    ).toBeInTheDocument()
  })

  it('should render the component properly while loading data', () => {
    const mockProps = {
      id: undefined,
      name: undefined,
      types: undefined,
      sprites: undefined,
      loading: true,
      loadingError: false,
    }
    render(
      <BrowserRouter>
        <Card
          id={mockProps.id}
          name={mockProps.name}
          types={mockProps.types}
          sprites={mockProps.sprites}
          loading={mockProps.loading}
          loadingError={mockProps.loadingError}
        />
      </BrowserRouter>,
    )
    expect(screen.queryByRole('img', { name: 'pokémon' })).toBeNull()
    expect(screen.getByRole('img', { name: 'background' })).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Loading icon' }),
    ).toBeInTheDocument()
  })
})
