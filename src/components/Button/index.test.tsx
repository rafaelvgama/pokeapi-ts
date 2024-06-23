import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Button from '.'

describe('Button component', () => {
  it('should render the button with blue bg', () => {
    render(
      <BrowserRouter>
        <Button
          color='blue'
          text='Blue test'
        />
      </BrowserRouter>,
    )
    const buttonComponent = screen.getByText(/blue test/i)
    expect(buttonComponent).toBeDefined()
    expect(buttonComponent.className).toBe(
      'w-28 rounded-md px-4 py-2 font-bold text-white shadow-md bg-blue-500 hover:bg-blue-600',
    )
  })

  it('should render the button with green bg', () => {
    render(
      <BrowserRouter>
        <Button
          color='green'
          text='Green test'
        />
      </BrowserRouter>,
    )
    const buttonComponent = screen.getByText(/green test/i)
    expect(buttonComponent).toBeDefined()
    expect(buttonComponent.className).toBe(
      'w-28 rounded-md px-4 py-2 font-bold text-white shadow-md bg-green-500 hover:bg-green-600',
    )
  })

  it('should render the button with red bg', () => {
    render(
      <BrowserRouter>
        <Button
          color='red'
          text='Red test'
        />
      </BrowserRouter>,
    )
    const buttonComponent = screen.getByText(/red test/i)
    expect(buttonComponent).toBeDefined()
    expect(buttonComponent.className).toBe(
      'w-28 rounded-md px-4 py-2 font-bold text-white shadow-md bg-red-500 hover:bg-red-600',
    )
  })
})
