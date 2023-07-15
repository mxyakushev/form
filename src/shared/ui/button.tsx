import { ButtonHTMLAttributes, FC } from 'react'

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button
      type='button'
      className='bg-theme text-black text-[19px] w-full sm:w-auto font-medium py-3 px-10 rounded border border-theme hover:bg-transparent hover:text-theme transition ease-in-out duration-300'
      {...props}
    >
      {children}
    </button>
  )
}
