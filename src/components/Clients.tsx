"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TechItem {
  name: string
  category: "Frontend" | "Backend"
  logo: string
}

// Black and white tech logos (using simple SVG representations)
const techStack: TechItem[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Vue.js",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Angular",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "React Native",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Flutter",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TailwindCSS",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  // Backend
  {
    name: "Node.js",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "NestJS",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "Python",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "FastAPI",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Django",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "Flask",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  },
  {
    name: "REST",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
  },
  {
    name: "GraphQL",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Redis",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  },
]

const TechStack = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="tech-stack" ref={sectionRef} className="py-16 md:py-24">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-[1.2]">Core Skills</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            A comprehensive tech stack spanning frontend, backend, and modern development practices.
          </p>
        </motion.div>

        {/* Frontend Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-8">Frontend</h3>
          <div className="relative group">
            <div
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-muted [&::-webkit-scrollbar-thumb]:bg-muted-foreground [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              {techStack
                .filter((tech) => tech.category === "Frontend")
                .map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex-shrink-0 flex flex-col items-center gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-lg border border-border bg-card hover:bg-muted transition-colors duration-300 grayscale hover:grayscale-0">
                      <img
                        src={tech.logo || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-foreground text-center whitespace-nowrap">{tech.name}</p>
                  </motion.div>
                ))}
            </div>
            {/* Scroll Buttons */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background border border-border rounded-full p-2 hover:bg-muted transition-colors duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background border border-border rounded-full p-2 hover:bg-muted transition-colors duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Backend Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-8">Backend</h3>
          <div className="relative group">
            <div
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-muted [&::-webkit-scrollbar-thumb]:bg-muted-foreground [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              {techStack
                .filter((tech) => tech.category === "Backend")
                .map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex-shrink-0 flex flex-col items-center gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.25 + index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-lg border border-border bg-card hover:bg-muted transition-colors duration-300 grayscale hover:grayscale-0">
                      <img
                        src={tech.logo || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-foreground text-center whitespace-nowrap">{tech.name}</p>
                  </motion.div>
                ))}
            </div>
            {/* Scroll Buttons */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background border border-border rounded-full p-2 hover:bg-muted transition-colors duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background border border-border rounded-full p-2 hover:bg-muted transition-colors duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
