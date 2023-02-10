import React from 'react'
import styled, { css } from 'styled-components'
import { getTimeAbbreviation } from '@/utils'

type itemPriceType = 'plan' | 'addOn' | 'total'

export type PriceProps = {
  itemPriceType: itemPriceType
  listedPrice: number
  duration: 'monthly' | 'yearly'
}

const Container = styled.span<{ price: itemPriceType }>`
  ${({ price }) => {
    switch (price) {
      case 'plan':
        return css`
          color: var(--marine-blue);
          opacity: 0.8;
          font-size: 1rem;
          font-weight: 600;
        `
      case 'addOn':
        return css`
          color: var(--marine-blue);
          opacity: 0.7;
          font-size: 0.8rem;
          font-weight: 500;
        `
      case 'total':
        return css`
          color: var(--purplish-blue);
          font-size: 1.2rem;
          font-weight: 600;
        `
    }
  }}
`

export function Price({ listedPrice, itemPriceType, duration }: PriceProps) {
  const addSign = itemPriceType !== 'plan' ? '+' : ''
  const formattedPrice = `${addSign}$${listedPrice}/${getTimeAbbreviation(
    duration
  )}`
  return <Container price={itemPriceType}>{formattedPrice}</Container>
}
