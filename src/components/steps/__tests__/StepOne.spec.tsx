import Home from '@/pages/index'
import { screen, cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestWrapper } from '@/test'
import { clickForwardBtn, completeStepOne } from '@/test'

describe.skip('Step One', () => {
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
    let errorMsgs = screen.queryAllByText(errorText)
    expect(errorMsgs).toHaveLength(0)
    //error message appears
    await userEvent.click(inputFields[0])
    await userEvent.click(inputFields[1])
    errorMsgs = screen.queryAllByText(errorText)
    expect(errorMsgs).toHaveLength(1)
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
