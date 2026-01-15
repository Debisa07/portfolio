import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Name animation - word by word
  const nameWords = ["Debisa", "Abebe"];

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden"
    >
      <motion.div 
        className="container-custom h-full min-h-[100svh] flex flex-col justify-center pt-24 pb-32"
        style={{ opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          
          {/* Left side - Name with italic styling like reference */}
          <motion.div 
            className="lg:col-span-4 lg:col-start-1 order-2 lg:order-1"
            style={{ y: textY }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="overflow-hidden">
              {nameWords.map((word, index) => (
                <motion.h2
                  key={word}
                  className="text-display font-grotesk font-light italic text-foreground leading-[1.1]"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.4 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  }}
                >
                  {word}
                </motion.h2>
              ))}
            </div>
          </motion.div>

          {/* Center - Portrait image */}
          <motion.div 
            className="lg:col-span-5 lg:col-start-4 order-1 lg:order-2 relative"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.4, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94] as const 
            }}
          >
            <div className="aspect-[3/4] bg-muted/30 overflow-hidden">
              {/* Placeholder for portrait - using gradient */}
              <motion.div 
                className="w-full h-full bg-gradient-to-br from-muted/50 via-muted/30 to-background relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Abstract portrait representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-b from-muted/40 to-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - empty for balance */}
          <div className="lg:col-span-3 order-3 hidden lg:block" />
        </div>

        {/* Bottom section - Large headline */}
        <motion.div 
          className="mt-12 lg:mt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-hero font-grotesk font-medium text-foreground leading-[0.9] tracking-[-0.02em]"
            variants={itemVariants}
          >
            <span className="block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.3,
                  delay: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
              >
                Software Engineer
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-body text-muted-foreground/60 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            Hi, I'm Debisa Abebe, a multi-disciplinary software engineer focused on backend systems and cross-platform mobile applications.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
