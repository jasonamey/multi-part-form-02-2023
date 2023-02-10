import { useContext } from 'react'
import { StepNumberContext } from '@/context/StepNumberProvider'

export const useStepNumber = () => {
  const currentStepNumberContext = useContext(StepNumberContext)
  if (!currentStepNumberContext) {
    throw new Error(
      'useStepNumber has to be used within <StepNumberContext.Provider>'
    )
  }
  return currentStepNumberContext
}
