import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax for editorial feel
  const contentY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.4 + i * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const services = [
    "Backend Development (APIs, services)",
    "Cross-platform Mobile (Flutter)",
    "Cloud deployments & DevOps",
    "Python / Node.js / Javascript",
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding overflow-hidden">
      <div className="container-custom border-t border-border/60 pt-16">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Label & Heading */}
          <motion.div style={{ y: contentY }}>
            <motion.span
              className="label-text mb-8 block"
              variants={itemVariants}
            >
              About me
            </motion.span>
            
            <motion.h2
              className="text-display font-grotesk font-medium text-foreground max-w-xl leading-[0.92]"
              variants={itemVariants}
            >
              Software engineer specializing in backend systems and cross-platform mobile applications.
            </motion.h2>
          </motion.div>

          {/* Right Column - Description */}
          <div className="flex flex-col justify-end">
            <motion.p
              className="text-subheading text-muted-foreground font-light leading-[1.65] mb-12 max-w-2xl"
              variants={itemVariants}
            >
              I build backend services and cross-platform mobile apps. Recent work includes engineering a cross-platform Flutter application (2024) and contributing as a backend developer at Pazion Ethiopia in Addis Ababa.
            </motion.p>

            <motion.p
              className="label-text leading-relaxed mb-8"
              variants={itemVariants}
            >
              How I can help you
            </motion.p>

            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-body text-muted-foreground/80 mb-14 max-w-2xl"
              variants={containerVariants}
            >
              {services.map((service, i) => (
                <motion.li 
                  key={service}
                  className="flex items-center gap-4 group"
                  custom={i}
                  variants={listItemVariants}
                >
                  <motion.span 
                    className="w-1.5 h-1.5 rounded-full bg-foreground/50 group-hover:bg-foreground transition-colors duration-500"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="group-hover:text-foreground transition-colors duration-500">
                    {service}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Stats */}
            <motion.div
              className="pt-10 border-t border-border/60"
              variants={itemVariants}
            >
              <span className="label-text mb-8 block">Selected highlights</span>
              <div className="flex flex-col gap-5 max-w-2xl">
                {[
                  "Engineered a cross-platform Flutter application (2024)",
                  "Backend developer at Pazion Ethiopia, Addis Ababa",
                  "Active open-source contributions: https://github.com/Debisa07",
                ].map((highlight, i) => (
                  <motion.div 
                    key={i}
                    className="text-body text-muted-foreground/70 hover:text-muted-foreground transition-colors duration-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.7, 
                      delay: 0.6 + i * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94] as const
                    }}
                  >
                    • {highlight}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
