import React from 'react'
import styled from 'styled-components'
import { InputField } from './input-field'
import { useFormData } from '@/hooks/useFormData'
import { INPUT_FIELDS } from '../../../data'
import { PersonalInformationType } from '@/typings/formData.types'

const Container = styled.div``

export function InputContainer() {
  const context = useFormData()
  const { setInfo, info } = context

  function changeHandler(id: string, value: string) {
    setInfo((state) => ({ ...state, [id]: value }))
  }

  const inputFieldsContent = INPUT_FIELDS.map((item) => {
    return (
      <InputField
        key={item.inputName}
        inputChangeHandler={changeHandler}
        inputValue={info[item.inputName as keyof PersonalInformationType]}
        inputError="This field is required"
        {...item}
      />
    )
  })

  return <Container>{inputFieldsContent}</Container>
}
