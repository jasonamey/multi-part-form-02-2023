import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { ItemContainer } from '@/components/ui'
import { CheckBox } from '@/components/ui'
import { useFormData } from '@/hooks/useFormData'
import { AddOnsType } from '@/typings/formData.types'
import { getTimeAbbreviation } from '@/utils'

export type AddOnData = {
  headerText: string
  subHeaderText: string
  price: number
  addOnType: keyof AddOnsType
}

type AddOnProps = {
  headerText: string
  subHeaderText: string
  price: number
  addOnType: keyof AddOnsType
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  display: flex;
  align-items: center;
`

const Right = styled.div`
  font-size: 0.8rem;
  color: var(--purplish-blue);
`

const HeaderContainer = styled.div``

const Header = styled.h3`
  color: var(--marine-blue);
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 0.2rem 0;
`
const SubHeader = styled.h4`
  color: var(--cool-gray);
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
`

export function AddOn({
  price,
  headerText,
  subHeaderText,
  addOnType,
}: AddOnProps) {
  const context = useFormData()
  const { setAddons, addOns, duration } = context
  const [isChecked, setIsChecked] = useState<boolean>(
    () => addOns[addOnType as keyof AddOnsType]
  )

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setIsChecked((state) => !state)
    setAddons((state) => ({ ...state, [addOnType]: e.target.checked }))
  }

  return (
    <ItemContainer selected={isChecked}>
      <Container>
        <Left>
          <CheckBox changeHandler={changeHandler} isChecked={isChecked} />
          <HeaderContainer>
            <Header>{headerText}</Header>
            <SubHeader>{subHeaderText}</SubHeader>
          </HeaderContainer>
        </Left>
        <Right>{`+$${price}/${getTimeAbbreviation(duration)}`}</Right>
      </Container>
    </ItemContainer>
  )
}
