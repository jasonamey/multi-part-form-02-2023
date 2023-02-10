import React, { useEffect, useState } from 'react'
import { Button } from '../ui'
import styled from 'styled-components'
import { useStepNumber } from '@/hooks/useStepNumber'
import { useFormData } from '@/hooks/useFormData'
import { NumberContextType } from '@/context/StepNumberProvider'
import { device } from '@/styles/devices'

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
  background-color: var(--white);
  @media screen and ${device.tablet} {
    position: relative;
    padding: 0;
    background-color: transparent;
  }
`
const STEP_NUMBERS_ARRAY: NumberContextType[] = [1, 2, 3, 4, 5]

export function Navigation() {
  const [isInfoEmpty, setIsInfoEmpty] = useState(true)
  const stepContext = useStepNumber()
  const { stepNumber, setStepNumber } = stepContext
  const numberIdx = (stepNumber as number) - 1

  const formContex = useFormData()
  const { info } = formContex

  const { email, name, phone } = info

  useEffect(() => {
    if (email.length > 0 && name.length > 0 && phone.length > 0) {
      setIsInfoEmpty(false)
    } else {
      setIsInfoEmpty(true)
    }
  }, [email.length, name.length, phone.length])

  return (
    <Container>
      <Button
        buttonType={stepNumber < 4 ? 'forward' : 'confirm'}
        onClick={() => setStepNumber(STEP_NUMBERS_ARRAY[numberIdx + 1])}
        disabled={isInfoEmpty}
      >
        {stepNumber < 4 ? 'Forward' : 'Confirm'}
      </Button>
      {stepNumber !== 1 && (
        <Button
          buttonType="back"
          onClick={() => setStepNumber(STEP_NUMBERS_ARRAY[numberIdx - 1])}
        >
          Go Back
        </Button>
      )}
    </Container>
  )
}
