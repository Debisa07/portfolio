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
        padding: "3rem 1.5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1180px",
          display: "grid",
          gridTemplateColumns: "320px 1fr 260px",
          gap: "40px",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* LEFT – PROJECT DETAILS CARD */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginLeft: "18px",
          }}
        >
          <div
            style={{
              background: "rgba(26,26,26,0.6)",
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: "14px",
              padding: "28px 30px",
              backdropFilter: "blur(12px)",
              width: "100%",
              minHeight: "240px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#22c55e",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  opacity: 0.9,
                }}
              >
                Role
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  marginBottom: "14px",
                  lineHeight: 1.3,
                  transition: "all 0.45s ease",
                }}
              >
                {experiences[activeIndex].title}
              </div>

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#cbd5e1",
                  marginBottom: "20px",
                  transition: "all 0.45s ease",
                }}
              >
                {experiences[activeIndex].company}
              </div>
            </div>

            <div
              style={{
                fontSize: "13px",
                color: "#94a3b8",
                lineHeight: 1.7,
                paddingTop: "16px",
                borderTop: "1px solid rgba(34,197,94,0.15)",
                transition: "all 0.45s ease",
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
            height: "420px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Curved Line */}
          <svg width="140" height="420" viewBox="0 0 140 420" fill="none" style={{ position: "absolute" }}>
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
                <stop offset="50%" stopColor="#22c55e" stopOpacity="1" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 70 0 C 70 120, 20 170, 20 225 C 20 280, 70 330, 70 420"
              stroke="url(#grad)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

        

          <style>{`
            @keyframes pulse-node {
              0%, 100% {
                box-shadow: 0 0 40px rgba(34,197,94,0.4), inset 0 0 18px rgba(34,197,94,0.08);
                transform: scale(1);
              }
              50% {
                box-shadow: 0 0 56px rgba(34,197,94,0.55), inset 0 0 26px rgba(34,197,94,0.12);
                transform: scale(1.015);
              }
            }

            @keyframes arrow-float {
              0%, 100% {
                transform: translateY(0px);
                opacity: 0.85;
              }
              50% {
                transform: translateY(-10px);
                opacity: 1;
              }
            }
          `}</style>
        </div>

        {/* RIGHT – DATE AND MONTH LIST */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "42px",
            color: "#94a3b8",
            fontSize: "13px",
            paddingRight: "24px",
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                padding: "14px 0",
                borderLeft: activeIndex === index ? "3px solid #22c55e" : "2px solid rgba(34,197,94,0.15)",
                paddingLeft: "18px",
                color: activeIndex === index ? "#22c55e" : "#94a3b8",
                fontWeight: activeIndex === index ? 600 : 400,
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
              <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "6px" }}>{exp.date}</div>
              <div style={{ fontSize: "14px", opacity: 0.75 }}>{exp.month}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
