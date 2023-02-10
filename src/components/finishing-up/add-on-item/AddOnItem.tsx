import React from 'react'
import styled from 'styled-components'
import { Price } from '../price'
import { PriceProps } from '../price/Price'

type AddOnItemProps = PriceProps & {
  addOnText: string
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
`

const AddOnText = styled.span`
  color: var(--cool-gray);
  font-size: 0.9rem;
`

export function AddOnItem({
  addOnText,
  duration,
  itemPriceType,
  listedPrice,
}: AddOnItemProps) {
  return (
    <Container>
      <AddOnText>{addOnText}</AddOnText>
      <Price
        duration={duration}
        itemPriceType={itemPriceType}
        listedPrice={listedPrice}
      />
    </Container>
  )
}
