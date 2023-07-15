import { ConnectedField } from 'effector-forms'
import { ChangeEvent, FC } from 'react'

import { ErrorMessage } from '#/shared/ui/error-message'

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
  const inputStyles = field?.isValid && field.isTouched ? 'bg-blackTransparent' : 'bg-transparent'
  const labelStyles = mask?.value.code
    ? ''
    : 'peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-[#E0E0E0] duration-300'

  const getMaskedValue = ({ code = '', value = '' }) => (code ? code + value : value)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    field?.onChange(e.target.value.slice(mask?.value.code.length || 0))

  return (
    <div className={`flex relative flex-col items-start w-full font-light ${className ?? ''}`}>
      <div className='absolute top-3 left-4'>{icon()}</div>
      <input
        type={type}
        id={label}
        placeholder=' '
        autoComplete='off'
        className={`w-full peer p-3 placeholder-transparent font-light text-white rounded border-white placeholder:text-[#E0E0E0] placeholder:font-light focus:ring-0 transition duration-300 focus:border-theme focus:bg-blackTransparent pl-12 hover:border-theme ${inputStyles}`}
        value={getMaskedValue({ code: mask?.value.code, value: field?.value })}
        onChange={handleChange}
      />
      <label htmlFor={label} className={`top-0.5 text-theme text-[10px] left-12 absolute ${labelStyles}`}>
        {label}
      </label>
      {isError && <ErrorMessage>{errorText}</ErrorMessage>}
    </div>
  )
}
