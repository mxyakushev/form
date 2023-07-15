import { ConnectedField } from 'effector-forms'
import { AnimatePresence, motion } from 'framer-motion'
import { FC, useEffect, useRef, useState } from 'react'

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
  filterDropdown: (val: string) => void
}> = ({ className, icon, label, options = [], field, errorText, filterDropdown }) => {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setActive(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div ref={ref} className={`relative w-full ${className ?? ''}`}>
      <div className='z-0 relative flex'>
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
        <input
          type='text'
          id='value'
          value={field.value.country}
          className='w-full px-3 pt-3.5 h-[50px] pb-3 font-light text-white rounded border bg-transparent placeholder:text-[#E0E0E0] placeholder:font-light pl-12 focus:ring-0 transition duration-300 text-left border-white focus:border-theme focus:bg-blackTransparent hover:border-theme'
          onClick={() => setActive(prevState => !prevState)}
          onChange={e => {
            field.onChange({ country: e.target.value, code: '' })
            filterDropdown(e.target.value)
          }}
        />
        <label
          htmlFor='value'
          className={`absolute w-full duration-300 top-3 font-light left-12 -z-1 origin-0 text-gray-500 ${
            field.value.country ? 'top-0.5 text-[10px] text-theme' : 'top-3 text-[#E0E0E0]'
          }`}
        >
          {label}
        </label>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3
            }}
            className='absolute w-full rounded max-h-[200px] top-14 z-50 bg-white px-4 py-2 font-light overflow-y-scroll overflow-x-hidden'
          >
            {options.length ? (
              options?.map(option => (
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
              ))
            ) : (
              <div>No such countries</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {!field?.isValid && <ErrorMessage>{errorText}</ErrorMessage>}
    </div>
  )
}
