import { classNames } from '@/utils/classNames'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { sidebarMenuItems } from './sidebarNavLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const MobileSidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const pathname = usePathname();

    const onToggleSidebar = () => {
        setSidebarOpen((status) => {
            if (status) {
                document.body.style.overflow = "auto"
            } else {
                document.body.style.overflow = "hidden"
            }
            return !status
        })
    }

    const onItemClick = () => {
        if (sidebarOpen){
            onToggleSidebar()
        }
    }

  return (
    <div className={classNames('flex justify-center', 'md:hidden')}>
        <button type='button'
        className={classNames(
            "h-9 w-9 rounded-lg transition-colors", 'focus:ring-4 focus:ring-neutral-300 focus:dark:ring-neutral-600'
        )}
        aria-label='Toggle Menu'
        onClick={onToggleSidebar}>
            {sidebarOpen ? <XMarkIcon className='h-6 w-6'/> : <Bars2Icon className='h-6 w-6' />}
        </button>
        <div className={`fixed top-20 left-0 z-10 min-h-screen w-full transform bg-light dark:bg-dark duration-300 ease-in-out ${
            sidebarOpen ? '-translate-x-0' : '-translate-x-full'
        }`}>
            <div
            aria-label='toggle modal'
            className={classNames(
                'fixed h-full w-full cursor-auto', 'focus:outline-none'
            )}
            onClick={onToggleSidebar}>
                <div className='fixed mt-8 w-full h-full'>
                <ul>
                    {sidebarMenuItems.map((item, index) => (
                      <li key={index} onClick={onItemClick}>
                        {"title" in item ? (
                          <Link
                            href={item.href}
                            passHref
                            onClick={onToggleSidebar}
                            className={
                              pathname === item.href
                                ? "text-amber-400"
                                : "text-default-500"
                            }
                          >
                            {item.title}
                          </Link>
                        ) : (
                          <div>
                            <p className="text-default-500">{item.type}</p>
                            <ul>
                              {item.menu.map((subItem, subIndex) => (
                                <li key={subIndex} onClick={onItemClick}>
                                  <Link
                                    href={subItem.href}
                                    passHref
                                    className={
                                      pathname === subItem.href
                                        ? "text-amber-400"
                                        : "text-default-500"
                                    }
                                  >
                                    {subItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

            </div>
        </div>

    </div>
  )
}
