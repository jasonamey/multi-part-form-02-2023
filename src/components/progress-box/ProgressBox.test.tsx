import { ProgressBox } from './ProgressBox'
import { render, screen } from '@testing-library/react'
import { TestWrapper } from '@/test'

describe.skip('Progress Box', () => {
  it('progress bar will render', () => {
    render(<ProgressBox />, { wrapper: TestWrapper })
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(4)
  })
  it.each`
    stepHeader  | stepText
    ${'step 1'} | ${'your info'}
    ${'step 2'} | ${'select plan'}
    ${'step 3'} | ${'add-ons'}
    ${'step 4'} | ${'summary'}
  `('renders header: $stepHeader and text: $stepText', (props) => {
    const { stepHeader, stepText } = props
    render(<ProgressBox />, { wrapper: TestWrapper })
    const header = screen.getByText(stepHeader)
    expect(header).toBeInTheDocument()
    const text = screen.getByText(stepText)
    expect(text).toBeInTheDocument()
  })
})
