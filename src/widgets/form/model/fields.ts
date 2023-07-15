import { createForm } from 'effector-forms'

import { formRules } from '#/shared/lib/form-rules'

export const FormFields = createForm({
  fields: {
    firstName: {
      init: '',
      rules: [
        formRules.required(),
        formRules.minLength(2, 'name'),
        formRules.maxLength(15, 'name'),
        formRules.letters(),
        formRules.trim()
      ]
    },
    secondName: {
      init: '',
      rules: [
        formRules.required(),
        formRules.minLength(2, 'name'),
        formRules.maxLength(15, 'name'),
        formRules.letters(),
        formRules.trim()
      ]
    },
    country: {
      init: { country: '', code: '' },
      rules: [
        {
          name: 'required',
          validator: value => ({
            isValid: !!value.country,
            errorText: 'Fill in the field'
          })
        }
      ]
    },
    phone: {
      init: '',
      rules: [formRules.required()]
    },
    password: {
      init: '',
      rules: [formRules.required(), formRules.minLength(8, 'password'), formRules.password()]
    },
    confirmPassword: {
      init: '',
      rules: [formRules.required(), formRules.minLength(8, 'confirmPassword'), formRules.password()]
    },
    email: {
      init: '',
      rules: [formRules.required(), formRules.email()]
    },
    checkbox: {
      init: false,
      rules: [formRules.boolean()],
      validateOn: ['submit']
    }
  },
  validateOn: ['submit', 'change']
})
