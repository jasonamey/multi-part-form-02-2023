import React from 'react'
import styled from 'styled-components'
import { Header } from '@/components/ui'
import { AddOns } from '../add-ons'
const Container = styled.div``

export function StepThree() {
  return (
    <Container>
      <Header
        titleText="Pick add-ons"
        subtitleText="Add-ons help enhance your gaming experience"
      />
      <AddOns />
    </Container>
  )
}
