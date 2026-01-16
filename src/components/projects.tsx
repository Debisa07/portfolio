"use client"

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
        "relative rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] " +
        (isActive
          ? "h-[450px] shadow-[0_20px_50px_rgba(34,197,94,0.2)] scale-100 opacity-100 grayscale-0 z-10 ring-1 ring-[#22c55e]/40"
          : "h-[450px] scale-[0.85] opacity-40 grayscale blur-[1px] z-0 border border-white/5")
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
          "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent transition-opacity duration-700 " +
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
            <h3 className="text-3xl font-bold text-white leading-tight tracking-tight">
              {project.title}
            </h3>
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed max-w-[90%] line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#22c55e]/10 backdrop-blur-md text-[#22c55e] text-[10px] uppercase tracking-wider font-semibold rounded-full border border-[#22c55e]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-6 right-6 text-[#22c55e] text-sm font-bold tracking-widest uppercase bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-[#22c55e]/20">
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

  const cardWidth = 340
  const cardGap = 32
  const trackOffset = activeIndex * (cardWidth + cardGap)
  
  const trackStyle = {
    transform: `translateX(calc(50% - ${cardWidth / 2}px - ${trackOffset}px))`,
  }

  return (
    <section id="projects" className="py-24 bg-[#1a1a1a] overflow-hidden relative">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="px-4 md:px-8 max-w-[1400px] mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16 px-4">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[0.9]">
              Selected <br /> <span className="text-[#22c55e]">Works.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 text-white/60">
            <span className="text-sm uppercase tracking-[0.4em] font-medium text-[#22c55e]">Portfolio 2024</span>
            <div className="h-px w-24 bg-[#22c55e]/30 my-2" />
          </div>
        </div>

        <div
          className="relative py-12"
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
        <div className="mt-16 px-4 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          {/* Progress Line */}
          <div className="w-full md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <div 
              className="absolute inset-y-0 left-0 bg-[#22c55e] transition-all duration-700 ease-out shadow-[0_0_10px_#22c55e]"
              style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
            />
          </div>

          {/* Number Pagination */}
          <div className="flex items-baseline gap-6 select-none">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-500 font-bold tracking-tighter hover:text-[#22c55e] ${
                  index === activeIndex
                    ? "text-6xl text-[#22c55e] scale-110 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                    : "text-lg text-white/20 scale-100"
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
