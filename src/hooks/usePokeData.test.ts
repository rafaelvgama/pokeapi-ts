import { renderHook } from '@testing-library/react'
import { usePokeData } from './usePokeData'

describe('usePokeData with data', () => {
  it('should render with mock data', () => {
    vi.mock('@tanstack/react-query', () => ({
      useQuery: vi.fn(() => ({
        data: {
          id: 25,
          name: 'pikachu',
          types: [{ type: { name: 'electric' } }],
          sprites: { front_default: 'https://pokeapi.com/image.jpg' },
        },
        isLoading: false,
        error: null,
      })),
    }))
    const { result } = renderHook(() => usePokeData('pikachu'))

    expect(result.current.data).toEqual({
      id: 25,
      name: 'pikachu',
      types: [{ type: { name: 'electric' } }],
      sprites: { front_default: 'https://pokeapi.com/image.jpg' },
    })

    expect(result.current.error).toBeNull()
    expect(result.current.isLoading).toBeFalsy()
  })
})
