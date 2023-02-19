import React, { ImgHTMLAttributes } from 'react'
// import styled, { css } from 'styled-components'
import styled from 'styled-components'
import { device } from '@/styles/devices'
import { ItemContainer } from '@/components/ui'
import { SetPlanType } from '@/context/FormDataProvider'
import { getTimeAbbreviation } from '@/utils'

type ChoiceProps = {
  duration: 'monthly' | 'yearly'
  selected: boolean
  setPlan: SetPlanType
  headerText: 'Arcade' | 'Advanced' | 'Pro'
  selectedPrice: number
  planType: 'arcade' | 'advanced' | 'pro'
  imgSource: string
}

type IconProps = ImgHTMLAttributes<HTMLImageElement>

const Icon = styled.img<IconProps>`
  width: 3rem;
  margin-right: 1rem;
  @media screen and ${device.tablet} {
    margin-bottom: 2rem;
  }
`
const ChoiceTextContainer = styled.div``
const ChoiceHeader = styled.h3`
  color: var(--marine-blue);
  margin: 0 0 0.4rem 0;
`
const ChoicePrice = styled.p`
  color: var(--light-gray);
  margin-bottom: 1.4rem;
`
const ChoicePromotion = styled.p`
  position: absolute;
  bottom: 0.8rem;
  color: var(--marine-blue);
  font-size: 0.8rem;
`

export function PlanChoice({
  imgSource,
  headerText,
  selectedPrice,
  duration,
  setPlan,
  planType,
  selected,
}: ChoiceProps) {
  function setPlanChoice() {
    setPlan(planType)
  }

  return (
    <ItemContainer selected={selected} clickHandler={setPlanChoice}>
      <Icon src={imgSource} />
      <ChoiceTextContainer>
        <ChoiceHeader>{headerText}</ChoiceHeader>

        <ChoicePrice>{`$${selectedPrice}/${getTimeAbbreviation(
          duration
        )}`}</ChoicePrice>
        {duration === 'yearly' && (
          <ChoicePromotion>2 months free</ChoicePromotion>
        )}
      </ChoiceTextContainer>
    </ItemContainer>
  )
}
