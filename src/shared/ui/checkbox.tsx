import { ConnectedField } from 'effector-forms'
import { FC, ReactNode } from 'react'

import { CheckIcon } from '#/shared/ui/icons'

export const Checkbox: FC<{
  id: string
  name: string
  label: ReactNode
  field: ConnectedField<boolean>
  className?: string
}> = ({ label, id, name, field, className }) => {
  return (
    <label htmlFor={id} className={`flex items-center cursor-pointer py-3 group ${className ?? ''}`}>
      <div className='relative'>
        <input
          id={id}
          type='checkbox'
          className='sr-only'
          checked={field.value}
          name={name}
          onChange={() => field.onChange(!field.value)}
        />
        <div
          className={`w-[20px] h-[20px] border-2 border-theme rounded transition duration-300 flex justify-center items-center ${
            field.value
              ? 'bg-theme'
              : field.errors.length
              ? 'bg-error border-error group-hover:bg-error'
              : 'bg-transparent group-hover:bg-theme'
          }`}
        >
          <div className={`transition duration-300 ${field.value ? 'opacity-100' : 'opacity-0'}`}>
            <CheckIcon />
          </div>
        </div>
      </div>
      <div className='ml-2 pt-0.5'>{label}</div>
    </label>
  )
}
