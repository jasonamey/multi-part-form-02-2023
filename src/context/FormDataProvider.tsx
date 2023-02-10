import React, { createContext, useState } from 'react'
import {
  PlanType,
  DurationType,
  PersonalInformationType,
  AddOnsType,
  CollectedDataType,
} from '@/typings/formData.types'

type FormDataProviderProps = {
  children: React.ReactNode
}

type SetDurationFunctionType = React.Dispatch<
  React.SetStateAction<DurationType>
>
export type SetPlanType = React.Dispatch<React.SetStateAction<PlanType>>
type SetAddOnsType = React.Dispatch<React.SetStateAction<AddOnsType>>

export type FormDataContextType =
  | ({
      setDuration: SetDurationFunctionType
      setPlan: SetPlanType
      setInfo: React.Dispatch<React.SetStateAction<PersonalInformationType>>
      setAddons: SetAddOnsType
    } & CollectedDataType)
  | null

export const FormDataContext = createContext<FormDataContextType | null>(null)

export default function FormDataProvider({ children }: FormDataProviderProps) {
  /* for use in StepOne */
  const [info, setInfo] = useState<PersonalInformationType>({
    email: '',
    name: '',
    phone: '',
  } as PersonalInformationType)

  /* for use in StepTwo */
  const [plan, setPlan] = useState<PlanType>('arcade')
  const [duration, setDuration] = useState<DurationType>('monthly')

  /* for use in StepThree */
  const [addOns, setAddons] = useState<AddOnsType>({
    online: false,
    storage: false,
    profile: false,
  })

  const values = {
    plan,
    duration,
    info,
    addOns,
    setPlan,
    setDuration,
    setInfo,
    setAddons,
  }
  return (
    <FormDataContext.Provider value={values}>
      {children}
    </FormDataContext.Provider>
  )
}
