import React, { FC } from 'react'

interface BtnProps {
    bgColor: string
    textColor: string
    leftIcon? : React.ReactNode
    children? : React.ReactNode
    rightIcon? : React.ReactNode
    onClick: () => void
}

export const Button: FC<BtnProps> = ({
    bgColor, textColor, leftIcon, children, rightIcon, onClick
}) => {
  return (
    <button
    onClick={onClick}
    className={`${bgColor} ${textColor} flex py-2 px-4 justify-center items-center gap-3 rounded-lg shadow-md w-max text-base md:text-lg font-medium -tracking-[0.014em]`}>
        {leftIcon}
        {children}
        {rightIcon}
    </button>
  )
}
