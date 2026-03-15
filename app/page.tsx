import Image from "next/image";
import Link from "next/link";

export default function Monty() {
  return (
    <div className="min-h-screen relative w-full pb-32 overflow-hidden">
      
      <header className="w-full flex justify-end pb-6 md:p-8 relative z-50">
        <Link href="/faq" className="comic-button bg-[#00f0ff] text-xl px-6 py-2 rotate-[3deg] no-underline inline-block text-black">
          THE FULL FAQ 
        </Link>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center mt-8">
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
          
        </section>
      </main>


    </div>
  );
}
