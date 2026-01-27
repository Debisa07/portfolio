"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })

  // Parallax effects
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-[100svh] overflow-hidden bg-card text-foreground transition-colors duration-700">
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ scale: bgScale, opacity: bgOpacity }}
      >
        <motion.div 
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary/5 blur-[100px]"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full"
          style={{ 
            background: "radial-gradient(circle, hsl(var(--primary)/0.03) 0%, transparent 70%)"
          }}
          animate={{ 
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container mx-auto h-full min-h-[100svh] flex items-center justify-center relative px-6">
        {/* Background HELLO text with immersive reveal */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none select-none overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="font-grotesk font-normal text-[15vw] md:text-[18rem] leading-[0.85] tracking-[-0.04em] text-foreground/10">
            HELLO
          </span>
        </motion.div>

        {/* Decorative circle with pulse */}
        <motion.div
          className="absolute right-16 top-1/3 w-28 h-28 rounded-full border border-foreground/10 hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ scale: 1.1, borderColor: "hsl(var(--foreground)/0.3)" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border border-foreground/5"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.div>

        {/* Left descriptive text with stagger */}
        <motion.div 
          className="absolute left-0 top-1/3 w-1/4 px-8 hidden lg:block"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-small text-muted-foreground/60 leading-relaxed font-grotesk font-normal">
            Passionate and results-driven Software Engineer based in Ethiopia, specializing in full-stack development and cloud solutions.
          </p>
        </motion.div>

        {/* Right descriptive text with stagger */}
        <motion.div 
          className="absolute right-0 top-1/3 w-1/4 px-8 hidden lg:block text-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-small text-muted-foreground/60 leading-relaxed font-grotesk font-normal">
            Experienced in building scalable web applications, APIs, and distributed systems with a focus on user-centric design and performance.
          </p>
          <p className="text-small text-muted-foreground/60 leading-relaxed mt-6 font-grotesk font-normal">
            Adept at collaborating with cross-functional teams to deliver innovative software solutions.
          </p>
        </motion.div>

        {/* Center content */}
        <div className="w-full max-w-3xl text-center">
          <motion.div style={{ y: nameY, opacity: nameOpacity }} className="relative">
            {/* Glow effect behind name */}
            <motion.div 
              className="absolute inset-0 -z-10 flex items-center justify-center"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-32 w-[80%] rounded-full bg-primary/5 blur-[80px]" />
            </motion.div>

            {/* Name with letter-by-letter animation */}
            <motion.h2
              className="mt-8 text-display font-grotesk font-normal tracking-tight text-foreground mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {"Debisa Abebe".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + i * 0.04,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="inline-block"
                  style={{ marginRight: letter === " " ? "0.3em" : "0" }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h2>

            {/* Role with gradient underline */}
            <motion.div 
              className="mb-4 relative inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="text-heading font-grotesk font-normal text-primary/80">
                Software Engineer
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.div>

            {/* Animated timeline element */}
            <div className="flex items-center justify-center my-16">
              <motion.div
                className="w-[1px] h-16 bg-gradient-to-b from-primary/40 to-transparent"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>
          </motion.div>

          {/* Experience note */}
          <motion.div 
            className="mt-12 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="text-small text-muted-foreground/50 font-grotesk font-normal">
              — 5+ Years of experience
              <span className="block text-muted-foreground/40 mt-1">2019 - Present</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero
