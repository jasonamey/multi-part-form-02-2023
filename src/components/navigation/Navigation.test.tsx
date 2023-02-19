import { Navigation } from './Navigation'
import { screen, render } from '@testing-library/react'
import FormDataProvider from '@/context/FormDataProvider'
import {
  StepNumberContext,
  StepNumberContextType,
  SetStepNumberFunctionType,
} from '@/context/StepNumberProvider'
import React, { ReactElement } from 'react'

const customRender = (
  ui: ReactElement,
  { ...providerProps }: StepNumberContextType
) => {
  return render(
    <FormDataProvider>
      <StepNumberContext.Provider value={providerProps}>
        {ui}
      </StepNumberContext.Provider>
    </FormDataProvider>
  )
}

describe('Navigation', () => {
  it('renders only Forward button on step 1', () => {
    const setStateMock: SetStepNumberFunctionType = jest.fn()
    customRender(<Navigation />, { stepNumber: 1, setStepNumber: setStateMock })
    expect(screen.getByRole('button', { name: 'Forward' })).toBeInTheDocument()
    const result = screen.queryByRole('button', { name: 'Back' })
    expect(result).toBeNull()
  }),
    it('renders Forward and Go Back button on step 2', () => {
      const setStateMock: SetStepNumberFunctionType = jest.fn()
      customRender(<Navigation />, {
        stepNumber: 2,
        setStepNumber: setStateMock,
      })
      expect(
        screen.getByRole('button', { name: 'Forward' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: 'Go Back' })
      ).toBeInTheDocument()
    }),
    it('renders Forward and Go Back button on step 3', () => {
      const setStateMock: SetStepNumberFunctionType = jest.fn()
      customRender(<Navigation />, {
        stepNumber: 3,
        setStepNumber: setStateMock,
      })
      expect(
        screen.getByRole('button', { name: 'Forward' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: 'Go Back' })
      ).toBeInTheDocument()
    }),
    it('renders Confirm and Go Back button on step 4', () => {
      const setStateMock: SetStepNumberFunctionType = jest.fn()
      customRender(<Navigation />, {
        stepNumber: 4,
        setStepNumber: setStateMock,
      })
      expect(
        screen.getByRole('button', { name: 'Confirm' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: 'Go Back' })
      ).toBeInTheDocument()
    })
})
