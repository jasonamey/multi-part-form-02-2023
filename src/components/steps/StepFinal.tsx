import React from 'react'
import styled from 'styled-components'
import { device } from '@/styles/devices'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width ${device.laptop}) {
    margin-top: 4rem;
  }
`
const Icon = styled.img`
  margin-bottom: 0.6rem;
  width: 3rem;

  @media screen and ${device.tablet} {
    margin-bottom: 2rem;
    width: 4rem;
  }
`
const Header = styled.h1`
  font-size: 1.6rem;
  color: var(--marine-blue);
  margin-bottom: 0.6rem;
  @media screen and ${device.tablet} {
    margin-bottom: 3rem;
    font-size: 2rem;
  }
`
const FinalText = styled.p`
  text-align: center;
  color: var(--cool-gray);
  width: 80%;
  font-size: 0.9rem;
  line-height: 1.4;

  @media screen and ${device.tablet} {
    line-height: 1.5;
    font-size: 1.2rem;
  }
`

export function StepFinal() {
  return (
    <Container>
      <Icon src="icon-thank-you.svg" />
      <Header>Thank You!</Header>
      <FinalText>
        Thanks for conifming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at:
        bodacious_cowboy@lorem.ipsum
      </FinalText>
    </Container>
  )
}
