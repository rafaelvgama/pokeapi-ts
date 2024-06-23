import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PrevNextBtn from '.'

const mockClickPrev = vi.fn()
const mockClickNext = vi.fn()

describe('PrevNextBtn component', () => {
  it('should render the component properly', () => {
    render(
      <BrowserRouter>
        <PrevNextBtn
          onClickPrev={mockClickPrev}
          onClickNext={mockClickNext}
        />
      </BrowserRouter>,
    )

    expect(
      screen.getByRole('button', {
        name: 'Previous',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous' }).className).toBe(
      'w-28 rounded-md px-4 py-2 font-bold text-white shadow-md bg-blue-500 hover:bg-blue-600',
    )
    expect(screen.getByRole('button', { name: 'Next' }).className).toBe(
      'w-28 rounded-md px-4 py-2 font-bold text-white shadow-md bg-blue-500 hover:bg-blue-600',
    )
  })

  it('should call onClick functions when clicked', () => {
    render(
      <BrowserRouter>
        <PrevNextBtn
          onClickPrev={mockClickPrev}
          onClickNext={mockClickNext}
        />
      </BrowserRouter>,
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Previous',
      }),
    )
    expect(mockClickPrev).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByRole('button', { name: 'Next' }))
    expect(mockClickNext).toHaveBeenCalledTimes(1)
  })
})
