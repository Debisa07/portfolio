// "use client"

// import { motion } from "framer-motion"
// import { useMemo, useState } from "react"

// interface TechItem {
//   name: string
//   category: string
//   logo?: string
// }

// const techStack: TechItem[] = [
//   // Frontend
//   { name: "React", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
//   { name: "Next.js", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
//   { name: "Svelte", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" },
//   { name: "SvelteKit", category: "Frontend", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/svelte.svg" },
//   { name: "Vue.js", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
//   { name: "Angular", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" },
//   { name: "React Native", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
//   { name: "Flutter", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
//   { name: "TypeScript", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
//   { name: "JavaScript", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
//   { name: "TailwindCSS", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
//   { name: "Figma", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },

//   // Backend
//   { name: "Node.js", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
//   { name: "NestJS", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
//   { name: "Python", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
//   { name: "FastAPI", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
//   { name: "Django", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
//   { name: "Flask", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
//   { name: "GraphQL", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
//   { name: "RESTful APIs", category: "Backend", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openapiinitiative.svg" },
//   { name: "PostgreSQL", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
//   { name: "MongoDB", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
//   { name: "Redis", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },

//   // AI/ML & Automations
//   { name: "TensorFlow", category: "AI/ML & Automations", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
//   { name: "PyTorch", category: "AI/ML & Automations", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
//   { name: "Scikit-Learn", category: "AI/ML & Automations", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/scikitlearn.svg" },
//   { name: "OpenCV", category: "AI/ML & Automations", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/opencv.svg" },
//   { name: "Celery", category: "AI/ML & Automations", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/celery.svg" },

//   // DevOps/Cloud
//   { name: "AWS", category: "DevOps/Cloud", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg" },
//   { name: "Docker", category: "DevOps/Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
//   { name: "Kubernetes", category: "DevOps/Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
//   { name: "Terraform", category: "DevOps/Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
//   { name: "Firebase", category: "DevOps/Cloud", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg" },
//   { name: "Stripe", category: "DevOps/Cloud", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stripe.svg" },
//   { name: "GitHub Actions", category: "DevOps/Cloud", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/githubactions.svg" },
//   { name: "JWT", category: "DevOps/Cloud" },
//   { name: "OAuth", category: "DevOps/Cloud" },

//   // Tools
//   { name: "Git", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
//   { name: "WebGL", category: "Tools", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/webgl.svg" },
//   { name: "Firebase FCM", category: "Tools", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg" },
//   { name: "Google Maps API", category: "Tools", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlemaps.svg" },
//   { name: "Vite", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg" },
//   { name: "Vitest", category: "Tools", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vitest.svg" },
//   { name: "Bun", category: "Tools", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bun.svg" },
// ]

// export default function TechStack() {
//   const categories = useMemo(() => {
//     const set = Array.from(new Set(techStack.map((t) => t.category)))
//     const preferred = ["Frontend", "Backend", "AI/ML & Automations", "DevOps/Cloud", "Tools"]
//     return set.sort((a, b) => {
//       const ia = preferred.indexOf(a)
//       const ib = preferred.indexOf(b)
//       if (ia === -1 && ib === -1) return a.localeCompare(b)
//       if (ia === -1) return 1
//       if (ib === -1) return -1
//       return ia - ib
//     })
//   }, [])

//   const [activeTab, setActiveTab] = useState<string>(categories[0] ?? "Frontend")

//   const filteredTech = useMemo(
//     () => techStack.filter((tech) => tech.category === activeTab),
//     [activeTab]
//   )

