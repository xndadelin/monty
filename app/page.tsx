"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Monty() {

  const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      window.location.href = `https://forms.fillout.com/t/8wd1jGykQhus?email=${encodeURIComponent(email)}`;
    };

  return (
    <div className="min-h-screen relative w-full pb-32 overflow-hidden">
      
      <header className="w-full flex justify-end pb-6 md:p-8 relative z-50">
        <Link href="/faq" className="comic-button bg-[#00f0ff] text-xl px-6 py-2 rotate-[3deg] no-underline inline-block text-black">
          THE FULL FAQ 
        </Link>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center mt-8">
        <div className="absolute top-10 left-0 lg:-left-10 text-[80px] md:text-[180px] -rotate-[15deg] z-0 opacity-30 select-none pointer-events-none hidden sm:block delay-150">🐍</div>
        <div className="absolute top-40 right-0 lg:-right-10 text-[80px] md:text-[180px] rotate-[15deg] z-0 opacity-30 select-none pointer-events-none hidden sm:block">🐍</div>
        
        <section className="relative text-center w-full mb-16 sm:mb-24 flex flex-col items-center justify-center">
          
          <div className="bg-[#fff] border-4 border-black px-6 py-2 font-black text-xl sm:text-2xl -rotate-2 mb-4 shadow-[4px_4px_0px_#000]">
            HACK CLUB PRESENTS
          </div>

          <h1 className="text-7xl sm:text-[150px] md:text-[220px] font-black text-[#ffde59] comic-title -rotate-3 leading-none z-10 relative">
            MONTY
          </h1>

          <div className="bg-[#ff003c] text-white comic-button px-6 sm:px-8 py-3 text-2xl sm:text-4xl mt-6 rotate-2 inline-block font-extrabold tracking-wide text-center uppercase">
            The Python YSWS Quest
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full mt-32 items-start">
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="w-full bg-white border-4 border-black p-6 shadow-[8px_8px_0_#000] -rotate-2 relative">
                <div className="tape"></div>
                <h3 className="text-4xl text-[#ff003c] text-left">What exactly is this?</h3>
                <p className="font-body text-left text-2xl font-bold mt-4 leading-relaxed tracking-wide">
                  Code open source Python libraries, publish them to PyPI, and earn Venom Coins <span className="inline-block bg-[#58ff21] text-black border-2 border-black rounded-full w-8 h-8 text-center leading-7 font-black mx-1 shadow-[2px_2px_0_#000] -rotate-6 relative -top-1">V</span>. That's the entire gig. You ship code, we ship loot!
                </p>
              </div>
              

              <div className="relative mt-12 w-full flex flex-col gap-6">
                <h2 className="text-5xl sm:text-6xl text-center lg:text-left bg-white border-4 border-black inline-block self-center lg:self-start px-8 py-2 rotate-1 shadow-[4px_4px_0_#000]">
                  HOW IT WORKS?
                </h2>
                  <div className="flex flex-col gap-6 w-full mt-4">
                    <div className="comic-panel bg-[#00f0ff] p-6 -rotate-[1deg] text-left w-full relative">
                    <div className="text-5xl font-black bg-white rounded-full w-14 h-14 flex items-center justify-center border-4 border-black shadow-[2px_2px_0_#000] absolute -top-4 -left-4">1</div>
                    <h3 className="text-4xl mt-2 ml-4">Code Sick Libraries</h3>
                    <p className="font-body text-2xl font-bold mt-2 leading-tight ml-4">Write awesome open-source Python libraries that the world can use. </p>
                  </div>
                  
                  <div className="comic-panel mt-4 bg-[#ff90e8] p-6 rotate-[1deg] w-full text-left relative ml-2 sm:ml-8">
                    <div className="text-5xl font-black bg-[#ffde59] rounded-full w-14 h-14 flex items-center justify-center border-4 border-black shadow-[2px_2px_0_#000] absolute -top-4 -left-4">2</div>
                    <h3 className="text-4xl mt-2 ml-4 text-black">Publish to PyPI</h3>
                    <p className="font-body text-2xl font-bold mt-2 leading-tight text-black ml-4">Ship it live globally so anyone in the world can run <code className="bg-black text-[#58ff21] px-2 py-1 mx-1 skew-x-12 inline-block">pip install </code> on your project.</p>
                  </div>

                  <div className="comic-panel mt-4 bg-[#58ff21] p-6 -rotate-[2deg] text-left w-full relative">
                    <div className="text-5xl font-black bg-white rounded-full w-14 h-14 flex items-center justify-center border-4 border-black shadow-[2px_2px_0_#000] absolute -top-4 -left-4">3</div>
                    <h3 className="text-5xl mt-2 ml-4">Get Venom Coins & Loot</h3>
                    <p className="font-body text-2xl font-bold mt-2 leading-tight ml-4 w-full sm:w-[80%]">We reward you with Venom Coins <span className="inline-block bg-[#58ff21] text-black border-2 border-black rounded-full w-8 h-8 text-center leading-7 font-black mx-1 shadow-[2px_2px_0_#000] rotate-12 relative -top-1">V</span> that you can burn in our shop for a lot of rewards!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col mt-10 lg:mt-0 sticky top-10 z-20">
              <div className="bg-[#fff] border-4 border-black p-8 shadow-[12px_12px_0_#000] rotate-1 mx-auto max-w-[500px] relative">
                <div className="flex flex-col items-center text-center">
                  <div className="tape"></div>
                  <h2 className="text-5xl text-[#ff003c] mb-2 w-full uppercase tracking-wider font-black">
                    START HACKING!
                  </h2>
                  <h3 className="text-2xl text-[#111] font-bold mt-2 font-body font-black uppercase tracking-wider border-b-4 border-black border-dashed pb-4 w-full">
                    Sign Up for the quest!
                  </h3>
                  <p className="mt-4 text-xl font-bold font-body leading-relaxed text-black">
                    Enter your email to RSVP!
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 w-full flex flex-col gap-4">
                    <div className="flex flex-col text-left font-body">
                      <label className="font-extrabold text-2xl mb-2 text-black">
                        YOUR EMAIL:
                      </label>
                      <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="hacker@hackclub.com" 
                        required 
                        className="w-full px-4 py-4 text-2xl border-4 text-black border-black bg-[#fceea7] focus:bg-white focus:outline-none shadow-[inset_4px_4px_0_rgba(0,0,0,0.1)] font-bold placeholder-black/50" 
                      />
                    </div>
                    <button type="submit" className="comic-button bg-[#58ff21] py-5 text-4xl mt-4 text-black border-t-8 border-l-8 border-b-8 shadow-[8px_8px_0_#000] hover:bg-[#4de61c]">
                      JOIN NOW!
                    </button>
                  </form> 
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>


    </div>
  );
}
