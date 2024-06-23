import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import App from './App'

const queryClient = new QueryClient()

describe('App Component', () => {
  it('renders the Home component', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    )

    expect(screen.getByTestId('Home')).toBeInTheDocument()
  })
})
