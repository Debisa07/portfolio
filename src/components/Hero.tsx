import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects for cinematic feel
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Staggered animation config
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        delay: 0.4 + i * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const headlineWords = ["Software", "Engineer"];

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-start overflow-hidden pt-32 md:pt-40"
    >
      <motion.div 
        className="container-custom"
        style={{ opacity }}
      >
        <div className="flex items-start gap-6 md:gap-12">
          {/* Decorative Numbers */}
          <motion.div 
            className="hidden md:flex flex-col items-center gap-5 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((num, i) => (
              <motion.span 
                key={num}
                className="text-small text-muted-foreground/40 tracking-[0.4em]"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.6 + i * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94] as const
                }}
              >
                {num}
              </motion.span>
            ))}
            <motion.div 
              className="w-px h-16 bg-gradient-to-b from-border to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>

          <motion.div 
            className="max-w-5xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Label */}
            <motion.span
              className="label-text mb-8 block"
              variants={itemVariants}
            >
              Hi, I'm Debisa Abebe Tulu
            </motion.span>

            {/* Main Headline with Parallax */}
            <motion.h1
              className="text-hero font-grotesk font-medium text-foreground leading-[0.88] mb-10"
              style={{ y: titleY }}
            >
              {headlineWords.map((word, wordIndex) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    custom={wordIndex}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            {/* Description with Parallax */}
            <motion.p
              className="text-subheading text-muted-foreground max-w-2xl font-light leading-[1.6] mb-10"
              style={{ y: subtitleY }}
              variants={itemVariants}
            >
              Software engineer focused on backend systems and cross-platform mobile apps. I build reliable services and delightful user experiences.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-3 text-small uppercase tracking-widest text-foreground border border-foreground/20 px-7 py-4 hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact me
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-16 left-6 md:left-12 flex items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      >
        <motion.div
          className="flex flex-col items-center gap-4"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1] as const,
          }}
        >
          <span className="label-text text-xs text-muted-foreground/60">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
        </motion.div>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hidden md:inline-flex text-small text-muted-foreground/50 uppercase tracking-[0.4em] hover:text-foreground transition-colors duration-500"
          whileHover={{ y: -2 }}
        >
          Back to top
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
