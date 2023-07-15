import { createEffect, createEvent, createStore, sample } from 'effector'
import { createGate } from 'effector-react'

import { getCountries } from '#/entities/countries/model/api'
import { FormFields } from '#/widgets/form/model/fields'

import { Countries } from '../types'

export const getCountriesFx = createEffect(getCountries)
export const filterDropDown = createEvent<string>()
export const Gate = createGate()
export const $countries = createStore<Countries[]>([])

sample({
  clock: Gate.open,
  target: getCountriesFx
})

sample({ clock: getCountriesFx.doneData, target: $countries })

sample({
  clock: FormFields.formValidated,
  source: FormFields.$values,
  filter: values => !!values,
  fn: values => console.log(values),
  target: FormFields.reset
})
