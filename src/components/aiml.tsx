"use client"

type Experience = {
  date: string
  title: string
  company: string
  description: string
}

const experiences: Experience[] = [
  {
    date: "Mar 2025 – Present",
    title: "Full-Stack Developer",
    company: "Maleda Tour & Travel",
    description:
      "Leading the development of a cross-platform Flutter application with AI-powered chatbots, data-driven destination recommendations, and real-time location services.",
  },
  {
    date: "Jan 2025 – Aug 2025",
    title: "Backend Developer",
    company: "OHUB_ET (Remote)",
    description:
      "Built a full-featured consulting and scholarship opportunities platform with secure user onboarding, role-based access control, and scalable backend services.",
  },
  {
    date: "Feb 2024 – Oct 2024",
    title: "MERN / NestJS Developer",
    company: "Light Technology",
    description:
      "Delivered a production-grade real estate platform using React, Next.js (SSR/ISR), and NestJS, integrating AI-driven recommendations and optimized data access with MongoDB, Redis, and asynchronous background processing.",
  },
  {
    date: "Jun 2024 – Dec 2024",
    title: "Full-Stack Developer",
    company: "SalzorParts (Remote)",
    description:
      "Built an end-to-end automotive platform for vehicle spare-parts sales, car inspections, and car listing systems using Next.js, NestJS, secure payments, and containerized microservices.",
  },
  {
    date: "Mar 2023 – Nov 2023",
    title: "Frontend Developer",
    company: "VirtVictory Games (Remote)",
    description:
      "Developed interactive Spinner and Keno-style browser games with provably fair logic, real-time animations, and high-performance rendering using WebGL and Three.js.",
  },
  {
    date: "Jan 2023 – Sep 2023",
    title: "Full-Stack Developer",
    company: "Medi Lights",
    description:
      "Architected and delivered an integrated POS and ERP system supporting inventory, sales, reporting, and financial operations with real-time dashboards.",
  },
]

export default function Timeline() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000000",
        color: "#e5e7eb",
        display: "flex",
        justifyContent: "center",
        padding: "80px 24px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1100px" }}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "200px 80px 1fr",
              gap: "24px",
              marginBottom: "56px",
              alignItems: "flex-start",
            }}
          >
            {/* LEFT – DATE */}
            <div
              style={{
                textAlign: "right",
                color: "#9ca3af",
                fontSize: "14px",
                paddingTop: "4px",
              }}
            >
              {exp.date}
            </div>

            {/* CENTER – TIMELINE */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: -56,
                  width: "2px",
                  background:
                    "linear-gradient(to bottom, transparent, #22c55e, transparent)",
                }}
              />

              {/* Node */}
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "#000",
                  border: "2px solid #22c55e",
                  boxShadow: "0 0 12px rgba(34,197,94,0.6)",
                  zIndex: 1,
                }}
              />
            </div>

            {/* RIGHT – CONTENT */}
            <div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                {exp.title}
              </div>
              <div
                style={{
                  color: "#22c55e",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                {exp.company}
              </div>
              <p
                style={{
                  color: "#9ca3af",
                  lineHeight: 1.6,
                  fontSize: "14px",
                  maxWidth: "640px",
                }}
              >
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
