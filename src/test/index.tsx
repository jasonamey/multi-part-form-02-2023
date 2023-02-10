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
