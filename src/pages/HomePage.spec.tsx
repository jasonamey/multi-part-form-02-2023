import Home from './index'
import { screen, cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestWrapper } from '@/test'

async function clickForwardBtn() {
  const fwdButton = screen.getByRole('button', { name: 'Forward' })
  await userEvent.click(fwdButton)
}

async function clickBackBtn() {
  const fwdButton = screen.getByRole('button', { name: 'Go Back' })
  await userEvent.click(fwdButton)
}

async function completeStepOne() {
  const inputFields = screen.getAllByRole('textbox')
  for (const field of inputFields) {
    await userEvent.type(field, 'test')
  }
}

async function completeStepTwo(planType: string, duration: string) {
  await completeStepOne()
  await clickForwardBtn()
  const promotion = screen.getByRole('heading', { name: planType })
  await userEvent.click(promotion)
  if (duration === 'yearly') {
    const toggle = screen.getByRole('checkbox')
    await userEvent.click(toggle)
  }
}

describe('Home Page', () => {
  describe('Step One', () => {
    afterEach(cleanup)
    it('home page renders', () => {
      render(<Home />, { wrapper: TestWrapper })
      const textBoxes = screen.getAllByRole('textbox')
      expect(textBoxes).toHaveLength(3)
      const forwardButton = screen.getByRole('button', { name: 'Forward' })
      expect(forwardButton).toBeInTheDocument()
      const buttons = screen.getAllByRole('button')
      //only Forward button is rendered, no Back button
      expect(buttons).toHaveLength(1)
    })
    it.each`
      step   | stepText
      ${'1'}
      ${'2'}
      ${'3'}
      ${'4'}
    `(
      'renders progress bar with 4 step items',
      async (props: { step: string; stepText: string }) => {
        render(<Home />, { wrapper: TestWrapper })
        const { step, stepText } = props
        expect(screen.getByText(`step ${step}`)).toBeInTheDocument()
        expect(screen.getByText(stepText)).toBeInTheDocument()
      }
    )
    it('renders error if field is focused without input', async () => {
      render(<Home />, { wrapper: TestWrapper })
      const inputFields = screen.getAllByRole('textbox')
      const errorText = 'This field is required'
      //no error message
      expect(screen.queryByText(errorText)).toBeNull()
      //error message appears
      await userEvent.click(inputFields[0])
      await userEvent.click(inputFields[1])
      expect(screen.getByText(errorText)).toBeInTheDocument()
    })
    it('enables forward button when all three fields contain text', async () => {
      render(<Home />, { wrapper: TestWrapper })
      const fwdButton = screen.getByRole('button', { name: 'Forward' })
      expect(fwdButton).toBeDisabled()
      await completeStepOne()
      expect(fwdButton).toBeEnabled()
    })
    it('continues to step Two when One is completed', async () => {
      render(<Home />, { wrapper: TestWrapper })
      await completeStepOne()
      await clickForwardBtn()
      expect(
        screen.getByRole('heading', { name: 'Select your plan' })
      ).toBeInTheDocument()
    })
  })
  describe('Step Two', () => {
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
    it('continues to step Three when Two is completed', async () => {
      render(<Home />, { wrapper: TestWrapper })
      await completeStepOne()
      await completeStepTwo('Arcade', 'monthly')
      await clickForwardBtn()
      expect(
        screen.getByRole('heading', { name: 'Pick add-ons' })
      ).toBeInTheDocument()
    })
  })
})
