"use client";

import Link from 'next/link';

interface RuleItem {
  title: string;
  description: string;
}

const rulesData: RuleItem[] = [
  {
    title: "No BS Submissions",
    description: "Your project has to be a real, functioning project. No \"Hello World\" scripts just to farm coins. We review every single submission before handing out venom!"
  },
  {
    title: "18 And Under Only",
    description: "This quest is exclusively for teenagers (18 years old or younger). If you're older than 18, you'll have to sit this one out!"
  },
  {
    title: "Open Source Only",
    description: "Your code must be publicly available on GitHub and the package must be officially published on PyPI. It needs an open-source license so anyone can use it."
  },
  {
    title: "Original Work",
    description: "You must write the code yourself. Basic AI help (like GitHub Copilot for boilerplate or debugging) is fine, but you cannot copy-paste entire projects or let AI write the whole logic."
  },
  {
    title: "Installable via pip",
    description: "The main goal is that anyone in the world should be able to run `pip install your-package` and have it work seamlessly on their machine. Documentation and a good README are highly encouraged!"
  },
  {
    title: "Real Utility",
    description: "Projects should solve a real problem or provide some fun/useful functionality. Whether it's a wrapper for a cool API, a math tool, a game, or a terminal visualizer, make it something you'd actually want to use."
  }
];

export default function Rules() {
  const stickyColors = ["bg-[#ffde59]", "bg-[#00f0ff]", "bg-[#ff90e8]", "bg-[#58ff21]", "bg-[#fff]"];

  return (
    <div className="min-h-screen relative w-full pb-32">
      <header className="w-full flex justify-start p-6 md:p-8 relative z-50">
        <Link href="/" className="comic-button bg-[#ffde59] text-xl px-6 py-2 -rotate-[2deg] no-underline inline-block">
          ← BACK HOME
        </Link>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        <section className="relative text-center w-full mt-4 mb-20 flex flex-col items-center justify-center">
          <div className="bg-[#fff] border-4 border-black px-6 py-2 font-black text-xl sm:text-2xl -rotate-2 mb-4 shadow-[4px_4px_0px_#000]">
            NO CHEATING ALLOWED
          </div>
          
          <h1 className="text-7xl sm:text-[120px] font-black text-[#ff003c] comic-title rotate-1 leading-none z-10 relative">
            THE RULES!
          </h1>
        </section>

        <section className="w-full mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-start">
            {rulesData.map((item, index) => {
              const bg = stickyColors[index % stickyColors.length];
              const rots = ["rotate-2", "-rotate-[3deg]", "rotate-1", "-rotate-2", "rotate-3"];
              const rot = rots[index % rots.length];
              return (
                <div key={index} className={`sticky-note ${bg} ${rot} w-full`}>
                  <div className="pin"></div>
                  <h3 className="text-3xl uppercase leading-tight mb-3 border-b-4 border-black/20 pb-2">{item.title}</h3>
                  <p className="text-xl font-body font-bold leading-relaxed whitespace-pre-wrap">{item.description}</p>
                </div>
              )
            })}
          </div>
        </section>

      </main>
    </div>
  );
}
