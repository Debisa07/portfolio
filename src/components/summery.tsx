"use client"

import { motion } from "framer-motion"

export default function Summery() {
  return (
    <section id="summary" className="min-h-[80vh] bg-background text-foreground flex flex-col justify-between py-6 px-3 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-6 md:gap-16">
        {/* Left: Name & Professional Headline */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 justify-center">
          <div>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 break-words">
              Debisa Abebe Tulu
            </h1>
            <blockquote className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-foreground/90 border-l-4 border-foreground/20 pl-3 xs:pl-4 sm:pl-6 mb-2 sm:mb-3 break-words">
              Full-Stack Software Engineer
            </blockquote>
            <div className="text-muted-foreground text-sm sm:text-base font-medium pl-4 sm:pl-6">
              AI-augmented systems · Scalable architectures · Cloud-native solutions
            </div>
          </div>
        </div>
        {/* Right: Details & Professional Summary */}
        <div className="flex-1 flex flex-col gap-4 justify-center">
          {/* Meta info */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground flex-wrap">
            <div>
              <div className="uppercase tracking-widest text-[11px] sm:text-xs mb-1 text-muted-foreground/60">
                Experience
              </div>
              <div className="font-semibold text-foreground">5+ Years</div>
            </div>
            <div>
              <div className="uppercase tracking-widest text-[11px] sm:text-xs mb-1 text-muted-foreground/60">
                Focus
              </div>
              <div className="font-semibold text-foreground">
                Full-Stack · AI · Cloud
              </div>
            </div>
            <div>
              <div className="uppercase tracking-widest text-[11px] sm:text-xs mb-1 text-muted-foreground/60">
                Location
              </div>
              <div className="font-semibold text-foreground">
                Remote / Ethiopia
              </div>
            </div>
          </div>
          <hr className="border-muted-foreground/10 my-2" />
          {/* Summary text */}
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
            <div className="flex-1 text-foreground/80 text-sm sm:text-base leading-relaxed break-words">
              Full-Stack Software Engineer with 5+ years of experience architecting scalable web and mobile applications, specializing in AI-augmented development and intelligent automations.
              <br /><br />
              Expert in integrating TensorFlow and PyTorch for recommendation systems, chatbots, and predictive analytics—driving 25–40% improvements in user engagement and operational efficiency across e-commerce, healthcare, and real estate platforms.
              <br /><br />
              Proven leader in cloud-native architectures (AWS, Kubernetes), microservices, and infrastructure as code, with a strong track record of mentoring teams and contributing to open-source AI initiatives.
            </div>
            {/* CTA Arrow */}
            <button className="ml-0 sm:ml-2 mt-2 flex items-center justify-center w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full bg-muted text-foreground text-lg xs:text-xl sm:text-2xl font-bold shadow-lg hover:scale-105 transition-transform duration-200">
              →
            </button>
          </div>
        </div>
      </div>
      {/* Footer links */}
      <div className="max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-6 sm:mt-12 text-muted-foreground/60 text-xs sm:text-sm border-t border-muted-foreground/10 pt-3 sm:pt-4">
        <div className="flex gap-4 sm:gap-6 ml-0 sm:ml-auto">
          <a href="mailto:se.debisaabebe@gmail.com" className="hover:text-foreground transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/debisa-abebe-tu/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://github.com/Debisa07" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
      </div>
    </section>
  )
}
