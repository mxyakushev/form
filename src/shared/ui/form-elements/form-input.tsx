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
      <input
        type={type}
        id={label}
        placeholder=' '
        autoComplete='off'
        className='w-full peer p-3 placeholder-transparent bg-transparent font-light text-white rounded border-white placeholder:text-[#E0E0E0] placeholder:font-light focus:ring-0 transition duration-300 focus:border-theme focus:bg-blackTransparent pl-12 hover:border-theme'
        value={mask?.value ? `${mask.value?.code}${field?.value}` : field?.value}
        onChange={e => field?.onChange(e.target.value.slice(mask?.value.code.length || 0))}
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
