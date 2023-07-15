import { ConnectedField } from 'effector-forms'
import { FC, useState } from 'react'

import { ErrorMessage } from '#/shared/ui/error-message'
import { AngleIcon } from '#/shared/ui/icons'
import { Countries } from '#/widgets/form/types'

export const FormDropdown: FC<{
  className?: string
  icon: () => JSX.Element
  label: string
  options?: Countries[]
  field: ConnectedField<Countries>
  errorText: string
}> = ({ className, icon, label, options = [], field, errorText }) => {
  const [active, setActive] = useState(false)

  return (
    <div className='relative'>
      <div className={`w-[300px] z-0 relative flex ${className ?? ''}`}>
        <div className='absolute top-3 left-4'>{icon()}</div>
        <div
          className={`absolute top-3 right-4 ${
            active
              ? 'transform rotate-0 transition-transform duration-500 ease-in-out'
              : 'transition-transform rotate-180 duration-500 ease-in-out'
          }`}
        >
          <AngleIcon />
        </div>
        <button
          id='value'
          type='button'
          className={`w-full px-3 pt-3.5 h-[50px] pb-3 font-light text-white rounded bg-transparent border placeholder:text-[#E0E0E0] placeholder:font-light pl-12 focus:ring-0 transition duration-300 text-left ${
            active ? 'border-theme' : 'border-white'
          }`}
          onClick={() => setActive(prevState => !prevState)}
        >
          {field.value.country}
        </button>
        <label
          htmlFor='value'
          className={`absolute duration-300 top-3 font-light left-12 -z-1 origin-0 text-gray-500 ${
            field.value.country ? 'top-0.5 text-[10px] text-theme' : 'top-3 text-[#E0E0E0]'
          }`}
        >
          {label}
        </label>
      </div>
      {active && (
        <div className='absolute w-[300px] h-[200px] top-14 z-50 bg-white p-4 font-light overflow-y-scroll overflow-x-hidden'>
          {options?.map(option => (
            <button
              key={option.country}
              type='button'
              className='py-1 min-w-max block cursor-pointer z-50 w-full text-left'
              onClick={() => {
                field.onChange(option)
                setActive(false)
              }}
            >
              {option.country}
            </button>
          ))}
        </div>
      )}
      {!field?.isValid && <ErrorMessage>{errorText}</ErrorMessage>}
    </div>
  )
}
