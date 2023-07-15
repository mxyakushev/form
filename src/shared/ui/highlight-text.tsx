import React, { FC, ReactNode } from 'react'

export const HighlightText: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
  return <span className={`text-theme cursor-pointer underline underline-offset-4 ${className ?? ''}`}>{children}</span>
}