//   return (
//     <section
//       id="tech-stack"
//       className="relative py-4 xs:py-6 sm:py-8 md:py-10 bg-background w-full overflow-x-hidden"
//       style={{
//         background:
//           "radial-gradient(circle at right, hsl(var(--foreground)/0.04), transparent 40%), hsl(var(--background))",
//       }}
//     >
//       {/* Ambient glows to match Timeline aesthetics */}
//       <div className="pointer-events-none absolute top-0 right-0 w-[120px] xs:w-[160px] sm:w-[240px] md:w-[320px] h-[120px] xs:h-[160px] sm:h-[240px] md:h-[320px] bg-foreground/10 rounded-full blur-[40px] xs:blur-[60px] sm:blur-[80px] -translate-y-1/2 translate-x-1/4" />
//       <div className="pointer-events-none absolute bottom-0 left-0 w-[120px] xs:w-[160px] sm:w-[240px] md:w-[320px] h-[120px] xs:h-[160px] sm:h-[240px] md:h-[320px] bg-foreground/10 rounded-full blur-[40px] xs:blur-[60px] sm:blur-[80px] translate-y-1/3 -translate-x-1/4" />
//       <div className="max-w-full sm:max-w-[850px] mx-auto px-2 xs:px-3 sm:px-4 md:px-6 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-3 xs:mb-4 sm:mb-6"
//         >
//           <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
//             Tech Stack
//           </h2>
//           <p className="mt-1 xs:mt-2 text-muted-foreground text-xs xs:text-sm sm:text-base">
//             Modern tools I use to design, build, and scale applications
//           </p>
//         </motion.div>


//         {/* Tabs - single minimal slider with fade masks */}
//         <div className="relative flex justify-center mb-3 xs:mb-4 sm:mb-6">
//           {/* Left fade mask */}
//           <div className="pointer-events-none absolute left-0 top-0 h-full w-4 z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />
//           {/* Right fade mask */}
//           <div className="pointer-events-none absolute right-0 top-0 h-full w-4 z-10 bg-gradient-to-l from-background via-background/80 to-transparent" />
//           <div className="w-full max-w-full">
//             <div
//               className="flex gap-0.5 sm:gap-0.5 rounded-full bg-background/60 backdrop-blur border border-border py-0.5 pl-1 pr-1 sm:pl-2 sm:pr-2 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory [scroll-padding-left:0.25rem] [scroll-padding-right:0.25rem] max-w-full"
//               style={{ WebkitOverflowScrolling: 'touch' }}
//             >
//               {categories.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`
//                     snap-start shrink-0
//                     px-1 xs:px-1.5 sm:px-2
//                     py-0.5 xs:py-0.5 sm:py-0.5
//                     text-[8px] xs:text-[9px] sm:text-xs
//                     leading-none
//                     font-medium rounded-full
//                     transition-all
//                     focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
//                     ${
//                       activeTab === tab
//                         ? "bg-foreground/90 text-background shadow-md"
//                         : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
//                     }
//                   `}
//                   tabIndex={0}
//                   aria-pressed={activeTab === tab}
//                   aria-label={`Show ${tab} technologies`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Grid */}
//         <motion.div
//           layout
//           className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1.5 xs:gap-2 sm:gap-3 w-full"
//         >
//           {filteredTech.map((tech) => (
//             <motion.div
//               key={tech.name}
//               layout
//               initial={{ opacity: 0, scale: 0.94 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               whileHover={{ y: -6 }}
//               transition={{ type: "spring", stiffness: 240, damping: 20 }}
//               className="group relative rounded-xl border border-border/60 bg-background/50 backdrop-blur p-1.5 xs:p-2 sm:p-3 shadow-sm hover:shadow-xl min-w-0"
//             >
//               {/* Glow */}
//               <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-foreground/10 via-transparent to-transparent" />

//               {/* Hover shimmer sweep */}
//               <motion.div
//                 className="absolute inset-y-0 -left-1/3 w-1/3 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
//                 initial={{ x: "-40%", opacity: 0 }}
//                 whileHover={{ x: "140%", opacity: 1 }}
//                 transition={{ duration: 1.6, ease: "easeOut" }}
//               />

//               <div className="relative flex flex-col items-center gap-1 xs:gap-1.5 sm:gap-2">
//                 <img
//                   src={tech.logo || "/placeholder.svg"}
//                   alt={tech.name}
//                   className="w-6 xs:w-7 sm:w-10 h-6 xs:h-7 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
//                   draggable="false"
//                   loading="lazy"
//                 />
//                 <p className="text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-wide text-center break-words max-w-[70px] xs:max-w-[80px]">
//                   {tech.name}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }
