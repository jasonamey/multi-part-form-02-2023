import { render, screen } from '@testing-library/react'
import { AddOn } from './AddOn'
import { TestWrapper } from '@/test'

describe.skip('Add On', () => {
  it('Add On will render', () => {
    render(
      <AddOn
        price={1}
        headerText="add-on"
        subHeaderText="sub-head"
        addOnType="online"
      />,
      { wrapper: TestWrapper }
    )
    const header = screen.getByRole('heading', { level: 3 })
    expect(header).toHaveTextContent('add-on')
    const subHeader = screen.getByRole('heading', { level: 4 })
    expect(subHeader).toHaveTextContent('sub-head')
    //default is monthly - check that price is properly formed :
    expect(screen.getByText('+$1/mo')).toBeInTheDocument()
  })
})
