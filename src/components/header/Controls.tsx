"use client"
import { usePathname, useRouter } from 'next/navigation'
import React, { ReactNode, useEffect } from 'react'

const Control = ({children, active, to} : {children: ReactNode, active:boolean, to:string}) => {
  const router = useRouter()
    return <button onClick={() => router.push(to)}  className={`flex items-center  cursor-pointer justify-center ${active ? "text-accent" : "text-stone-400 hover:text-accent"}`}>{children}</button>
}

const Controls = () => {
    const pathname = usePathname()
    const router = useRouter();
    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === "h") {
          router.push("/");
        } else if (e.key === "p") {
          router.push("/projects");
        } else if (e.key === "b") {
          router.push("/blog");
        }
      };
  
      document.addEventListener("keydown", handleKeyPress);
  
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    })
    
  return (
    <div className='flex gap-6 sticky top-0 bg-background z-[100] h-fit items-stretch select-none py-4  text-lg'>
        <Control to="/" active={pathname === "/"}>[h] Home</Control>
        <Control to="/projects" active={pathname?.startsWith("/projects")}>[p] Projects</Control>
        <Control to="/blog" active={pathname?.startsWith("/blog")}>[b] Blog</Control>
        <div className='absolute bg-gradient-to-b from-background to-transparent pointer-events-none size-full top-full left-0 ' ></div>
    </div>
  )
}

export default Controls