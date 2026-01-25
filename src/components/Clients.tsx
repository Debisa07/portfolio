"use client"

import { motion } from "framer-motion"
import { useMemo, useState } from "react"

interface TechItem {
  name: string
  category: "Frontend" | "Backend"
  logo: string
}

const techStack: TechItem[] = [
  { name: "React", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Vue.js", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
  { name: "Angular", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" },
  { name: "Flutter", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "TypeScript", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "TailwindCSS", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },

  { name: "Node.js", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "NestJS", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
  { name: "Python", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "FastAPI", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Django", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "PostgreSQL", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
]

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<"Frontend" | "Backend">("Frontend")

  const filteredTech = useMemo(
    () => techStack.filter((tech) => tech.category === activeTab),
    [activeTab]
  )

  return (
    <section id="tech-stack" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tech Stack
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Modern tools I use to design, build, and scale applications
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-background/60 backdrop-blur border border-border p-1">
            {["Frontend", "Backend"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all
                  ${
                    activeTab === tab
                      ? "bg-[#22c55e] text-black shadow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {filteredTech.map((tech) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="group relative rounded-2xl border border-border bg-background/60 backdrop-blur p-6 shadow-sm hover:shadow-xl"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-[#22c55e]/20 via-transparent to-transparent" />

              <div className="relative flex flex-col items-center gap-4">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-sm font-semibold tracking-wide">
                  {tech.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
