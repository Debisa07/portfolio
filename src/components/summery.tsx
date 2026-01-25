"use client"

import { motion } from "framer-motion"

export default function Summery() {
  return (
    <section className="min-h-screen bg-[#18191b] text-white flex flex-col justify-between py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left: Name & Professional Headline */}
        <div className="flex-1 flex flex-col gap-12 justify-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Debisa Abebe Tulu
            </h1>

            <blockquote className="text-2xl md:text-3xl font-semibold leading-snug text-white/90 border-l-4 border-[#22c55e] pl-6 mb-4">
              Full-Stack Software Engineer
            </blockquote>

            <div className="text-white/60 text-base font-medium pl-6">
              AI-augmented systems · Scalable architectures · Cloud-native solutions
            </div>
          </div>
        </div>

        {/* Right: Details & Professional Summary */}
        <div className="flex-1 flex flex-col gap-8 justify-center">
          
          {/* Meta info */}
          <div className="flex flex-row gap-12 text-sm text-white/60 flex-wrap">
            <div>
              <div className="uppercase tracking-widest text-xs mb-1 text-white/40">
                Experience
              </div>
              <div className="font-semibold text-white">5+ Years</div>
            </div>

            <div>
              <div className="uppercase tracking-widest text-xs mb-1 text-white/40">
                Focus
              </div>
              <div className="font-semibold text-white">
                Full-Stack · AI · Cloud
              </div>
            </div>

            <div>
              <div className="uppercase tracking-widest text-xs mb-1 text-white/40">
                Location
              </div>
              <div className="font-semibold text-white">
                Remote / Ethiopia
              </div>
            </div>
          </div>

          <hr className="border-white/10 my-2" />

          {/* Summary text */}
          <div className="flex items-start gap-4">
            <div className="flex-1 text-white/80 text-base leading-relaxed">
              Full-Stack Software Engineer with 5+ years of experience
              architecting scalable web and mobile applications, specializing
              in AI-augmented development and intelligent automations.
              <br /><br />
              Expert in integrating TensorFlow and PyTorch for recommendation
              systems, chatbots, and predictive analytics—driving 25–40%
              improvements in user engagement and operational efficiency across
              e-commerce, healthcare, and real estate platforms.
              <br /><br />
              Proven leader in cloud-native architectures (AWS, Kubernetes),
              microservices, and infrastructure as code, with a strong track
              record of mentoring teams and contributing to open-source AI
              initiatives.
            </div>

            {/* CTA Arrow */}
            <button className="ml-2 mt-2 flex items-center justify-center w-12 h-12 rounded-full bg-[#22c55e] text-black text-2xl font-bold shadow-lg hover:scale-105 transition-transform duration-200">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4 mt-16 text-white/40 text-sm border-t border-white/10 pt-6">
        

        <div className="flex gap-6 ml-auto">
          <a
            href="mailto:se.debisaabebe@gmail.com"
            className="hover:text-[#22c55e] transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#22c55e] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Debisa07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#22c55e] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
