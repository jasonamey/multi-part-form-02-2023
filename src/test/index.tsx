import React from 'react'
import FormDataProvider from '@/context/FormDataProvider'
import StepNumberProvider from '@/context/StepNumberProvider'

interface TestWrapperProps {
  children: React.ReactNode
}

export const TestWrapper = ({ children }: TestWrapperProps) => {
  return (
    <FormDataProvider>
      <StepNumberProvider>{children}</StepNumberProvider>
    </FormDataProvider>
  )
}

import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

export async function clickForwardBtn() {
  const fwdButton = screen.getByRole('button', { name: 'Forward' })
  await userEvent.click(fwdButton)
}

export async function clickBackBtn() {
  const fwdButton = screen.getByRole('button', { name: 'Go Back' })
  await userEvent.click(fwdButton)
}

export async function completeStepOne() {
  const inputFields = screen.getAllByRole('textbox')
  for (const field of inputFields) {
    await userEvent.type(field, 'test')
  }
}

export async function completeStepTwo(planType: string, duration: string) {
  await completeStepOne()
  await clickForwardBtn()
  const promotion = screen.getByRole('heading', { name: planType })
  await userEvent.click(promotion)
  if (duration === 'yearly') {
    const toggle = screen.getByRole('checkbox')
    await userEvent.click(toggle)
  }
}
