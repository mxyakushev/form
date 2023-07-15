import { createForm } from 'effector-forms'

import { formRules } from '#/shared/lib/form-rules'

export const FormFields = createForm({
  fields: {
    firstName: {
      init: '',
      rules: [
        formRules.required(),
        formRules.minLength(2, 'firstName'),
        formRules.maxLength(15, 'firstName'),
        formRules.letters(),
        formRules.trim()
      ]
    },
    secondName: {
      init: '',
      rules: [
        formRules.required(),
        formRules.minLength(2, 'secondName'),
        formRules.maxLength(15, 'secondName'),
        formRules.letters(),
        formRules.trim()
      ]
    },
    country: {
      init: '',
      rules: [formRules.required()]
    },
    phone: {
      init: '',
      rules: [formRules.required(), formRules.numbers(), formRules.equal(12)]
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
    }
  },
  validateOn: ['submit']
})
