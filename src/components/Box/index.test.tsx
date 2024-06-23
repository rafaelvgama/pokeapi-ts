import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Box from '.'

describe('Box component', () => {
  render(
    <BrowserRouter>
      <Box>
        <div>Content</div>
      </Box>
    </BrowserRouter>,
  )
  it('should render the component properly', () => {
    const boxComponent = screen.getByTestId('box-component')
    expect(boxComponent).toBeInTheDocument()
    expect(boxComponent.className).toBe(
      'm-4 rounded-md shadow-md md:max-w-[736px]',
    )
  })
})
