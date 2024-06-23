import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Loader from '.'

describe('Loader component', () => {
  render(
    <BrowserRouter>
      <Loader tailwindSize={11} />
    </BrowserRouter>,
  )

  it('should render the component properly', () => {
    const loader = screen.getByAltText(/loading icon/i)
    expect(loader).toBeInTheDocument()
    expect(loader.className).toBe('h-11 w-11')
  })
})
