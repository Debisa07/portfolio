"use client"

import { motion } from "framer-motion"

export default function Summery() {
  return (
    <section className="min-h-screen bg-[#18191b] text-white flex flex-col justify-between py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Left: Title & Quote */}
        <div className="flex-1 flex flex-col gap-12 justify-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Good Omens</h1>
            <blockquote className="text-2xl md:text-3xl font-semibold leading-snug text-white/90 border-l-4 border-[#22c55e] pl-6 mb-4">
              “ A hilarious dark fantasy ”
            </blockquote>
            <div className="text-white/60 text-base font-medium pl-6">Dave Martin,<br />The Bookbag</div>
          </div>
        </div>

        {/* Right: Details & Description */}
        <div className="flex-1 flex flex-col gap-8 justify-center">
          <div className="flex flex-row gap-12 text-sm text-white/60">
            <div>
              <div className="uppercase tracking-widest text-xs mb-1 text-white/40">Written by</div>
              <div className="font-semibold text-white">Terry Pratchett and Neil Gaiman</div>
            </div>
            <div>
              <div className="uppercase tracking-widest text-xs mb-1 text-white/40">Published</div>
              <div className="font-semibold text-white">Corgi Adult</div>
            </div>
          </div>
          <hr className="border-white/10 my-2" />
          <div className="flex items-start gap-4">
            <div className="flex-1 text-white/80 text-base leading-relaxed">
              In England the Antichrist is about to be born. Unfortunately, thanks to a couple of bumbling Satanic Midwives, the Antichrist has a new name. Adam knows nothing of the evil thing he is to become. As Heaven and Hell prepare for Armageddon, the two demonic and angelic representatives on Earth decide they are quite keen on the world as it is. Of course, they are in favour of Armageddon, “in general terms” but then where would they have lunch?
              <br /><br />
              Good Omens is a hilarious dark fantasy created by the collaboration of two literary giants in the form of Terry Pratchett and Neil Gaiman. Pratchett is best known for his Discworld stories, fantasy parodies set on a world that is vastly different and yet similar to our own.
            </div>
            <button className="ml-2 mt-2 flex items-center justify-center w-12 h-12 rounded-full bg-[#22c55e] text-black text-2xl font-bold shadow-lg hover:scale-105 transition-transform duration-200">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4 mt-16 text-white/40 text-sm border-t border-white/10 pt-6">
        <div className="flex gap-8">
          <span className="cursor-pointer hover:text-[#22c55e] transition-colors">Summary</span>
          <span className="cursor-pointer hover:text-[#22c55e] transition-colors">Recommend It</span>
        </div>
        <div className="flex gap-6">
          <span className="cursor-pointer hover:text-[#22c55e] transition-colors">Facebook</span>
          <span className="cursor-pointer hover:text-[#22c55e] transition-colors">Twitter</span>
          <span className="cursor-pointer hover:text-[#22c55e] transition-colors">Pinterest</span>
        </div>
      </div>
    </section>
  )
}
