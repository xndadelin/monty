"use client";

import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Monty?",
    answer: "Monty is a YSWS Hack Club program based on Python packages. You code open-source Python projects, publish them to PyPI, get venom coins, and use them in the shop for cool loot."
  },
  {
    question: "Who can join Monty?",
    answer: "Any Hack Clubber interested in Python programming, no matter their skill level, background, or location. We welcome beginners and experienced developers alike!"
  },
  {
    question: "What is open-source?",
    answer: "Open-source software is software with source code that anyone can inspect, modify, and enhance! It means the code is publicly available."
  },
  {
    question: "What is PyPI?",
    answer: "PyPI (Python Package Index) is the official repository for Python packages. It's where developers publish their modules and tools."
  },
  {
    question: "What are venom coins?",
    answer: "Venom coins are a virtual currency used in Monty. You earn them by publishing Python packages, and spend them in our shop!"
  },
  {
    question: 'How many coins do I earn per hour?',
    answer: 'You earn 1 Venom Coin for every hour of work you put into your projects.'
  },
  {
    question: 'Is AI allowed?',
    answer: 'Yes, standard AI tools (like Copilot or ChatGPT) are allowed for assistance, but fully autonomous coding agents are strictly prohibited. You must be the one actively writing and understanding the code!'
  },
  {
    question: "How can I get help?",
    answer: "If you have questions, feel free to reach out in #monty-help on the Hack Club Slack!"
  },
  {
    question: "I do not know Python. Can I join?",
    answer: "Of course! Monty is designed to be inclusive. We encourage beginners to join and learn along the way."
  },
  {
    question: "How are hours tracked and verified?",
    answer: "We use Hackatime (https://hackatime.hackclub.com) to automatically track your coding hours! However, we also review your GitHub commits, PRs, and the general scope of your project when you submit it. Make sure you are pushing code regularly so we can see your progress!"
  },
  {
    question: "Can I work on a team?",
    answer: "Yes! You can collaborate with other Hack Clubbers. When your team submits the project, Venom Coins will be allocated to each member based on how much each of you actively coded."
  },
  {
    question: "How do we actually get the loot?",
    answer: "Prizes are usually fulfilled using Grant Cards from HCB (https://hcb.hackclub.com). You'll receive a transparent, one-time use card loaded with the funds needed to buy your exact loot!"
  }
];

export default function FAQ() {
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
          <div className="bg-[#fff] border-4 border-black px-6 py-2 font-black text-xl sm:text-2xl rotate-2 mb-4 shadow-[4px_4px_0px_#000]">
            YOU ASKED...
          </div>
          
          <h1 className="text-7xl sm:text-[120px] font-black text-[#58ff21] comic-title -rotate-1 leading-none z-10 relative">
            THE HUGE FAQ!
          </h1>
        </section>

        <section className="w-full mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-start">
            {faqData.map((item, index) => {
              const bg = stickyColors[index % stickyColors.length];
              const rots = ["rotate-1", "-rotate-2", "rotate-3", "-rotate-1", "rotate-2"];
              const rot = rots[index % rots.length];
              return (
                <div key={index} className={`sticky-note ${bg} ${rot} w-full`}>
                  <div className="pin"></div>
                  <h3 className="text-3xl uppercase leading-tight mb-3 border-b-4 border-black/20 pb-2">{item.question}</h3>
                  <p className="text-xl font-body font-bold leading-relaxed whitespace-pre-wrap">{item.answer}</p>
                </div>
              )
            })}
          </div>
        </section>

      </main>
    </div>
  );
}
