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
    title: "B.Sc. in Software Engineering",
    description: "Addis Ababa University",
  },
  {
    id: "02",
    title: "ALX Africa",
    description: "Software Engineering (Backend Specialization)",
  },
  {
    id: "03",
    title: "DevTown",
    description: "Data Science, Artificial Intelligence & Machine Learning",
  },
  {
    id: "04",
    title: "AWS Community Builder",
    description: "Python & Serverless Architectures",
  },
  {
    id: "05",
    title: "Microsoft Learn Student Ambassador",
    description: "Azure Cloud Technologies",
    highlight: true,
  },
  {
    id: "06",
    title: "Google Developer Group (GDG)",
    description: "Full-Stack Development Community Member",
  },
]

export default function Education() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="education" className="min-h-[60vh] bg-background text-foreground py-8 px-2 sm:px-4 flex justify-center items-center">
      <div className="max-w-2xl w-full mx-auto">
        {/* Header Section */}
        <div className="mb-8 flex flex-col md:grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[0.95]">
              EDUCATION <br />
              <span className="text-foreground/40">PATHWAY.</span>
            </h2>
            <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
               <span className="text-foreground/70 text-base sm:text-lg font-bold">+</span>
               <p className="text-muted-foreground max-w-xs sm:max-w-sm text-xs sm:text-sm leading-relaxed">
                 A journey of academic excellence and continuous professional development in software engineering.
               </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="group relative w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full bg-muted flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-105">
              <div className="text-center z-10 transition-transform duration-500 group-hover:rotate-45">
                <span className="block text-foreground font-semibold text-base sm:text-lg md:text-xl">View</span>
                <span className="block text-foreground font-semibold text-base sm:text-lg md:text-xl">Certificates</span>
                <span className="block mt-2 text-xl sm:text-2xl text-foreground">→</span>
              </div>
              {/* Pulse Effect */}
              <div className="absolute inset-0 rounded-full border border-muted-foreground scale-110 opacity-40 animate-ping" />
            </div>
          </div>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.04, boxShadow: item.highlight ? '0 0 32px hsl(var(--foreground)/0.18)' : '0 0 16px hsl(var(--muted-foreground)/0.12)' }}
              transition={{ type: 'spring', stiffness: 120, damping: 18, delay: index * 0.08 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative p-4 sm:p-5 h-48 sm:h-56 flex flex-col justify-between transition-colors duration-500 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl
                ${item.highlight ? 'bg-card border border-muted-foreground/10' : 'bg-muted/10 hover:bg-muted/20 group'}
              `}
              style={{
                clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)',
              }}
            >
              {/* Number */}
              <div className="flex justify-end">
                <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${!item.highlight && hoveredIndex === index ? 'text-foreground/60' : 'text-muted-foreground/40'}`}>{item.id}/</span>
              </div>
              {/* Content */}
              <div>
                <p className={`text-xs sm:text-sm mb-2 sm:mb-3 transition-colors duration-300 ${!item.highlight && hoveredIndex === index ? 'text-foreground/80' : 'text-muted-foreground'}`}>{item.title}</p>
                <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-300 leading-snug ${!item.highlight && hoveredIndex === index ? 'text-foreground' : 'text-card-foreground'}`}>{item.description}</h3>
              </div>
              {/* Background Glow for Highlighted Card */}
              {item.highlight && (<div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent opacity-50 pointer-events-none" />)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
