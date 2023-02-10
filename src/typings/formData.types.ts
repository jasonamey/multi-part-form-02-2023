/* 1. for use in StepOne */
export type PersonalInformationType = {
  name: string
  email: string
  phone: string
}

/*************************/

/* 2. for use in StepTwo */

export type PlanType = 'arcade' | 'advanced' | 'pro'
export type DurationType = 'yearly' | 'monthly'

// type priceText = {
//   monthly: string
//   yearly: string
// }

type ChoicePricesType = {
  monthly: number
  yearly: number
}

export type Choices = {
  imgSource: string
  headerText: 'Arcade' | 'Advanced' | 'Pro'
  choicePrices: ChoicePricesType
  planType: 'arcade' | 'advanced' | 'pro'
}

// export type Choices = {
//   imgSource: string
//   headerText: 'Arcade' | 'Advanced' | 'Pro'
//   priceText: priceText
//   planType: PlanType
// }

/*************************/

/* 3. for use in StepThree */
export type AddOnsType = {
  online: boolean
  storage: boolean
  profile: boolean
}

export type AddOnData = {
  headerText: string
  subHeaderText: string
  price: {
    monthly: number
    yearly: number
  }
  addOnType: keyof AddOnsType
}

/*************************/

/* 4. for use in StepFour */

/*************************/

/* all of the choices collected in all steps */
export type CollectedDataType = {
  info: PersonalInformationType
  plan: 'arcade' | 'advanced' | 'pro'
  duration: 'yearly' | 'monthly'
  addOns: AddOnsType
}

/* price terms and price add-ons for form data */

type timePriceTermsType = {
  monthly: number
  yearly: number
}

type monthlyAddOnsType = {
  monthlyAddOns: {
    online: number
    storage: number
    profile: number
  }
}

type yearAddOnsType = {
  yearlyAddOns: {
    online: number
    storage: number
    profile: number
  }
}

type arcadePrice = { arcade: timePriceTermsType }
type advancedPrice = { advanced: timePriceTermsType }
type proPrice = { pro: timePriceTermsType }

export type formDataPriceType = arcadePrice &
  advancedPrice &
  proPrice &
  monthlyAddOnsType &
  yearAddOnsType
