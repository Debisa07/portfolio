"use client"

import { useEffect, useState } from "react"

export default function Timeline() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Maleda Tour & Travel",
      date: "Mar 2025",
      month: "Present",
      detail:
        "Leading the development of a cross-platform Flutter application with AI-powered chatbots, data-driven destination recommendations, and real-time location services.",
    },
    {
      title: "MERN / NestJS Developer",
      company: "Light Technology",
      date: "Feb 2024",
      month: "Oct 2024",
      detail:
        "Delivered a production-grade real estate platform using React, Next.js (SSR/ISR), and NestJS, integrating AI-driven recommendations and optimized data access with MongoDB, Redis, and asynchronous background processing.",
    },
    {
      title: "Backend Developer",
      company: "OHUB_ET (Remote)",
      date: "Jan 2025",
      month: "Aug 2025",
      detail:
        "Built a full-featured consulting and scholarship opportunities platform with secure user onboarding, role-based access control, and scalable backend services.",
    },
    {
      title: "Full-Stack Developer",
      company: "SalzorParts (Remote)",
      date: "Jun 2024",
      month: "Dec 2024",
      detail:
        "Built an end-to-end automotive platform for vehicle spare-parts sales, car inspections, and car listing systems using Next.js, NestJS, secure payments, and containerized microservices.",
    },
    {
      title: "Frontend Developer",
      company: "VirtVictory Games (Remote)",
      date: "Mar 2023",
      month: "Nov 2023",
      detail:
        "Developed interactive Spinner and Keno-style browser games with provably fair logic, real-time animations, and high-performance rendering using WebGL and Three.js.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [experiences.length])

  // Only use grayscale/black/white theme variables
  return (
    <div
      id="timeline"
      className="min-h-[100vh] flex items-center justify-center bg-[radial-gradient(circle_at_right,theme(colors.foreground/4%),transparent_40%),theme(colors.background)] px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-16 w-full overflow-x-hidden"
      style={{ color: `hsl(var(--foreground))` }}
    >
      <div
        className="w-full max-w-4xl bg-card/95 border border-muted-foreground/10 rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 md:gap-8 items-center relative p-2 xs:p-4 sm:p-8"
      >
        {/* LEFT – PROJECT DETAILS CARD */}
        <div className="flex flex-col items-end justify-center w-full min-w-0">
          <div className="bg-muted/10 border border-muted-foreground/20 rounded-xl backdrop-blur p-3 xs:p-4 w-full min-h-[100px] xs:min-h-[120px] flex flex-col justify-between shadow-md">
            <div>
              <div className="uppercase text-[11px] xs:text-xs font-bold tracking-wider text-foreground/90 mb-1 opacity-95">Role</div>
              <div className="text-base xs:text-lg sm:text-xl font-bold text-foreground mb-1 xs:mb-2 leading-snug break-words">{experiences[activeIndex].title}</div>
              <div className="text-xs xs:text-sm font-medium text-muted-foreground mb-2 xs:mb-3">{experiences[activeIndex].company}</div>
            </div>
            <div className="text-[11px] xs:text-xs text-muted-foreground/90 leading-relaxed pt-2 border-t border-muted-foreground/20 opacity-90">{experiences[activeIndex].detail}</div>
          </div>
        </div>

        {/* CENTER – ANIMATED TIMELINE */}
        <div className="relative flex items-center justify-center w-full h-[140px] xs:h-[180px] sm:h-[220px] md:h-[320px] min-w-0">
          {/* Double Curved Lines + Smooth Animated Node */}
          <svg width="90" height="180" viewBox="0 0 120 220" fill="none" className="absolute left-1/2 -translate-x-1/2 overflow-visible">
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
                <stop offset="30%" stopColor="hsl(var(--foreground))" stopOpacity="0.5" />
                <stop offset="50%" stopColor="hsl(var(--foreground))" stopOpacity="1" />
                <stop offset="70%" stopColor="hsl(var(--foreground))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                   <feMergeNode in="coloredBlur" />
                   <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Left Curve */}
            <path
              d="M 60 10 Q 30 160 60 310"
              stroke="url(#grad)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
            {/* Right Curve - "The Added Line" */}
            <path
              d="M 60 10 Q 90 160 60 310"
              stroke="url(#grad)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
            {/* Central Node Group with Smooth Transition */}
            <g 
              style={{ 
                transform: `translate(60px, ${30 + (activeIndex * 35)}px)`, 
                transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)" 
              }}
            >
              {/* Inner Core */}
              <circle r="6" fill="hsl(var(--foreground))" filter="url(#glow)" />
              {/* Pulse Ring 1 */}
              <circle r="12" stroke="hsl(var(--foreground))" strokeWidth="1.5" opacity="0.6" fill="none">
                 <animate attributeName="r" values="10;16;10" dur="3s" repeatCount="indefinite" />
                 <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
              </circle>
              {/* Pulse Ring 2 (Offset) */}
              <circle r="8" stroke="hsl(var(--foreground))" strokeWidth="1" opacity="0.4" fill="none">
                 <animate attributeName="r" values="8;24;8" dur="4s" repeatCount="indefinite" />
                 <animate attributeName="opacity" values="0.4;0;0.4" dur="4s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        </div>

        {/* RIGHT – DATE AND MONTH LIST */}
        <div className="flex flex-col gap-2 xs:gap-3 w-full min-w-0">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-left px-2 xs:px-3 py-1.5 xs:py-2 border-l-4 rounded transition-all duration-400 cursor-pointer w-full text-xs xs:text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                ${activeIndex === index
                  ? 'border-foreground text-foreground bg-foreground/10 font-bold'
                  : 'border-muted-foreground/30 text-muted-foreground hover:text-foreground hover:border-foreground/60'}
              `}
              style={{ background: activeIndex === index ? undefined : undefined }}
              tabIndex={0}
              aria-current={activeIndex === index ? 'true' : undefined}
              aria-label={`Show experience ${exp.title}`}
            >
              <div className="font-bold text-xs xs:text-xs sm:text-sm mb-0.5">{exp.date}</div>
              <div className="opacity-75 text-[10px] xs:text-[11px] sm:text-xs">{exp.month}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
