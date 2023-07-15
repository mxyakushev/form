import { useForm } from 'effector-forms'
import { useGate, useStoreMap } from 'effector-react'

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
  const { fields, submit, errorText } = useForm(FormFields)
  const filteredCountries = useStoreMap({
    keys: [fields.country?.value?.country],
    store: model.$countries,
    fn: countries => countries.filter(({ country }) => country.includes(fields.country?.value?.country))
  })

  const onSubmit = () => {
    if (fields.password?.value === fields.confirmPassword?.value) {
      submit()
    }
  }

  useGate(model.Gate)
  return (
    <>
      <div className='p-3 grow flex items-center flex-col justify-center'>
        <div className='mb-[30px] flex justify-center'>
          <Logo />
        </div>
        <HeadingText className='mb-[55px]'>
          <span className='text-theme'>Sign Up</span> and find the best place to rest while traveling
        </HeadingText>
        <form className='mb-[30px] w-full'>
          <div className='flex justify-center flex-col sm:flex-row'>
            <div className='sm:mr-[15px] sm:w-[49%]'>
              <FormInput
                icon={FirstNameIcon}
                className='mb-[30px]'
                label='First Name'
                field={fields.firstName}
                errorText={errorText('firstName')}
                isError={!!fields.firstName?.errors}
              />
              <FormDropdown
                icon={CountryIcon}
                className='mb-[30px]'
                label='Country'
                options={filteredCountries}
                field={fields.country}
                errorText={errorText('country')}
                filterDropdown={val => model.filterDropDown(val)}
              />
              <FormInput
                type='password'
                icon={PasswordIcon}
                className='mb-[30px]'
                label='Password'
                field={fields.password}
                errorText={errorText('password')}
                isError={!!fields.password?.errors}
              />
              <FormInput
                type='email'
                icon={EmailIcon}
                className='mb-[30px]'
                label='Email'
                field={fields.email}
                errorText={errorText('email')}
                isError={!!fields.email?.errors}
              />
            </div>
            <div className='sm:ml-[15px] sm:w-[49%]'>
              <FormInput
                icon={SecondNameIcon}
                className='mb-[30px]'
                label='Second Name'
                field={fields.secondName}
                errorText={errorText('secondName')}
                isError={!!fields.secondName?.errors}
              />
              <FormInput
                type='tel'
                icon={PhoneIcon}
                className='mb-[30px]'
                label='Phone'
                field={fields.phone}
                errorText={errorText('phone')}
                mask={fields.country}
                isError={!!fields.phone?.errors}
              />
              <FormInput
                type='password'
                icon={ConfirmPasswordIcon}
                className='mb-[30px]'
                label='Confirm Password'
                field={fields.confirmPassword}
                errorText={'Password does not match'}
                isError={fields.password?.value !== fields.confirmPassword?.value}
              />
              <Checkbox
                label={
                  <div className='text-[15px] font-light text-white flex'>
                    I agree to the
                    <HighlightText className='ml-0.5'>Terms & Conditions</HighlightText>
                  </div>
                }
                field={fields.checkbox}
                className='mb-[30px]'
                id='checkbox'
                name='checkbox'
              />
            </div>
          </div>
          <Button onClick={onSubmit}>Sign Up</Button>
        </form>
      </div>
      <div className='text-[15px] grow-0 font-light text-white flex justify-center'>
        If you have an account, <HighlightText className='ml-1'>Log in</HighlightText>
      </div>
    </>
  )
}
