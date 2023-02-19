import { screen, render } from '@testing-library/react'
import { AddOn } from './add-on'
import { TestWrapper } from '@/test'

describe.skip('Add Ons', () => {
  it.each`
    price | headerText          | subHeaderText          | addOnType
    ${1}  | ${'online header'}  | ${'online subHeader'}  | ${'online'}
    ${2}  | ${'storage header'} | ${'storage subHeader'} | ${'storage'}
    ${3}  | ${'profile header'} | ${'profile subHeader'} | ${'profile'}
  `('add ons all properly render', (props) => {
    const { price, headerText, subHeaderText, addOnType } = props
    render(
      <AddOn
        price={price}
        headerText={headerText}
        subHeaderText={subHeaderText}
        addOnType={addOnType}
      />,
      { wrapper: TestWrapper }
    )
    const header = screen.getByRole('heading', { level: 3 })
    expect(header).toHaveTextContent(headerText)
    const subHeader = screen.getByRole('heading', { level: 4 })
    expect(subHeader).toHaveTextContent(subHeaderText)
    //default is monthly - check that price is properly formed :
    expect(screen.getByText(`+$${price}/mo`)).toBeInTheDocument()
  })
})
