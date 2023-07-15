import { createForm } from 'effector-forms'

import { formRules } from '#/shared/lib/form-rules'

export const FormFields = createForm({
  fields: {
    firstName: {
      init: '',
      rules: [formRules.required(), formRules.minLength(2, 'name'), formRules.maxLength(15, 'name'), formRules.trim()],
      validateOn: ['submit', 'change']
    },
    secondName: {
      init: '',
      rules: [formRules.required(), formRules.minLength(2, 'name'), formRules.maxLength(15, 'name'), formRules.trim()],
      validateOn: ['submit', 'change']
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
      ],
      validateOn: ['submit', 'change']
    },
    phone: {
      init: '',
      rules: [formRules.required(), formRules.maxLength(15, 'phone')],
      validateOn: ['submit', 'change']
    },
    password: {
      init: '',
      rules: [formRules.required(), formRules.minLength(8, 'password'), formRules.password()],
      validateOn: ['submit', 'change']
    },
    confirmPassword: {
      init: ''
    },
    email: {
      init: '',
      rules: [formRules.required(), formRules.email()],
      validateOn: ['submit', 'change']
    },
    checkbox: {
      init: false,
      rules: [formRules.boolean()],
      validateOn: ['submit']
    }
  }
})
