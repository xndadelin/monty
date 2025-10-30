import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { SparklesText } from "@/components/ui/sparkles-text"

export default function Home() {
  const data = [
    {
      title: "RSVP",
      content: (
        <div>
          <p className="text-neutral-100 mb-8 leading-relaxed text-xl md:text-2xl">
             Want Monty to happen? Click the <strong className="text-[#FFD43B]"> <a href="#">RSVP</a> </strong> on the left to let us know you're interested!
             Once we get enough people interested & get sponsorship, we'll kick off the program with more details on how to participate, submit your libraries, and earn Venom coins.
             
          </p>
        </div>
      ),  
    },
    {
      title: "FAQ",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-[#FFD43B] text-xl md:text-2xl font-bold mb-3">
              What is Monty?
            </p>
            <p className="text-neutral-200 text-base md:text-lg leading-relaxed">
              Monty is a Python based YSWS (You Ship, We Ship) Hack Club program! In a nutshell, you code Python libraries, publish them to <a href="https://pypi.org" className="text-[#FFD43B] underline hover:text-[#3776AB] transition-colors">pypi.org</a>, and get Venom coins in return. These coins can be used to buy cool stuff from our shop.
            </p>
          </div>
          
          <div>
            <p className="text-[#FFD43B] text-xl md:text-2xl font-bold mb-3">
              Who can join Monty?
            </p>
            <p className="text-neutral-200 text-base md:text-lg leading-relaxed">
              Monty is open to all Hack Club members who likes Python programming and want to contribute to the open-source community. Whether you're a beginner or an experienced c, Monty welcomes you to participate and showcase your skills & imagination.
            </p>
          </div>
          
          <div>
            <p className="text-[#FFD43B] text-xl md:text-2xl font-bold mb-3">
              What is open-source library?
            </p>
            <p className="text-neutral-200 text-base md:text-lg leading-relaxed">
              An open-source library is a collection of pre-written code that is made available to the public for use, modification, and distribution. You can find open-source libraries for various programming languages, including Python, on platforms like GitHub and PyPI. 
              PyPi is the official package repository for Python, where developers can publish and share their libraries with the community. It's the best way to contribute to the Python ecosystem and open-source software in general.
            </p>
          </div>
          
          <div>
            <p className="text-[#FFD43B] text-xl md:text-2xl font-bold mb-3">
              What is the shop?
            </p>
            <p className="text-neutral-200 text-base md:text-lg leading-relaxed">
              The Monty shop is an exclusive marketplace where you can redeem your hard-earned Venom coins for a variety of exciting rewards. From swag to tech gadgets, the shop offers a range of items that celebrate your contributions to the Python ecosystem.
            </p>
          </div>
          
          <div>
            <p className="text-[#FFD43B] text-xl md:text-2xl font-bold mb-3">
              How do I get started?
            </p>
            <p className="text-neutral-200 text-base md:text-lg leading-relaxed mb-6">
              To get started with Monty, simply RSVP & join the channel if you haven't already. Once we get enough people interested & get sponsorship, we'll kick off the program with more details on how to participate, submit your libraries, and earn Venom coins.
            </p>
          </div>

          <div>
            <p className="text-[#FFD43B] text-xl md:text-2xl font-bold mb-3">
              I don't know how to code a Python library. Can I still join?
            </p>
            <p className="text-neutral-200 text-base md:text-lg leading-relaxed">
              Absolutely! Monty is designed to be inclusive and supportive of all skill levels. If you're new to coding or Python, we encourage you to join and learn alongside other members. There are plenty of resources and community support available to help you get started on your journey to creating your first Python library.
            </p>
          </div>

          <div className="text-neutral-400 text-sm md:text-base italic">
            <p>
              *FAQ content is subject to change as the Monty program evolves. Stay tuned for updates and new information!
            </p>
          </div>

        </div>
      ),
    },
    {
      title: "Updates",
      content: (
        <div>
          <p className="text-neutral-100 text-lg md:text-xl font-semibold mb-6">
            Latest improvements & additions
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex gap-3 items-center text-neutral-200 text-sm md:text-base">
              <span className="text-[#FFD43B]">✓</span> Card grid component
            </div>
            <div className="flex gap-3 items-center text-neutral-200 text-sm md:text-base">
              <span className="text-[#FFD43B]">✓</span> Startup template Aceternity
            </div>
            <div className="flex gap-3 items-center text-neutral-200 text-sm md:text-base">
              <span className="text-[#FFD43B]">✓</span> Random file upload lol
            </div>
            <div className="flex gap-3 items-center text-neutral-200 text-sm md:text-base">
              <span className="text-[#FFD43B]">✓</span> Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-3 items-center text-neutral-200 text-sm md:text-base">
              <span className="text-[#FFD43B]">✓</span> Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(255,212,59,0.1),_0_1px_1px_rgba(0,_0,_0,_0.3)]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(255,212,59,0.1),_0_1px_1px_rgba(0,_0,_0,_0.3)]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(255,212,59,0.1),_0_1px_1px_rgba(0,_0,_0,_0.3)]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(255,212,59,0.1),_0_1px_1px_rgba(0,_0,_0,_0.3)]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f1419]">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}