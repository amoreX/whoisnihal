"use client"
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

const Control = ({children, active} : {children: ReactNode, active:boolean}) => {
    return <div className={`flex items-center  cursor-pointer py-4 justify-center ${active ? "text-accent" : "text-stone-400 hover:text-accent"}`}>{children}</div>
}

const Controls = () => {
    const pathname = usePathname()
    
  return (
    <div className='flex gap-6 sticky top-0 bg-background z-[100] h-fit items-stretch select-none  text-lg'>
        <Control active={pathname === "/"}>[h] Home</Control>
        <Control active={pathname?.startsWith("/project")}>[p] Projects</Control>
        <Control active={pathname?.startsWith("/blog")}>[b] Blog</Control>
        <div className='absolute bg-gradient-to-b from-background to-transparent pointer-events-none size-full top-full left-0 ' ></div>
    </div>
  )
}

export default Controls