import { AddOnsType } from '@/typings/formData.types'

/* type for step 3 - plan add-ons */

export type AddOnData = {
  headerText: string
  subHeaderText: string
  price: {
    monthly: number
    yearly: number
  }
  addOnType: keyof AddOnsType
}
