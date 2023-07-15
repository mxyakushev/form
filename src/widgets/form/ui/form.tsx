import { useForm } from 'effector-forms'
import { useGate, useStore } from 'effector-react'

import { Button } from '#/shared/ui/button'
import { Checkbox } from '#/shared/ui/checkbox'
import { FormDropdown, FormInput } from '#/shared/ui/form-elements'
import { HeadingText } from '#/shared/ui/heading-text'
import { HighlightText } from '#/shared/ui/highlight-text'
import {
  ConfirmPasswordIcon,
  CountryIcon,
  EmailIcon,
  FirstNameIcon,
  PasswordIcon,
  PhoneIcon,
  SecondNameIcon
} from '#/shared/ui/icons'
import { Logo } from '#/shared/ui/logo'
import { FormFields } from '#/widgets/form/model/fields'

import * as model from '../model/store'

export const Form = () => {
  const countries = useStore(model.$countries)
  const { fields, submit, errorText } = useForm(FormFields)

  useGate(model.Gate)
  return (
    <div>
      <div className='mb-[30px] flex justify-center'>
        <Logo />
      </div>
      <HeadingText className='mb-[55px]'>
        <span className='text-theme'>Sign Up</span> and find the best place to rest while traveling
      </HeadingText>
      <form>
        <div className='flex justify-center'>
          <div className='mr-[15px]'>
            <FormInput
              icon={FirstNameIcon}
              className='mb-[30px]'
              label='First Name'
              field={fields.firstName}
              errorText={errorText('firstName')}
            />
            <FormDropdown
              icon={CountryIcon}
              className='mb-[30px]'
              label='Country'
              options={countries}
              field={fields.country}
              errorText={errorText('country')}
            />
            <FormInput
              type='password'
              icon={PasswordIcon}
              className='mb-[30px]'
              label='Password'
              field={fields.password}
              errorText={errorText('password')}
            />
            <FormInput
              type='email'
              icon={EmailIcon}
              className='mb-[30px]'
              label='Email'
              field={fields.email}
              errorText={errorText('email')}
            />
          </div>
          <div className='ml-[15px]'>
            <FormInput
              icon={SecondNameIcon}
              className='mb-[30px]'
              label='Second Name'
              field={fields.secondName}
              errorText={errorText('secondName')}
            />
            <FormInput
              type='tel'
              icon={PhoneIcon}
              className='mb-[30px]'
              label='Phone'
              field={fields.phone}
              errorText={errorText('phone')}
              mask={fields.country}
            />
            <FormInput
              type='password'
              icon={ConfirmPasswordIcon}
              className='mb-[30px]'
              label='Confirm Password'
              field={fields.confirmPassword}
              errorText={errorText('confirmPassword')}
            />
            <Checkbox
              label={
                <div className='text-[15px] font-light text-white flex'>
                  I agree to the
                  <div className='w-[135px] ml-0.5 text-center'>
                    <HighlightText>Terms & Conditions</HighlightText>
                  </div>
                </div>
              }
              field={fields.checkbox}
              id='checkbox'
              name='checkbox'
            />
          </div>
        </div>
        <Button onClick={submit}>Sign Up</Button>
      </form>
      <div className='absolute bottom-[30px] left-1/2 -translate-x-1/2 text-[15px] font-light text-white flex'>
        If you have an account,
        <div className='w-[42px] ml-1 text-center'>
          <HighlightText>Log in</HighlightText>
        </div>
      </div>
    </div>
  )
}
