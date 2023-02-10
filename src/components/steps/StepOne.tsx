import React from 'react'
import styled from 'styled-components'
import { Header } from '@/components/ui'
import { InputContainer } from '@/components/ui'

const Container = styled.div``
export function StepOne() {
  return (
    <Container>
      <Header
        titleText="Personal Info"
        subtitleText="Please provide your name, email address, and phone number"
      />
      <InputContainer />
    </Container>
  )
}
