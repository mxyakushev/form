import { Rule } from 'effector-forms'

export const formRules = {
  required: (errorText = 'Fill in the field'): Rule<unknown> => ({
    name: 'required',
    validator: value => ({
      isValid: Array.isArray(value) ? Boolean(value.length) : Boolean(value),
      errorText
    })
  }),
  email: (): Rule<string> => ({
    name: 'email',
    validator: value => ({
      isValid: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value),
      errorText: 'Email is not correct'
    })
  }),
  letters: (): Rule<string> => ({
    name: 'letters',
    validator: value => ({
      isValid: /^[A-Za-z]+$/.test(value),
      errorText: 'Letters only'
    })
  }),
  lettersSpaces: (): Rule<string> => ({
    name: 'lettersSpaces',
    validator: value => ({
      isValid: /^[A-z\s.-]+$/.test(value),
      errorText: 'Letters and spaces only'
    })
  }),
  lettersNumbers: (): Rule<string> => ({
    name: 'lettersNumbers',
    validator: value => ({
      isValid: /^[A-Za-z0-9]+$/.test(value),
      errorText: 'Letters and numbers only'
    })
  }),
  minLength: (min: number, fieldName: string): Rule<string> => ({
    name: 'minLength',
    validator: value => ({
      isValid: !value.trim().length || value.trim().length >= min,
      errorText: `The ${fieldName} must be more than ${min} characters`
    })
  }),
  maxLength: (max: number, fieldName: string): Rule<string> => ({
    name: 'maxLength',
    validator: value => ({
      isValid: value.length < max,
      errorText: `The ${fieldName} must be less than ${max} characters`
    })
  }),
  trim: (errorText = 'The field cannot be empty'): Rule<string> => ({
    name: 'trim',
    validator: value => ({
      isValid: !!value.trim(),
      errorText
    })
  }),
  password: (): Rule<string> => ({
    name: 'password',
    validator: value => ({
      isValid: /\d/.test(value) && /[a-zA-Z]/.test(value) && /\W/.test(value),
      errorText: 'Password must have 1 letter, 1 number and one symbol'
    })
  }),
  boolean: (errorText = ''): Rule<boolean> => ({
    name: 'boolean',
    validator: value => ({
      isValid: value,
      errorText
    })
  })
}
