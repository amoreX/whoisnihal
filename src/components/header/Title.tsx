"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const Title = () => {
  const pathname = usePathname()
  const [key, setKey] = useState<number>(0);
  const [title, setTitle] = useState<string>("ronish rohan");
  
  useEffect(() => {
    setKey((prev) => prev + 1);
    if (pathname === "/") {
      setTitle("ronish rohan");
    } else if (pathname?.startsWith("/project")) {
      setTitle("projects");
    }
    else if (pathname?.startsWith("/blog")) {
      setTitle("blogs");
    }
     else {
      setTitle("404");
    }
  }, [pathname])
  return (
    <div className="text-[56px] mt-[100px] select-none h-[64px] leading-[56px]  overflow-hidden tracking-tighter flex relative">
        
        <div className="opacity-0">{title}</div>
        <div className="absolute left-0 w-full top-0 flex">
          <AnimatePresence  initial={false} mode="popLayout">
            {title.split("").map((letter, index) => (
            <motion.div
              initial={{ y: "100%", scaleY: 0.2, opacity: 1 }}
              animate={{ y: "0%", scaleY: 1, opacity: 1 }}
              exit={{ y: "-100%", scaleY: 0.2, opacity: 1}}
              
              transition={{
                delay: index * 0.005,
                type: "tween",
                ease: "easeInOut",
              }}
              className="flex"
              key={"title" + index + key}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
      
    </div>
  );
};

export default Title;
