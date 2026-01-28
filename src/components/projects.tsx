"use client"

import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory",
    image: "/e-commerce-platform.jpg",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Travel Booking System",
    description: "Modern travel booking with integrated payment processing",
    image: "/travel-booking.jpg",
    technologies: ["Next.js", "GraphQL", "MongoDB"],
  },
  {
    id: 3,
    title: "Social Commerce App",
    description: "Social media meets shopping with real-time notifications",
    image: "/social-commerce.jpg",
    technologies: ["React Native", "FastAPI", "Redis"],
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Real-time data visualization and business intelligence",
    image: "/analytics-dashboard.png",
    technologies: ["Vue.js", "Django", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking with AI coaching",
    image: "/fitness-app-interface.png",
    technologies: ["Flutter", "FastAPI", "MongoDB"],
  },
  {
    id: 6,
    title: "Content Management",
    description: "Headless CMS with multi-language support",
    image: "/cms-platform.jpg",
    technologies: ["Next.js", "NestJS", "PostgreSQL"],
  },
]

const ProjectCard = ({ project, isActive }: { project: Project; isActive: boolean }) => {
  return (
    <div
      className={
        "relative rounded-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] " +
        (isActive
          ? "h-[320px] shadow-[0_12px_32px_hsl(var(--foreground)/0.18)] scale-100 opacity-100 grayscale-0 z-10 ring-1 ring-foreground/40"
          : "h-[320px] scale-[0.85] opacity-40 grayscale blur-[1px] z-0 border border-muted-foreground/10")
      }
    >
      <img
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        className="w-full h-full object-cover transform transition-transform duration-1000"
        style={{ transform: isActive ? "scale(1)" : "scale(1.2)" }}
      />

      <div
        className={
          "absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-700 " +
          (isActive ? "opacity-100" : "opacity-70")
        }
      />

      <div
        className={
          "absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end transition-all duration-700 delay-100 " +
          (isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")
        }
      >
        <div className="space-y-4">
          <div className="overflow-hidden">
            <h3 className="text-xl font-bold text-foreground leading-tight tracking-tight">
              {project.title}
            </h3>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed max-w-[90%] line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted/30 backdrop-blur-md text-foreground/80 text-[10px] uppercase tracking-wider font-semibold rounded-full border border-muted-foreground/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-6 right-6 text-foreground/80 text-sm font-bold tracking-widest uppercase bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full border border-muted-foreground/20">
        Project {String(project.id).padStart(2, "0")}
      </div>
    </div>
  )
}

const ProjectsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const items = useMemo(() => projects, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [items.length, isPaused])

  const cardWidth = 240
  const cardGap = 18
  const trackOffset = activeIndex * (cardWidth + cardGap)
  
  const trackStyle = {
    transform: `translateX(calc(50% - ${cardWidth / 2}px - ${trackOffset}px))`,
  }

  return (
    <section id="projects" className="pt-0 py-6 bg-background overflow-hidden relative">
      {/* Huge background WORK */}
      <motion.h1
          className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none select-none overflow-hidden"
          style={{ opacity: 0.04 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <span className="font-grotesk font-extrabold text-[12rem] md:text-[20rem] leading-[0.85] tracking-[-0.03em] text-foreground/10 uppercase">
            Work
          </span>
      </motion.h1>

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="px-2 md:px-4 max-w-[900px] mx-auto relative z-10">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 px-2">
          <div className="flex flex-col items-start gap-2 text-muted-foreground">
  <span className="text-sm uppercase tracking-[0.4em] font-medium text-foreground/80">
    Selected Works
  </span>
  <div className="h-px w-24 bg-foreground/20 my-2" />
</div>

<div className="flex flex-col items-start md:items-end gap-2 text-muted-foreground">
  <span className="text-sm uppercase tracking-[0.4em] font-medium text-foreground/80">
    Portfolio 2024
  </span>
  <div className="h-px w-24 bg-foreground/20 my-2" />
</div>

        </div>

        <div
          className="relative py-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Track */}
          <div className="flex justify-center">
            <div
              className="flex gap-8 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={trackStyle}
            >
              {items.map((project, index) => (
                <div
                  key={project.id}
                  className="shrink-0 transition-all duration-700"
                  style={{ width: `${cardWidth}px` }}
                >
                  <ProjectCard project={project} isActive={index === activeIndex} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-6 px-2 flex flex-col md:flex-row items-center justify-between gap-6 max-w-2xl mx-auto">
          {/* Progress Line */}
          <div className="w-full md:w-56 h-[2px] bg-muted-foreground/10 rounded-full overflow-hidden relative">
            <div 
              className="absolute inset-y-0 left-0 bg-foreground/60 transition-all duration-700 ease-out shadow-[0_0_10px_hsl(var(--foreground)/0.2)]"
              style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
            />
          </div>

          {/* Number Pagination */}
          <div className="flex items-baseline gap-6 select-none">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-500 font-bold tracking-tighter hover:text-foreground ${
                  index === activeIndex
                    ? "text-6xl text-foreground scale-110 drop-shadow-[0_0_8px_hsl(var(--foreground)/0.2)]"
                    : "text-lg text-muted-foreground/40 scale-100"
                }`}
                aria-label={`Go to project ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsShowcase
