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

    </div>
  );
}
