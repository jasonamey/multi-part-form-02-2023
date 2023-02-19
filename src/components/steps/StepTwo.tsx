import React from 'react'
import styled from 'styled-components'
import { Header } from '@/components/ui'
import { PlanChoices } from '@/components/plan-choices'
import { ToggleSwitch } from '@/components/ui/toggle-switch'

const Container = styled.div``

const ToggleSwitchContainer = styled.div`
  width: 100%;
  background-color: var(--pastel-blue);
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`

export function StepTwo() {
  return (
    <Container>
      <Header
        titleText="Select your plan"
        subtitleText="You have the option of monthly or yearly billing"
      />
      <PlanChoices />
      <ToggleSwitchContainer>
        <ToggleSwitch />
      </ToggleSwitchContainer>
    </Container>
  )
}
