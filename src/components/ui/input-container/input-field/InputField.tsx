import React, { useState } from 'react'
import styled from 'styled-components'

export type InputFieldProps = {
  inputName: string
  labelText: string
  placeholder: string
  inputValue: string
  inputError: string
  inputChangeHandler: (value: string, id: string) => void
}

const Input = styled.input`
  padding: 0.8em 0.8em;
  border: 1px solid var(--light-gray);
  display: flex;
  align-items: center;
  border-radius: 0.6rem;
  margin-bottom: 1rem;
  width: 100%;
  &:focus::placeholder {
    color: transparent;
  }
`

const Label = styled.label`
  position: relative;
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
`

const Error = styled.span<{ error: boolean }>`
  color: red;
  position: absolute;
  right: 0;
  opacity: ${(props) => (props.error ? '1' : '0')};
  transition: 2s;
`

export function InputField({
  labelText,
  placeholder,
  inputName,
  inputChangeHandler,
  inputValue,
  inputError,
}: InputFieldProps) {
  const [error, setError] = useState<boolean | null>(null)
  const [contentInForm, setContentInForm] = useState(inputValue?.length > 0)

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null)
    setContentInForm(true)
    inputChangeHandler(inputName, e.target.value)
    if (e.target.value.length === 0) {
      setContentInForm(false)
    }
  }

  function blurHandler() {
    if (!contentInForm) {
      setError(true)
    }
  }
  return (
    <>
      <Label htmlFor={inputName}>
        {labelText}
        {!contentInForm && <Error error={error as boolean}>{inputError}</Error>}
      </Label>
      <Input
        onChange={changeHandler}
        placeholder={`e.g. ${placeholder}`}
        id={inputName}
        type="text"
        onBlur={blurHandler}
        value={inputValue}
      />
    </>
  )
}
