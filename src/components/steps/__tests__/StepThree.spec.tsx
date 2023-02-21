import Home from '@/pages/index'
import { screen, cleanup, render } from '@testing-library/react'
import { TestWrapper } from '@/test'
import { clickForwardBtn, completeStepOne, completeStepTwo } from '@/test'

describe('Step Three', () => {
  afterEach(cleanup)
  it('renders Step Three', async () => {
    render(<Home />, { wrapper: TestWrapper })
    await completeStepOne()
    await completeStepTwo('Arcade', 'monthly')
    await clickForwardBtn()
    expect(
      screen.getByRole('heading', { name: 'Pick add-ons' })
    ).toBeInTheDocument()
    expect(
      screen.getByText('Add-ons help enhance your gaming experience')
    ).toBeInTheDocument()
  })
})
