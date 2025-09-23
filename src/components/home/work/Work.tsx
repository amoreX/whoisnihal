import { ArrowCircleUpRightIcon, ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

const Work = ({company, title, date, description} : {
    company: string,
    title: string,
    date: string,
    description: string
}) => {
  return (
    <div className='w-full relative flex flex-col group cursor-pointer hover:bg-stone-900 '>
        <div className='absolute group-hover:opacity-100 opacity-0 top-0 right-0 size-[32px] bg-stone-700 flex items-center justify-center' >
            <ArrowUpRightIcon size={20}/>
        </div>
        <div className='text-xl text-white '>{company}</div>
        <div className='text-stone-400 font-medium text-sm   flex gap-2 items-center' >{title} <div className='w-[1px] h-[10px] bg-stone-500 translate-y-[2px]' ></div> {date}</div>
        <div className='text-stone-300 mt-1' >{description}</div>
    </div>
  )
}

export default Work