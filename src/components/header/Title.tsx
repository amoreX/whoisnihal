"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const Title = () => {
  const pathname = usePathname()
  const [key, setKey] = useState<number>(0);
  const [title, setTitle] = useState<string>("ronish rohan");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitle("ronish rohan");
      setKey((prev) => prev + 1);
    }, 500);
    return () => clearTimeout(timeout);
  }, [])
  useEffect(() => {
    setKey((prev) => prev + 1);
    if (pathname === "/") {
      setTitle("ronish rohan");
    } else if (pathname?.startsWith("/project")) {
      setTitle("projects");
    } else {
      setTitle("ronish rohan");
    }
  }, [pathname])
  return (
    <div className="text-[56px] mt-[150px] select-none h-[60px] leading-[60px]  overflow-hidden tracking-tighter flex relative">
      
        <div className="opacity-0">{title}</div>
        <div className="absolute left-0 w-full top-0 flex">
          <AnimatePresence  initial={false} mode="popLayout">
            {title.split("").map((letter, index) => (
            <motion.div
              initial={{ y: "-100%", scaleY: 0.2, opacity: 0 }}
              animate={{ y: "0%", scaleY: 1, opacity: 1 }}
              exit={{ y: "100%", scaleY: 0.2, opacity: 0}}
              
              transition={{
                delay: index * 0.01,
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
