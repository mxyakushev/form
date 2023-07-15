import { ConnectedField } from 'effector-forms'
import { FC } from 'react'

import { ErrorMessage } from '#/shared/ui/error-message'
import { Countries } from '#/widgets/form/types'

export const FormInput: FC<{
  className?: string
  icon: () => JSX.Element
  label: string
  field?: ConnectedField<string>
  errorText: string
  isError: boolean
  type?: 'password' | 'email' | 'text' | 'tel'
  mask?: ConnectedField<Countries>
}> = ({ className, icon, label, field, errorText, type = 'text', mask, isError }) => {
  return (
    <div className={`flex relative flex-col items-start sm:max-w-[300px] w-full font-light ${className}`}>
      <div className='absolute top-3 left-4'>{icon()}</div>
      <div className='absolute top-[13px] left-12 text-white text-[16px]'>{mask?.value.code}</div>
      <input
        type={type}
        id={label}
        disabled={!mask?.value.code && type === 'tel'}
        placeholder=' '
        autoComplete='off'
        className={`w-full peer p-3 placeholder-transparent bg-transparent font-light text-white rounded border-white placeholder:text-[#E0E0E0] placeholder:font-light focus:ring-0 transition duration-300 focus:border-theme focus:bg-blackTransparent ${
          type === 'tel' ? 'pl-[92px]' : 'pl-12'
        }`}
        value={field?.value}
        onChange={e => field?.onChange(e.target.value)}
      />
      <label
        htmlFor={label}
        className={`top-0.5 text-theme text-[10px] left-12 absolute
            ${
              mask?.value.code
                ? ''
                : 'peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-[#E0E0E0] duration-300'
            }`}
      >
        {label}
      </label>
      {isError && <ErrorMessage>{errorText}</ErrorMessage>}
    </div>
  )
}
