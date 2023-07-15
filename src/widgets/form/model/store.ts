import { createEffect, createStore, sample } from 'effector'
import { createGate } from 'effector-react'

import { getCountries } from '#/entities/countries/model/api'

import { Countries } from '../types'

export const getCountriesFx = createEffect(getCountries)

export const Gate = createGate()
export const $countries = createStore<Countries[]>([])

sample({
  clock: Gate.open,
  target: getCountriesFx
})

sample({ clock: getCountriesFx.doneData, target: $countries })
