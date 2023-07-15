import axios from 'axios'

import { CountryAPIResponse } from '../types'

export const getCountries = async (): Promise<Countries[]> => {
  let response: { data: CountryAPIResponse[] }
  let result: Countries[]

  try {
    response = await axios.get('https://restcountries.com/v3.1/all')
  } catch (err) {
    throw new Error(`Failed to get countries list: ${err}`)
  }

  try {
    result = response.data.map((value: CountryAPIResponse) => {
      return { country: value.name.common, code: value.idd.root + value.idd.suffixes }
    })
  } catch (err) {
    throw new Error(`Failed to build country properties: ${err}`)
  }

  return result
}
