import { useContext } from 'react'
import { FormDataContext } from '@/context/FormDataProvider'

export const useFormData = () => {
  const currentFormDataContext = useContext(FormDataContext)
  if (!currentFormDataContext) {
    throw new Error(
      'useFormData has to be used within <FormDataContext.Provider>'
    )
  }
  return currentFormDataContext
}
