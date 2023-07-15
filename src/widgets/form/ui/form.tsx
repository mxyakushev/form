import { Button } from '#/shared/ui/button'
import { Checkbox } from '#/shared/ui/checkbox'
import { FormInput, FormSelect } from '#/shared/ui/form-elements'
import { HeadingText } from '#/shared/ui/heading-text'
import { Logo } from '#/shared/ui/logo'

export const Form = () => {
  return (
    <div>
      <Logo />
      <HeadingText>Sign Up and find the best place to rest while traveling</HeadingText>
      <div>
        <FormInput placeholder='First Name' />
        <FormSelect />
        <FormInput placeholder='Password' />
        <FormInput placeholder='Email' />
      </div>
      <div>
        <FormInput placeholder='Second Name' />
        <FormInput placeholder='Phone' />
        <FormInput placeholder='Confirm Password' />
        <Checkbox />
      </div>
      <Button />
    </div>
  )
}
