'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Monty?",
    answer: "Monty is a YSWS (You Ship, We Ship) Hack Club program based on Python libraries. In a nutshell, you code open-source Python libraries, publish them to PyPI, get venom coins, and use those coins to buy cool stuff from our shop!"
  },
  {
    question: "Who can join Monty?",
    answer: "Monty is open to any Hack Clubber interested in Python programming, no matter their skill level, background, or location. We welcome beginners and experienced developers alike!"
  },
  {
    question: "What is open-source?",
    answer: "Open-source software is software with source code that anyone can inspect, modify, and enhance. This means that the code is publicly available for anyone to use and contribute to."
  },
  {
    question: "What is PyPI?",
    answer: "PyPI, or the Python Package Index, is the official repository for Python packages. It's where developers can publish and share their Python libraries/modules."
  },
  {
    question: "What are venom coins?",
    answer: "Venom coins are a virtual currency used within the Monty YSWS. You earn venom coins by publishing Python libraries to PyPI, and you can spend them in our shop to get cool rewards!"
  },
  {
    question: 'What items are available in the Monty shop?',
    answer: 'TBD - stay tuned for updates on the exciting items you can get with your venom coins!'
  },
  {
    question: "How can I get help if I have questions?",
    answer: "If you have any questions or need assistance, feel free to reach out in #monty-help on the Slack!"
  },
  {
    question: "I do not know Python. Can I still join?",
    answer: "Of course! Monty is designed to be inclusive for everyone, no matter their skill level. We encourage beginners to join and learn along the way. There are plenty of resources and a supportive community to help you get started with Python."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-[#1e3a5f] via-[#2b5876] to-[#4e8098] overflow-x-hidden relative py-10 px-5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,212,59,0.1)_0%,transparent_50%)]" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_80%_50%,rgba(74,144,226,0.1)_0%,transparent_50%)]" />
        </div>

        <Link
          href="/"
          className="fixed top-[30px] left-[30px] z-[100]
                     px-7 py-[14px] text-lg font-bold
                     bg-gradient-to-br from-[#FFD43B] to-[#ffd000]
                     border-[3px] border-[#FFD43B] rounded-[15px]
                     text-[#1e3a5f] no-underline cursor-pointer
                     transition-all duration-300
                     shadow-[0_5px_25px_rgba(255,212,59,0.4)]
                     [text-shadow:0_2px_4px_rgba(0,0,0,0.1)]
                     hover:bg-gradient-to-br hover:from-[#ffd000] hover:to-[#FFD43B] hover:border-[#4A90E2]
                     hover:shadow-[0_8px_35px_rgba(255,212,59,0.6),0_0_20px_rgba(74,144,226,0.3)] hover:-translate-y-[3px] hover:scale-105
                     active:-translate-y-[1px] active:scale-[1.02]
                     max-sm:top-5 max-sm:left-5 max-sm:px-5 max-sm:py-3 max-sm:text-base"
          style={{ fontFamily: "'Fredoka One', cursive" }}
        >
          ← Back
        </Link>

        <div className="fixed top-[10%] left-[5%] text-[80px] opacity-10 pointer-events-none z-0">🐍</div>
        <div className="fixed top-[60%] right-[8%] text-[80px] opacity-10 pointer-events-none z-0">🐍</div>
        <div className="fixed bottom-[15%] left-[10%] text-[80px] opacity-10 pointer-events-none z-0">🐍</div>

        <div className="max-w-[900px] mx-auto relative z-[1]">
          <h1
            className="text-center text-[clamp(50px,10vw,80px)] font-bold
                       bg-gradient-to-br from-[#4A90E2] via-[#FFD43B] to-[#4A90E2] bg-[length:200%_200%]
                       bg-clip-text text-transparent animate-gradient-shift
                       mb-5 drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Frequently asked questions
          </h1>

          <p className="text-center text-white/80 text-lg mb-[60px] font-['Inter',sans-serif] font-extrabold">
            Everything you need to know about Monty!
          </p>

          <div className="space-y-5">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`bg-white/[0.08] backdrop-blur-[10px] border-2 rounded-[20px] overflow-hidden
                           transition-all duration-300
                           ${activeIndex === index 
                             ? 'border-[rgba(255,212,59,0.6)] shadow-[0_5px_30px_rgba(255,212,59,0.2)]' 
                             : 'border-[rgba(255,212,59,0.3)]'}
                           hover:border-[rgba(255,212,59,0.6)] hover:shadow-[0_5px_30px_rgba(255,212,59,0.2)] hover:-translate-y-[2px]`}
              >
                <div
                  onClick={() => toggleFaq(index)}
                  className="py-[25px] px-[30px] cursor-pointer flex justify-between items-center
                             font-['Inter',sans-serif] text-xl font-semibold text-white
                             transition-all duration-300
                             hover:bg-white/5
                             max-sm:py-5 max-sm:px-5 max-sm:text-lg"
                >
                  <span>{item.question}</span>
                  <span
                    className={`text-2xl text-[#FFD43B] transition-transform duration-300 flex-shrink-0 ml-4
                               ${activeIndex === index ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-400
                             ${activeIndex === index ? 'max-h-[500px] pb-[25px] px-[30px]' : 'max-h-0'}
                             max-sm:px-5 max-sm:pb-5`}
                >
                  <p className="font-['Inter',sans-serif] text-base leading-[1.7] text-white/85" dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}