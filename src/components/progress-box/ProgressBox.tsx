import React from 'react'
import styled from 'styled-components'
import { StepPointList } from './StepPointList'
import { StepPoint } from '@/typings/stepPoint.types'
import { device } from '@/styles/devices'

const Container = styled.div`
  background-image: url('/bg-sidebar-mobile.svg');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.6rem;
  padding: 1.5em 1em;
  color: var(--white);
  width: 100%;
  margin-bottom: 1rem;

  @media screen and ${device.tablet} {
    width: 24%;
    background-image: url('/bg-sidebar-desktop.svg');
    background-size: cover;
    margin-bottom: 0;
  }
`

const data: StepPoint[] = [
  { stepNumber: 1, stepText: 'your info' },
  { stepNumber: 2, stepText: 'select plan' },
  { stepNumber: 3, stepText: 'add-ons' },
  { stepNumber: 4, stepText: 'summary' },
]

export function ProgressBox() {
  return (
    <Container>
      <StepPointList stepPointItems={data} />
    </Container>
  )
}
