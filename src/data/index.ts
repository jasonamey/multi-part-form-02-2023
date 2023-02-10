import { formDataPriceType } from '@/typings/formData.types'
import { AddOnData } from '@/typings/steps.types'
import { Choices } from '@/typings/formData.types'

export const INPUT_FIELDS: {
  inputName: string
  placeholder: string
  labelText: string
}[] = [
  {
    inputName: 'name',
    placeholder: 'Gaucho Amigo',
    labelText: 'Name',
  },
  {
    inputName: 'email',
    placeholder: 'nasty_schoolboy@lorem.com',
    labelText: 'Email Address',
  },
  {
    inputName: 'phone',
    placeholder: '+1 234 567 8910',
    labelText: 'Phone Number',
  },
]

export const PLAN_CHOICES_DATA: Choices[] = [
  {
    imgSource: '/icon-arcade.svg',
    headerText: 'Arcade',
    choicePrices: { monthly: 9, yearly: 90 },
    planType: 'arcade',
  },
  {
    imgSource: '/icon-advanced.svg',
    headerText: 'Advanced',
    choicePrices: { monthly: 12, yearly: 120 },
    planType: 'advanced',
  },
  {
    imgSource: '/icon-pro.svg',
    headerText: 'Pro',
    choicePrices: { monthly: 15, yearly: 150 },
    planType: 'pro',
  },
]

export const FORM_DATA_PRICES: formDataPriceType = {
  arcade: {
    monthly: 9,
    yearly: 90,
  },
  advanced: {
    monthly: 12,
    yearly: 120,
  },
  pro: {
    monthly: 15,
    yearly: 150,
  },
  monthlyAddOns: {
    online: 1,
    storage: 2,
    profile: 2,
  },
  yearlyAddOns: {
    online: 10,
    storage: 20,
    profile: 20,
  },
}

export const ADD_ONS_DATA: AddOnData[] = [
  {
    addOnType: 'online',
    price: { monthly: 1, yearly: 10 },
    headerText: 'Online service',
    subHeaderText: 'Access to multiplayer games',
  },
  {
    addOnType: 'storage',
    price: { monthly: 2, yearly: 20 },
    headerText: 'Larger storage',
    subHeaderText: 'Extra 1TB of cloud save',
  },
  {
    addOnType: 'profile',
    price: { monthly: 2, yearly: 20 },
    headerText: 'Cutomizable profile',
    subHeaderText: 'Custom theme on your profile',
  },
]
