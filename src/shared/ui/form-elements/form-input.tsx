import { FC } from 'react'

export const FormInput: FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <div>
      <input type='text' placeholder={placeholder} />
    </div>
  )
}
