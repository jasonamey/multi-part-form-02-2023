import { DurationType, AddOnsType, AddOnData } from '@/typings/formData.types'
import { ADD_ONS_DATA } from '@/data'

export function titleCase(word: string) {
  return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`
}

export function getTimeAbbreviation(duration: DurationType) {
  const DATE_ABBRV = {
    monthly: 'mo',
    yearly: 'yr',
  }
  return DATE_ABBRV[duration]
}

export function removeAdverb(str: DurationType) {
  const idx = str.indexOf('ly')
  return str.slice(0, idx)
}

export function sumAddOnPrices(
  duration: DurationType,
  selectedAddOns: AddOnData[]
) {
  let total = 0
  selectedAddOns.forEach((item) => {
    const { price } = item
    total += price[duration]
  })
  return total
}

export function selectedAddOns(addOns: AddOnsType) {
  return ADD_ONS_DATA.filter((item) => {
    const { addOnType } = item
    if (addOns[addOnType]) {
      return item
    }
  })
}
