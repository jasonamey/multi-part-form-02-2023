import { screen, render } from '@testing-library/react'
import { AddOnItem } from './AddOnItem'

describe.skip('AddOnItem', () => {
  it('renders addon item', () => {
    const addOnText = 'this is the add on text'
    render(
      <AddOnItem
        listedPrice={1}
        itemPriceType="addOn"
        duration="monthly"
        addOnText={addOnText}
      />
    )
    expect(screen.getByText(addOnText)).toBeInTheDocument()
    expect(screen.getByText('+$1/mo')).toBeInTheDocument()
  })
})
