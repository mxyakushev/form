import axios from 'axios'

export const getCountries = async () => {
  let response
  try {
    response = await axios.get('https://restcountries.com/v3.1/all')
  } catch (err) {
    console.error(err)
  }

  return response?.data.map((value: any) => {
    return { country: value.name.common, code: value.idd.root + value.idd.suffixes }
  })
}
