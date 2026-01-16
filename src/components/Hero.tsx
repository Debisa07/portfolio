"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })

  // simple parallax for name
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2])

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-[100svh] overflow-hidden bg-[#1a1a1a] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#22c55e]/10 blur-[80px]" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#22c55e]/8 blur-[90px]" />
      </div>
      <div className="container mx-auto h-full min-h-[100svh] flex items-center justify-center relative px-6">
        {/* Huge background HELLO */}
        <motion.h1
          className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none select-none"
          style={{ opacity: 0.06 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <span className="font-grotesk font-extrabold text-[20rem] leading-[0.85] tracking-[-0.03em] text-white/10">
            HELLO
          </span>
        </motion.h1>

        {/* Decorative circle on the right */}
        <motion.div
          className="absolute right-20 top-1/3 w-32 h-32 rounded-full border border-white/10 hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        />

        {/* Menu icon top right */}
        <div className="absolute top-8 right-8 text-white/40 text-xl hidden lg:block">⋮</div>

        {/* Left descriptive text */}
        <div className="absolute left-0 top-1/3 w-1/4 px-8 hidden lg:block">
          <p className="text-xs text-white/60 leading-relaxed">
            I am a creative, dedicated and multidisciplinary creative designer based in London, currently building.
          </p>
        </div>

        {/* Right descriptive text */}
        <div className="absolute right-0 top-1/3 w-1/4 px-8 hidden lg:block text-right">
          <p className="text-xs text-white/60 leading-relaxed">
            Solving problems and creating clear visual languages is my passion and key focus of my work.
          </p>
          <p className="text-xs text-white/60 leading-relaxed mt-6">
            I am an advocate for a people-user experience. I understand design and product-focused innovative
            excellence.
          </p>
        </div>

        {/* Center content: signature name + role + note */}
        <div className="w-full max-w-3xl text-center">
          <motion.div style={{ y: nameY, opacity: nameOpacity }} className="relative">
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-28 w-[70%] rounded-full bg-[#22c55e]/10 blur-[60px]" />
            </div>
            <h2
              className="text-7xl md:text-8xl lg:text-9xl font-light italic tracking-wide text-white mb-8"
              style={{ fontFamily: "cursive, Georgia, serif" }}
            >
              John Mossah
            </h2>

            {/* Timeline element at bottom center */}
            <div className="flex items-center justify-center my-16">
              <motion.div
                className="w-[2px] h-12 bg-[#22c55e]/40"
                initial={{ scaleY: 0.6, opacity: 0.5 }}
                animate={{ scaleY: 1, opacity: 0.9 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* bottom small experience note */}
          <div className="mt-12 flex items-center justify-center">
            <div className="text-xs text-white/50">
              — 8 Years of experience
              <span className="block text-xs text-white/40">2006 - 2017</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
