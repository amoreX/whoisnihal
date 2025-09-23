"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";

const NameReveal = () => {
  return (
    <div className="text-5xl  tracking-tighter inline relative">
        

      {"ronish".split("").map((letter, index) => (
        <motion.div
          initial={{ opacity: 0, color: "rgb(255,0,0)" }}
          animate={{ opacity: 1, color: "rgb(255,255,255)" }}
          transition={{ delay: index * 0.02 + 0.1, duration: 0.5 }}
          className="z-20 inline"
          key={"name" + index}
        >
          {letter}
        </motion.div>
      ))}
    </div>
  );
};

export default NameReveal;
