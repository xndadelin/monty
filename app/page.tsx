"use client";

import Link from "next/link";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Monty?",
    answer:
      "Monty is a YSWS Hack Club program based on Python packages. You code open-source Python projects, publish them to PyPI, get venom coins, and use them in the shop for cool loot.",
  },
  {
    question: "What are venom coins?",
    answer:
      "Venom coins are a virtual currency used in Monty. You earn them by publishing Python packages, and spend them in our shop!",
  },
  {
    question: "How many coins do I earn per hour?",
    answer:
      "You earn 1 Venom Coin for every hour of work you put into your projects.",
  },
  {
    question: "What is Monty?",
    answer:
      "Monty is a YSWS Hack Club program based on Python libraries. You code open-source Python libraries, publish them to PyPI, get venom coins, and use them in the shop for cool loot.",
  },
  {
    question: "What are venom coins?",
    answer:
      "Venom coins are a virtual currency used in Monty. You earn them by publishing Python libraries, and spend them in our shop!",
  },
  {
    question: "How many coins do I earn per hour?",
    answer:
      "You earn 1 Venom Coin for every hour of work you put into your libraries.",
  },
  {
    question: "Is AI allowed?",
    answer:
      "Yes, standard AI tools (like Copilot or ChatGPT) are allowed for assistance, but fully autonomous coding agents are strictly prohibited. You must be the one actively writing and understanding the code!",
  },
  {
    question: "Who can join Monty?",
    answer:
      "Any Hack Clubber interested in Python programming, no matter their skill level, background, or location. We welcome beginners and experienced developers alike!",
  },
  {
    question: "I do not know Python. Can I join?",
    answer:
      "Of course! Monty is designed to be inclusive. We encourage beginners to join and learn along the way.",
  },
];

const row1Loot = [
  {
    name: "Logic Analyzer",
    cost: "~3 hours",
    img: "https://3.imimg.com/data3/NV/RR/IMFCP-3506654/https-sites-google-com-site-leapleaptronixen-_-rsrc-1308711400434-logi-33233213-500x500.png",
  },
  {
    name: "Pico-8 License",
    cost: "~3 hours",
    img: "https://www.lexaloffle.com/media/71079/Screenshot%202024-07-17%20at%2014-33-56%20pico8%20console%20-%20%D0%9F%D0%BE%D0%B8%D1%81%D0%BA%20%D0%B2%20Google.png",
  },
  {
    name: "Rubber Duck",
    cost: "~3 hours",
    img: "https://pngimg.com/d/rubber_duck_PNG54.png",
  },
  {
    name: "E-Fidget",
    cost: "~4 hours",
    img: "https://pngimg.com/d/spinner_PNG99782.png",
  },
  {
    name: "$50 DigiKey",
    cost: "~10 hours",
    img: "https://sc-b.digikeyassets.com/-/media/Images/Header/logo_dk.png?la=en&ts=7d18e1bb-6788-47b0-9b20-39b6f0de2287",
  },
  {
    name: "Hydroneer",
    cost: "~3 hours",
    img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1106840/capsule_616x353.jpg?t=1770117457",
  },
  {
    name: "256GB USB",
    cost: "~5 hours",
    img: "https://s13emagst.akamaized.net/products/2723/2722909/images/res_c5c8e3e7dd0935d9cc210d3cf458e14c.png",
  },
];

const row2Loot = [
  {
    name: "Pinecil",
    cost: "~5 hours",
    img: "https://pine64.org/documentation/images/Pinecilv2-1.jpg",
  },
  {
    name: "shapez 2",
    cost: "~5 hours",
    img: "https://upload.wikimedia.org/wikipedia/en/4/48/Shapez_2_cover.jpg",
  },
  {
    name: "TryHackMe (1y)",
    cost: "~24 hours",
    img: "https://s3-eu-west-1.amazonaws.com/tpd/logos/5f00b0f031ec4d0001f1344e/0x0.png",
  },
  {
    name: "GitHub Notebook",
    cost: "~5 hours",
    img: "https://thegithubshop.com/cdn/shop/files/1557110_InvertocatRecycledSoftBoundNotebook.jpg?v=1752762711&width=1200",
  },
  {
    name: "1cm Tungsten",
    cost: "~8 hours",
    img: "https://i.ebayimg.com/images/g/o0kAAOSw0iRf05yV/s-l1200.jpg",
  },
  {
    name: "Keychron",
    cost: "~16 hours",
    img: "https://www.keychron.com/cdn/shop/files/K8_a67d1f32-6830-4006-9e9e-848407bebf50.png?v=15893221184171017227",
  },
  {
    name: "Satisfactory",
    cost: "~6 hours",
    img: "https://cdn1.epicgames.com/offer/crab/EGS_Satisfactory_CoffeeStainStudios_S2_1200x1600-8a389a525cee6928c427b4a99563e282",
  },
];

const stickyColors = [
  "bg-[#ffde59]",
  "bg-[#00f0ff]",
  "bg-[#ff90e8]",
  "bg-[#58ff21]",
  "bg-[#fff]",
];

