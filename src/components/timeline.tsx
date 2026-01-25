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

  return (
    <div
      style={{
        minHeight: "100vh",
       background: "radial-gradient(circle at right, rgba(34,197,94,0.06), transparent 40%), #1a1a1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "3rem 0.5rem",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          width: "100%",
          maxWidth: "850px",
          display: "grid",
          gridTemplateColumns: "300px 80px 220px",
          gap: "32px",
          alignItems: "center",
          position: "relative",
          boxShadow: "0 8px 32px 0 rgba(34,197,94,0.08)",
          borderRadius: "24px",
          background: "rgba(26,26,26,0.85)",
          border: "1.5px solid rgba(34,197,94,0.10)",
          padding: "32px 32px",
        }}
      >
        {/* LEFT – PROJECT DETAILS CARD */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginLeft: "0",
          }}
        >
          <div
            style={{
              background: "rgba(34,197,94,0.08)",
              border: "1.5px solid rgba(34,197,94,0.18)",
              borderRadius: "18px",
              padding: "18px 18px 18px 22px",
              backdropFilter: "blur(10px)",
              width: "100%",
              minHeight: "120px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 4px 24px 0 rgba(34,197,94,0.10)",
              transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#22c55e",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  opacity: 0.95,
                }}
              >
                Role
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  marginBottom: "10px",
                  lineHeight: 1.2,
                  transition: "all 0.45s ease",
                  color: "#fff",
                  letterSpacing: "0.01em",
                }}
              >
                {experiences[activeIndex].title}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#cbd5e1",
                  marginBottom: "14px",
                  transition: "all 0.45s ease",
                }}
              >
                {experiences[activeIndex].company}
              </div>
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#b6e7c9",
                lineHeight: 1.6,
                paddingTop: "10px",
                borderTop: "1px solid rgba(34,197,94,0.13)",
                transition: "all 0.45s ease",
                opacity: 0.92,
              }}
            >
              {experiences[activeIndex].detail}
            </div>
          </div>
        </div>

        {/* CENTER – ANIMATED TIMELINE */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "320px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "visible",
          }}
        >
          {/* Double Curved Lines + Smooth Animated Node */}
          <svg width="120" height="320" viewBox="0 0 120 320" fill="none" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", overflow: "visible" }}>
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
                <stop offset="30%" stopColor="#22c55e" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#22c55e" stopOpacity="1" />
                <stop offset="70%" stopColor="#22c55e" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
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
                transform: `translate(60px, ${40 + (activeIndex * 55)}px)`, 
                transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)" 
              }}
            >
              {/* Inner Core */}
              <circle r="6" fill="#22c55e" filter="url(#glow)" />
              
              {/* Pulse Ring 1 */}
              <circle r="12" stroke="#22c55e" strokeWidth="1.5" opacity="0.6" fill="none">
                 <animate attributeName="r" values="10;16;10" dur="3s" repeatCount="indefinite" />
                 <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
              </circle>
              
              {/* Pulse Ring 2 (Offset) */}
              <circle r="8" stroke="#22c55e" strokeWidth="1" opacity="0.4" fill="none">
                 <animate attributeName="r" values="8;24;8" dur="4s" repeatCount="indefinite" />
                 <animate attributeName="opacity" values="0.4;0;0.4" dur="4s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        </div>

        {/* RIGHT – DATE AND MONTH LIST */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            color: "#94a3b8",
            fontSize: "12px",
            paddingRight: "0",
            width: "100%",
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                padding: "8px 12px 8px 14px",
                borderLeft: activeIndex === index ? "3px solid #22c55e" : "2px solid rgba(34,197,94,0.15)",
                color: activeIndex === index ? "#22c55e" : "#94a3b8",
                fontWeight: activeIndex === index ? 700 : 400,
                background: activeIndex === index ? "linear-gradient(90deg, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.02) 100%)" : "transparent",
                borderRadius: "4px",
                width: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#22c55e"
                e.currentTarget.style.borderLeftColor = "#22c55e"
              }}
              onMouseLeave={(e) => {
                if (activeIndex !== index) {
                  e.currentTarget.style.color = "#94a3b8"
                  e.currentTarget.style.borderLeftColor = "rgba(34,197,94,0.15)"
                }
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "2px" }}>{exp.date}</div>
              <div style={{ fontSize: "12px", opacity: 0.75 }}>{exp.month}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
