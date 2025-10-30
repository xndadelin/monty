'use client';
import ShaderAnimation from "@/app/components/ShaderAnimation"
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-blue-700">
      <ShaderAnimation/>
      <motion.span initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1, transition: { duration: 2.5 } }} className="absolute pointer-events-none z-10 text-center text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white">
        Monty - a Python YSWS
      </motion.span>
    </div>
  )
}