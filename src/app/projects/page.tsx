import React from 'react'
import Link from 'next/link';
import { projects as rawProjects } from '@/lib/projects';

const page = () => {
  const projects = rawProjects.map((project) => {
    const date = new Date(project.date)
    console.log(date)
    const parsedDate = date.getDate() + " " + date.toLocaleString('default',{month: "long"}) + ", " + date.getFullYear() 
    return {...project, date: parsedDate}
  })
  return (
    <div className="pt-4 flex flex-col gap-1">
      {projects.map((project, index) => {
        return (
          <a
          target='_blank'
            href={project.link}
            key={project.link + project.name}
            className="w-full py-2 cursor-pointer flex sm:flex-row flex-col  justify-between group relative items-center"
          >
            <div className="absolute group-focus-visible:border-accent group-focus-visible:opacity-100 z-10 bg-border/10 w-[calc(100%+20px)] h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-sm border border-border opacity-0 group-hover:opacity-100 transition-all duration-0"></div>
            <div className="z-40 flex sm:flex-row flex-col  items-start justify-between size-full ">
              <div className='flex flex-col' >
                <div className="font-medium text-xl">{project.name}</div>
                <div className='font-medium text-foreground/80' >{project.description}</div>
                <div className='flex flex-wrap gap-1 mt-2' >
                  {project.stack.map((item,index) => <div  className='text-sm p-1 px-2 rounded-sm text-foreground/80 font-medium  bg-foreground/5' key={project.name + "stack" + index }>{item}</div>)}
                </div>
              </div>
              <div className="text-work-meta font-medium mt-4 sm:mt-0">{project.date}</div>
            </div>
          </a>
        );
      })}
    </div>
  )
}

export default page