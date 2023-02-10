import React from 'react'
import styled from 'styled-components'
import { StepPointItem } from './StepPointItem'
import { useStepNumber } from '@/hooks/useStepNumber'
import { StepPoint } from '@/typings/stepPoint.types'
import { device } from '@/styles/devices'

type StepPointListProps = {
  stepPointItems: StepPoint[]
}

const Container = styled.ul`
  width: 100%;
  max-width: 52rem;
  list-style: none;
  display: flex;
  flex-align: row;
  align-items: center;
  justify-content: center;
  @media screen and ${device.tablet} {
    display: block;
  }
`

export function StepPointList({ stepPointItems }: StepPointListProps) {
  const { stepNumber } = useStepNumber()
  return (
    <Container>
      {stepPointItems.map((item: StepPoint, idx) => (
        <StepPointItem
          key={item.stepNumber}
          pointText={item.stepText}
          pointNumber={item.stepNumber}
          isActive={stepNumber - 1 === idx}
        />
      ))}
    </Container>
  )
}
