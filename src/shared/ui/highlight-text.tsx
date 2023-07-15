import React, { FC, ReactNode } from 'react'

export const HighlightText: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
  return <span className={`text-theme cursor-pointer text-underline-hover ${className ?? ''}`}>{children}</span>
}
