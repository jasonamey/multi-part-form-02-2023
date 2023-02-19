import { screen, render } from '@testing-library/react'
import { Price } from './Price'

describe.skip('Price', () => {
  it('price properly dsiplays price from passed props', () => {
    render(<Price listedPrice={1} itemPriceType="addOn" duration="yearly" />)
    expect(screen.getByText('+$1/yr')).toBeInTheDocument()
    render(<Price listedPrice={10} itemPriceType="addOn" duration="monthly" />)
    expect(screen.getByText('+$10/mo')).toBeInTheDocument()
  })
})
