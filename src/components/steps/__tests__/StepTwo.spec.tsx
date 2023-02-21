import Home from '@/pages/index'
import { screen, cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestWrapper } from '@/test'
import {
  clickForwardBtn,
  clickBackBtn,
  completeStepOne,
  completeStepTwo,
} from '@/test'

describe.skip('Step Two', () => {
  afterEach(cleanup)
  it('changes prices when toggle is changed to yearly', async () => {
    render(<Home />, { wrapper: TestWrapper })
    await completeStepOne()
    await clickForwardBtn()
    //check that monthly prices initially render
    const monthlyPrices = ['$9/mo', '$12/mo', '$15/mo']
    monthlyPrices.forEach((priceItem) => {
      expect(screen.getByText(priceItem)).toBeInTheDocument()
    })
    //check that yearly prices render after duration toggle is switched
    const durationToggle = screen.getByRole('checkbox')
    await userEvent.click(durationToggle)
    const yearlyPrices = ['$90/yr', '$120/yr', '$150/yr']
    yearlyPrices.forEach((priceItem) => {
      expect(screen.getByText(priceItem)).toBeInTheDocument()
    })
    //check that 3 yearly promotional messages appear when duration toggle is switched
    const promotionalMessages = screen.queryAllByText('2 months free')
    expect(promotionalMessages).toHaveLength(3)
  })
  it('goes back to step One when Go Back button is clicked', async () => {
    render(<Home />, { wrapper: TestWrapper })
    await completeStepOne()
    await clickForwardBtn()
    expect(
      screen.getByRole('heading', { name: 'Select your plan' })
    ).toBeInTheDocument()
    await clickBackBtn()
    expect(
      screen.getByRole('heading', { name: 'Personal Info' })
    ).toBeInTheDocument()
  })
  it('personal data remains in input forms in Step One after advancing to Step Two', async () => {
    render(<Home />, { wrapper: TestWrapper })
    await completeStepOne()
    await clickForwardBtn()
    await clickBackBtn()
    const labels = ['Name', 'Email Address', 'Phone Number']
    labels.forEach((item: string) => {
      const input = screen.getByLabelText(item)
      expect(input).toHaveAttribute('value', 'test')
    })
  })
  it('continues to Step Three when Step Two is completed', async () => {
    render(<Home />, { wrapper: TestWrapper })
    await completeStepOne()
    await completeStepTwo('Arcade', 'monthly')
    await clickForwardBtn()
    expect(
      screen.getByRole('heading', { name: 'Pick add-ons' })
    ).toBeInTheDocument()
  })
})
