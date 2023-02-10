import React from 'react'
import styled, { css } from 'styled-components'
import { device } from '@/styles/devices'

type ItemContainerProps = {
  children: React.ReactNode
  selected?: boolean
  clickHandler?: () => void
}

const Container = styled.div<{ selected?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  flex: 0.32;
  border-radius: 0.5rem;
  padding: 0.8rem;
  margin-bottom: 0.6rem;
  ${(props) => {
    switch (props.selected) {
      case true:
        return css`
          border: 1px solid var(--purplish-blue);
          background-color: var(--pastel-blue);
        `
      case false:
        return css`
          border: 1px solid var(--light-gray);
        `
    }
  }}
  @media screen and ${device.tablet} {
    flex-direction: column;
    justify-content: space-between;
  }
`

export function ItemContainer({
  children,
  selected = false,
  clickHandler,
}: ItemContainerProps) {
  return (
    <Container selected={selected} onClick={clickHandler}>
      {children}
    </Container>
  )
}
