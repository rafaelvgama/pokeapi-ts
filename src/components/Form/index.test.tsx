import { fireEvent, render, screen } from '@testing-library/react'
import { FormEvent } from 'react'
import Form from '.'

describe('Form component', () => {
  const mockSubmit = vi.fn((event: FormEvent<HTMLFormElement>) =>
    event.preventDefault(),
  )
  const mockKeyDown = vi.fn(() => {})
  const mockChange = vi.fn(() => {})
  const mockClick = vi.fn(() => {})

  beforeEach(() => {
    render(
      <Form
        value=''
        onSubmit={mockSubmit}
        onKeyDown={mockKeyDown}
        onChange={mockChange}
        onClick={mockClick}
      />,
    )
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render input and button properly', () => {
    expect(screen.getByTestId('pokemon-input')).toBeInTheDocument()
    expect(screen.getByTestId('search-btn')).toBeInTheDocument()
  })

  it('should call onKeyDown when a key is pressed in input', () => {
    fireEvent.keyDown(screen.getByTestId('pokemon-input'))
    expect(mockKeyDown).toHaveBeenCalledTimes(1)
  })

  it('should call onChange when input value changes', () => {
    const inputElement = screen.getByTestId('pokemon-input')
    fireEvent.change(inputElement, { target: { value: 'test' } })
    expect(mockChange).toHaveBeenCalledTimes(1)
  })

  it('should call onClick when button is clicked', () => {
    fireEvent.click(screen.getByTestId('search-btn'))
    expect(mockClick).toHaveBeenCalledTimes(1)
  })
})
