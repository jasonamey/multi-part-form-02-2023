import React, { createContext, useState } from 'react'

type StepNumberProviderProps = {
  children: React.ReactNode
}

export type NumberContextType = 1 | 2 | 3 | 4 | 5
export type SetStepNumberFunctionType = React.Dispatch<
  React.SetStateAction<NumberContextType>
>

export type StepNumberContextType = {
  stepNumber: NumberContextType
  setStepNumber: SetStepNumberFunctionType
} | null

export const StepNumberContext = createContext<StepNumberContextType | null>(
  null
)

export default function StepNumberProvider({
  children,
}: StepNumberProviderProps) {
  const [stepNumber, setStepNumber] = useState<NumberContextType>(1)

  const values = {
    stepNumber,
    setStepNumber,
  }
  return (
    <StepNumberContext.Provider value={values}>
      {children}
    </StepNumberContext.Provider>
  )
}
