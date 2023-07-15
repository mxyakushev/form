import { FC, ReactNode } from 'react'

export const ErrorMessage: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='text-[12px] absolute top-[52px] text-error w-full font-medium text-right'>{children}</div>
}
