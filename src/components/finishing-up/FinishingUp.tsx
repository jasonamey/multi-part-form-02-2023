import React from 'react'
import styled from 'styled-components'
import { Price } from './price'
import { AddOnItem } from './add-on-item'
import { useFormData } from '@/hooks/useFormData'
import { useStepNumber } from '@/hooks/useStepNumber'
import { titleCase } from '@/utils'
import { FORM_DATA_PRICES } from '@/data'
import { removeAdverb, sumAddOnPrices, selectedAddOns } from '@/utils'

const Container = styled.div``

const OrderItemsContainer = styled.div`
  background-color: var(--pastel-blue);
  border-radius: 0.4rem;
  padding: 1rem;
`
const PlanContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--light-gray);
  margin-bottom: 1rem;
`
const PlanTextContainer = styled.div``

const Plan = styled.h3`
  color: var(--marine-blue);
  opacity: 0.7;
  margin-bottom: 0.3rem;
`

const ChangePlan = styled.button`
  color: var(--cool-gray);
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  font-size: 0.9rem;
  margin-top: 0.2rem;
  cursor: pointer;
  text-decoration: underline;
`

const TotalItemContainer = styled.div`
  padding: 1rem;
  color: var(--cool-gray);
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
`

const TotalText = styled.span``

export function FinishingUp() {
  const formContext = useFormData()
  const { plan, duration, addOns } = formContext

  const stepContext = useStepNumber()
  const { setStepNumber } = stepContext

  function clickHandler() {
    setStepNumber(2)
  }

  // total price calculations :
  const selectedAddOnsToDisplay = selectedAddOns(addOns)
  const addOnPrices = sumAddOnPrices(duration, selectedAddOnsToDisplay)
  const planPrice = FORM_DATA_PRICES[plan][duration]
  const totalPrice = addOnPrices + planPrice

  return (
    <Container>
      <OrderItemsContainer>
        <PlanContainer>
          <PlanTextContainer>
            <Plan>{`${titleCase(plan)} (${titleCase(duration)})`}</Plan>
            <ChangePlan onClick={clickHandler}>Change</ChangePlan>
          </PlanTextContainer>
          <Price
            listedPrice={planPrice}
            itemPriceType={'plan'}
            duration={duration}
          />
        </PlanContainer>
        {selectedAddOnsToDisplay.map((item) => {
          return (
            <AddOnItem
              key={item.headerText}
              addOnText={item.headerText}
              itemPriceType={'addOn'}
              listedPrice={
                item['price'][duration as keyof (typeof item)['price']]
              }
              duration={duration}
            />
          )
        })}
      </OrderItemsContainer>
      <TotalItemContainer>
        <TotalText>Total{` (per ${removeAdverb(duration)})`}</TotalText>
        <Price
          data-testid="total-price"
          listedPrice={totalPrice}
          itemPriceType="total"
          duration={duration}
        />
      </TotalItemContainer>
    </Container>
  )
}
