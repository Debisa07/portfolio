"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type Experience = {
  id: string
  title: string
  description: string
  highlight?: boolean
}

const experiences: Experience[] = [
  {
    id: "01",
    title: "University of Gondar",
    description: "BSc in Software Engineering (2025)",
  },
  {
    id: "02",
    title: "ALX Africa",
    description: "Software Engineering Certificate (2024)",
  },
  {
    id: "03",
    title: "Meta",
    description: "Meta Back-End Developer Certificate (2024)",
  },
  {
    id: "04",
    title: "Focus & Dedication",
    description: "Continuous learning and specialization in modern web technologies and AI integration.",
    highlight: true,
  },
]

export default function Education() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="min-h-[60vh] bg-[#1a1a1a] text-white py-10 px-2 flex justify-center items-center">
      <div className="max-w-2xl w-full mx-auto">
        {/* Header Section */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9]">
              EDUCATION <br />
              <span className="text-white/40">PATHWAY.</span>
            </h2>
            <div className="mt-8 flex items-center gap-4">
               <span className="text-[#22c55e] text-lg font-bold">+</span>
               <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                 A journey of academic excellence and continuous professional development in software engineering.
               </p>
            </div>
          </div>

          <div className="flex justify-end">
             <div className="group relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#22c55e] flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-105">
                <div className="text-center z-10 transition-transform duration-500 group-hover:rotate-45">
                  <span className="block text-black font-semibold text-lg md:text-xl">View</span>
                  <span className="block text-black font-semibold text-lg md:text-xl">Certificates</span>
                  <span className="block mt-2 text-2xl text-black">→</span>
                </div>
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full border border-[#22c55e] scale-110 opacity-40 animate-ping" />
             </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.04, boxShadow: item.highlight ? "0 0 32px #22c55e44" : "0 0 16px #22c55e22" }}
              transition={{ type: "spring", stiffness: 120, damping: 18, delay: index * 0.08 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative p-5 h-56 flex flex-col justify-between transition-colors duration-500 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl
                ${
                  item.highlight
                    ? "bg-[#111] border border-white/10"
                    : "bg-[#f3f4f60d] hover:bg-[#22c55e] group"
                }
              `}
              style={{
                clipPath: "polygon(30px 0, 100% 0, 100% 100%, 0 100%, 0 30px)",
              }}
            >
              {/* Number */}
              <div className="flex justify-end">
                 <span 
                   className={`text-sm font-medium transition-colors duration-300 ${
                     !item.highlight && hoveredIndex === index ? "text-black/60" : "text-white/30"
                   }`}
                 >
                   {item.id}/
                 </span>
              </div>

              {/* Content */}
              <div>
                 <p 
                   className={`text-sm mb-3 transition-colors duration-300 ${
                      !item.highlight && hoveredIndex === index ? "text-black/70" : "text-gray-400"
                   }`}
                 >
                    {item.title}
                 </p>
                <h3 
                  className={`text-xl font-bold transition-colors duration-300 leading-snug ${
                    !item.highlight && hoveredIndex === index ? "text-black" : "text-white"
                  }`}
                >
                  {item.description}
                </h3>
              </div>

               {/* Background Glow for Highlighted Card */}
               {item.highlight && (
                 <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/10 to-transparent opacity-50 pointer-events-none" />
               )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
