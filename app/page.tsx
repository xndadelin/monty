"use client";

import { useState } from "react";

export default function Monty() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `https://forms.fillout.com/t/8wd1jGykQhus?email=${encodeURIComponent(email)}`
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#2b5876] to-[#4e8098]">
      <a 
          href="/faq"
          className="fixed top-[30px] right-[30px] z-[100]
                     px-7 py-[14px] text-lg font-bold
                     bg-gradient-to-br from-[#4A90E2] to-[#5BA3F5]
                     border-[3px] border-[#4A90E2] rounded-[15px]
                     text-white no-underline cursor-pointer
                     transition-all duration-300
                     shadow-[0_5px_25px_rgba(74,144,226,0.4)]
                     [text-shadow:0_2px_4px_rgba(0,0,0,0.2)]
                     hover:bg-gradient-to-br hover:from-[#5BA3F5] hover:to-[#4A90E2] hover:border-[#FFD43B] 
                     hover:shadow-[0_8px_35px_rgba(74,144,226,0.6),0_0_20px_rgba(255,212,59,0.3)] hover:-translate-y-[3px] hover:scale-105
                     active:-translate-y-[1px] active:scale-[1.02]"
          style={{ fontFamily: "'Fredoka One', cursive" }}
        >
          FAQ
        </a>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,212,59,0.1)_0%,transparent_50%)]" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_80%_50%,rgba(74,144,226,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="relative text-center">
          <div className="absolute -top-20 -left-24 text-[120px] opacity-15 pointer-events-none -rotate-[15deg]">
            🐍
          </div>
          <div className="absolute -bottom-20 -right-24 text-[120px] opacity-15 pointer-events-none rotate-[15deg]">
            🐍
          </div>

          <div className="relative inline-block">
            <h1 
              className="relative inline-block text-[clamp(80px,20vw,200px)] font-bold tracking-[0.05em] animate-float
                         bg-gradient-to-br from-[#4A90E2] via-[#FFD43B] to-[#4A90E2] bg-[length:200%_200%]
                         bg-clip-text text-transparent animate-gradient-shift
                         drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              style={{ 
                fontFamily: "'Fredoka One', cursive",
                textShadow: '0 0 40px rgba(255, 212, 59, 0.3), 0 0 80px rgba(74, 144, 226, 0.2)'
              }}
            >
              <span className="absolute -left-[0.6em] text-[#FFD43B] opacity-80 animate-blink blur-[20px] font-extrabold">{'>'}</span>
              Monty
              <span className="absolute -right-[0.6em] text-[#4A90E2] opacity-80 animate-blink-delayed blur-[20px] font-extrabold">{'<'}</span>
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="mt-20 flex flex-row items-center justify-center gap-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="RSVP! Enter your email..."
              className="w-[350px] max-w-[60vw] px-5 py-[10px] text-base
                         bg-white/10 backdrop-blur-[10px]
                         border-[3px] border-[rgba(255,212,59,0.5)] border-r-0 rounded-l-[15px]
                         text-white placeholder:text-white/60 placeholder:font-bold
                         font-['Courier_New',monospace]
                         outline-none transition-all duration-300
                         focus:bg-white/15 focus:border-[#FFD43B] focus:shadow-[0_0_30px_rgba(255,212,59,0.4)]"
              required
            />
            <button
              type="submit"
              className="px-7 py-[10px] text-base font-bold
                         bg-[#FFD43B] border-[3px] border-[#FFD43B] border-l-0 rounded-r-[15px]
                         text-[#1e3a5f] cursor-pointer
                         font-['Courier_New',monospace]
                         transition-all duration-300
                         shadow-[0_5px_20px_rgba(0,0,0,0.3)]
                         hover:bg-[#ffd000] hover:border-[#ffd000] hover:shadow-[0_5px_30px_rgba(255,212,59,0.6)]
                         active:scale-[0.98]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
  );
}
