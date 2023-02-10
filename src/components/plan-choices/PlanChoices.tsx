import React from 'react'
import styled from 'styled-components'
import { PlanChoice } from './plan-choice'
import { device } from '@/styles/devices'
import { useFormData } from '@/hooks/useFormData'
import { PLAN_CHOICES_DATA } from '@/data'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`

export function PlanChoices() {
  const context = useFormData()
  const { setPlan, plan, duration } = context
  return (
    <Container>
      {PLAN_CHOICES_DATA.map(({ headerText, imgSource, planType }, idx) => {
        const price = PLAN_CHOICES_DATA[idx]['choicePrices'][duration]

        return (
          <PlanChoice
            key={headerText}
            headerText={headerText}
            selectedPrice={price}
            imgSource={imgSource}
            duration={duration}
            setPlan={setPlan}
            planType={planType}
            selected={planType === plan}
          />
        )
      })}
    </Container>
  )
}
