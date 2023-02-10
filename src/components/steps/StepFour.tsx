import React from 'react'
import styled from 'styled-components'
import { FinishingUp } from '../finishing-up'
import { Header } from '@/components/ui'

const Container = styled.div``

export function StepFour() {
  return (
    <Container>
      <Header
        titleText="Finishing Up"
        subtitleText="Double-check everything looks OK before confirming"
      />
      <FinishingUp />
    </Container>
  )
}
