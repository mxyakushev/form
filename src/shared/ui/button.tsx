import { FC, ReactNode } from 'react'

export const Button: FC<{ children: ReactNode; onClick: () => void }> = ({ children, onClick }) => {
  return (
    <button
      type='button'
      className='bg-theme text-black text-[19px] w-full sm:w-auto font-medium py-3 px-10 rounded border border-theme hover:bg-transparent hover:text-theme transition ease-in-out duration-300'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
