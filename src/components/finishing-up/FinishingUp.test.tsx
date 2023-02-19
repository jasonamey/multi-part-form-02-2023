import { FinishingUp } from './FinishingUp'
import { screen, render } from '@testing-library/react'
import { TestWrapper } from '@/test'

describe.skip('FinishingUp', () => {
  it('renders finishing up component', async () => {
    render(<FinishingUp />, { wrapper: TestWrapper })
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveTextContent('Arcade (Monthly)')
    const totalPrice = screen.getByText('+$9/mo')
    expect(totalPrice).toBeInTheDocument()
  })
})
