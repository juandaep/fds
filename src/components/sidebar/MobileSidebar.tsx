import React, { FC, useEffect } from 'react'

type SidebarProps = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export const MobileSidebar:FC<SidebarProps> = ({isOpen, onClose, children}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isOpen, onClose])
  return (
    <>
    {isOpen && (
        <div className='fixed inset-0 top-24 flex min-h-screen items-center justify-center z-40'>
            <div className='fixed w-full h-full bg-white'>
                {children}
            </div>
        </div>
    )}
    </>
  )
}
