import React from 'react'
import styled from 'styled-components'
import { AddOn } from './add-on'
import { ADD_ONS_DATA } from '@/data'
import { useFormData } from '@/hooks/useFormData'

const Container = styled.div``

export function AddOns() {
  const { duration } = useFormData()

  return (
    <Container>
      {ADD_ONS_DATA.map((item) => {
        return (
          <AddOn key={item.addOnType} {...item} price={item.price[duration]} />
        )
      })}
    </Container>
  )
}
