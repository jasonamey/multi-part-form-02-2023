import React from 'react'
import styled, { css } from 'styled-components'
import { device } from '@/styles/devices'

type StepPointProps = {
  pointNumber: number
  pointText: string
  isActive: boolean
}

const Container = styled.li`
  margin: 0;
  display: flex;
  align-items: center;
  @media screen and ${device.tablet} {
    display: flex;
    margin-bottom: 1rem;
  }
`

const PointBadge = styled.span<{ isActive: boolean }>`
  ${({ isActive }) => {
    switch (isActive) {
      case true:
        return css`
          background-color: var(--light-blue);
          color: var(--marine-blue);
          border: 1px solid var(--light-blue);
        `
      case false:
        return css`
          background-color: transparent;
          color: inherit;
          border: 1px solid var(--white);
        `
    }
  }}
  height: 28px;
  width: 28px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 0.8rem;
`

const PointTextContainer = styled.div`
  display: none;
  text-transform: uppercase;
  @media screen and ${device.tablet} {
    display: block;
  }
`
const PointTextHeadline = styled.h2`
  color: var(--pastel-blue);
  font-size: 0.6rem;
  font-weight: 100;
  margin-bottom: 0.4em;
  @media screen and ${device.tablet} {
    font-size: 0.7rem;
  }
`
const PointText = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  @media screen and ${device.tablet} {
    font-size: 0.8rem;
  }
`

export function StepPointItem({
  pointNumber,
  pointText,
  isActive,
}: StepPointProps) {
  return (
    <Container>
      <PointBadge isActive={isActive}>{pointNumber}</PointBadge>
      <PointTextContainer>
        <PointTextHeadline>step{` ${pointNumber}`}</PointTextHeadline>
        <PointText>{pointText}</PointText>
      </PointTextContainer>
    </Container>
  )
}
