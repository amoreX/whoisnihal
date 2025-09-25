import React, { ReactNode } from 'react'

const Control = ({children} : {children: ReactNode}) => {
    return <div className='flex items-center hover:text-accent cursor-pointer py-4 justify-center'>{children}</div>
}

const Controls = () => {
  return (
    <div className='flex gap-6 sticky top-0 bg-background z-[100] h-fit items-stretch select-none  text-lg'>
        <Control>[h] Home</Control>
        <Control>[p] Projects</Control>
        <Control>[b] Blog</Control>
        <div className='absolute bg-gradient-to-b from-background to-transparent pointer-events-none size-full top-full left-0 ' ></div>
    </div>
  )
}

export default Controls