export default function Monty() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `https://forms.fillout.com/t/8wd1jGykQhus?email=${encodeURIComponent(email)}`;
  };

  return (
    <div className="min-h-screen relative w-full pb-32 overflow-hidden">
      <header className="w-full flex justify-end pb-6 md:p-8 relative z-50 gap-4">
        <Link
          href="/rules"
          className="comic-button bg-[#ff003c] text-xl px-6 py-2 -rotate-[2deg] no-underline inline-block text-white"
        >
          THE RULES
        </Link>
        <Link
          href="/faq"
          className="comic-button bg-[#00f0ff] text-xl px-6 py-2 rotate-[3deg] no-underline inline-block text-black"
        >
          THE FULL FAQ
        </Link>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center mt-8">
        <div className="absolute top-10 left-0 lg:-left-10 text-[80px] md:text-[180px] -rotate-[15deg] z-0 opacity-30 select-none pointer-events-none hidden sm:block delay-150">
          🐍
        </div>
        <div className="absolute top-40 right-0 lg:-right-10 text-[80px] md:text-[180px] rotate-[15deg] z-0 opacity-30 select-none pointer-events-none hidden sm:block">
          🐍
        </div>

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
                <h3 className="text-4xl text-[#ff003c] text-left">
                  What exactly is this?
                </h3>
                <p className="font-body text-left text-2xl font-bold mt-4 leading-relaxed tracking-wide">
                  Code open source Python packages, tools, or games, publish them to PyPI, and
                  earn Venom Coins{" "}
                  <span className="inline-block bg-[#58ff21] text-black border-2 border-black rounded-full w-8 h-8 text-center leading-7 font-black mx-1 shadow-[2px_2px_0_#000] -rotate-6 relative -top-1">
                    V
                  </span>
                   {" "}to get stuff! That's the entire gig. You ship code, we ship loot!
                </p>
              </div>

              <div className="relative mt-12 w-full flex flex-col gap-6">
                <h2 className="text-5xl sm:text-6xl text-center lg:text-left bg-white border-4 border-black inline-block self-center lg:self-start px-8 py-2 rotate-1 shadow-[4px_4px_0_#000]">
                  HOW IT WORKS?
                </h2>
                <div className="flex flex-col gap-6 w-full mt-4">
                  <div className="comic-panel bg-[#00f0ff] p-6 -rotate-[1deg] text-left w-full relative">
                    <div className="text-5xl font-black bg-white rounded-full w-14 h-14 flex items-center justify-center border-4 border-black shadow-[2px_2px_0_#000] absolute -top-4 -left-4">
                      1
                    </div>
                    <h3 className="text-4xl mt-2 ml-4">Code Sick Packages</h3>
                    <p className="font-body text-2xl font-bold mt-2 leading-tight ml-4">
                      Write awesome open-source Python projects, scripts, or tools that the world
                      can use.{" "}
                    </p>
                  </div>

                  <div className="comic-panel mt-4 bg-[#ff90e8] p-6 rotate-[1deg] w-full text-left relative ml-2 sm:ml-8">
                    <div className="text-5xl font-black bg-[#ffde59] rounded-full w-14 h-14 flex items-center justify-center border-4 border-black shadow-[2px_2px_0_#000] absolute -top-4 -left-4">
                      2
                    </div>
                    <h3 className="text-4xl mt-2 ml-4 text-black">
                      Publish to PyPI
                    </h3>
                    <p className="font-body text-2xl font-bold mt-2 leading-tight text-black ml-4">
                      Ship it live globally so anyone in the world can run{" "}
                      <code className="bg-black text-[#58ff21] px-2 py-1 mx-1 skew-x-12 inline-block">
                        pip install{" "}
                      </code>{" "}
                      on your project.
                    </p>
                  </div>

                  <div className="comic-panel mt-4 bg-[#58ff21] p-6 -rotate-[2deg] text-left w-full relative">
                    <div className="text-5xl font-black bg-white rounded-full w-14 h-14 flex items-center justify-center border-4 border-black shadow-[2px_2px_0_#000] absolute -top-4 -left-4">
                      3
                    </div>
                    <h3 className="text-5xl mt-2 ml-4">
                      Get Venom Coins & Loot
                    </h3>
                    <p className="font-body text-2xl font-bold mt-2 leading-tight ml-4 w-full sm:w-[80%]">
                      We reward you with Venom Coins{" "}
                      <span className="inline-block bg-[#58ff21] text-black border-2 border-black rounded-full w-8 h-8 text-center leading-7 font-black mx-1 shadow-[2px_2px_0_#000] rotate-12 relative -top-1">
                        V
                      </span>{" "}
                      that you can burn in our shop for a lot of rewards!
                    </p>
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

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 w-full flex flex-col gap-4"
                  >
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
                    <button
                      type="submit"
                      className="comic-button bg-[#58ff21] py-5 text-4xl mt-4 text-black border-t-8 border-l-8 border-b-8 shadow-[8px_8px_0_#000] hover:bg-[#4de61c]"
                    >
                      JOIN NOW!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="w-full relative flex flex-col items-center z-10 p-0 m-0">
        <div className="bg-[#fff] border-4 border-black px-8 py-6 text-center transform -rotate-2 shadow-[8px_8px_0_#000] max-w-4xl w-[90%] relative z-30 mb-8 mt-10">
          <div className="tape"></div>
          <h2 className="text-[#ff003c] text-5xl sm:text-6xl font-black comic-title">
            AMAZING PRIZES
          </h2>
          <p className="font-body text-xl font-bold mt-2 text-black leading-snug">
            This isn't some contest with just a few winners.
            <br />
            If you build stuff, you get stuff, guaranteed!
          </p>
        </div>

        <div className="w-[110vw] flex flex-col gap-6 relative z-10 transform -rotate-3 overflow-hidden bg-black/5 py-10 border-y-4 border-black">
          <div className="w-full relative flex -ml-10">
            <div className="flex w-max animate-slide-left hover:[animation-play-state:paused]">
              {[
                ...row1Loot,
                ...row1Loot,
                ...row1Loot,
                ...row1Loot,
                ...row1Loot,
                ...row1Loot,
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col bg-white border-4 border-black p-3 w-[180px] flex-shrink-0 items-center justify-center text-center shadow-[4px_4px_0_#000] rounded-sm mr-6 transform hover:-translate-y-2 hover:rotate-3 transition-transform cursor-pointer"
                >
                  <div className="w-full h-[100px] bg-[#f8f8f8] border-2 border-black flex items-center justify-center text-[50px] shadow-[inset_4px_4px_0_rgba(0,0,0,0.05)] mb-3 rounded-sm p-2">
                    {item.img.startsWith("http") ? (
                      <img
                        src={item.img}
                        alt={item.name}
                        className="max-h-[80px] w-auto object-contain"
                      />
                    ) : (
                      item.img
                    )}
                  </div>
                  <h4 className="font-black text-xl leading-tight text-black h-10 flex items-center justify-center">
                    {item.name}
                  </h4>
                  <p className="font-bold text-sm text-black bg-[#ffde59] border-2 border-black px-2 py-1 mt-1 -rotate-2">
                    {item.cost}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full relative flex ml-[-50%]">
            <div className="flex w-max animate-slide-right hover:[animation-play-state:paused]">
              {[
                ...row2Loot,
                ...row2Loot,
                ...row2Loot,
                ...row2Loot,
                ...row2Loot,
                ...row2Loot,
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col bg-white border-4 border-black p-3 w-[180px] flex-shrink-0 items-center justify-center text-center shadow-[4px_4px_0_#000] rounded-sm mr-6 transform hover:-translate-y-2 hover:-rotate-3 transition-transform cursor-pointer"
                >
                  <div className="w-full h-[100px] bg-[#f8f8f8] border-2 border-black flex items-center justify-center text-[50px] shadow-[inset_4px_4px_0_rgba(0,0,0,0.05)] mb-3 rounded-sm p-2">
                    {item.img.startsWith("http") ? (
                      <img
                        src={item.img}
                        alt={item.name}
                        className="max-h-[80px] w-auto object-contain"
                      />
                    ) : (
                      item.img
                    )}
                  </div>
                  <h4 className="font-black text-xl leading-tight text-black h-10 flex items-center justify-center">
                    {item.name}
                  </h4>
                  <p className="font-bold text-sm text-white bg-[#000] border-2 border-black px-2 py-1 mt-1 rotate-2">
                    {item.cost}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <section className="w-full mt-32 pt-20 border-t-8 border-black border-dashed relative flex flex-col items-center mb-10">
          <div className="absolute -top-10 bg-[#000] px-8 py-3 rotate-2 border-4 border-[#00f0ff] shadow-[8px_8px_0_#ff90e8]">
            <h2 className="text-[#00f0ff] text-5xl sm:text-7xl tracking-widest">
              THE INFO BOARD
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10 items-start">
            {faqData.map((item, index) => {
              const bg = stickyColors[index % stickyColors.length];
              const rots = [
                "rotate-1",
                "-rotate-2",
                "rotate-3",
                "-rotate-1",
                "rotate-2",
              ];
              const rot = rots[index % rots.length];
              return (
                <div key={index} className={`sticky-note ${bg} ${rot} w-full`}>
                  <div className="pin"></div>
                  <h3 className="text-3xl uppercase leading-tight mb-3 border-b-4 border-black/20 pb-2 text-black">
                    {item.question}
                  </h3>
                  <p className="text-xl font-body font-bold leading-relaxed whitespace-pre-wrap text-black/80">
                    {item.answer}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-16 w-full">
            <Link
              href="/faq"
              className="inline-button bg-[#00f0ff] border-4 border-black text-2xl px-8 py-4 text-3xl font-black shadow-[6px_6px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all uppercase -rotate-1"
            >
              READ THE FULL FAQ
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
