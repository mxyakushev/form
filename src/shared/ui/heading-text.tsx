import { FC, ReactNode } from 'react'

export const HeadingText: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={`text-white text-[24px] font-medium text-center ${className ?? ''}`}>{children}</div>
}
