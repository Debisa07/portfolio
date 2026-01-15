import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-start overflow-hidden pt-28 md:pt-32">
      <div className="container-custom">
        <div className="flex items-start gap-6 md:gap-10">
          <div className="hidden md:flex flex-col items-center gap-4 pt-2">
            <span className="text-small text-muted-foreground tracking-[0.4em]">9</span>
            <span className="text-small text-muted-foreground tracking-[0.4em]">8</span>
            <span className="text-small text-muted-foreground tracking-[0.4em]">7</span>
            <span className="text-small text-muted-foreground tracking-[0.4em]">6</span>
            <span className="text-small text-muted-foreground tracking-[0.4em]">5</span>
            <span className="text-small text-muted-foreground tracking-[0.4em]">4</span>
            <span className="text-small text-muted-foreground tracking-[0.4em]">3</span>
            <span className="text-small text-muted-foreground tracking-[0.4em]">2</span>
            <span className="text-small text-muted-foreground tracking-[0.4em]">1</span>
            <div className="w-px h-12 bg-border" />
          </div>

          <div className="max-w-4xl">
          <motion.span
            className="label-text mb-6 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I’m Debisa Abebe Tulu
          </motion.span>

          {/* Main Headline */}
          <motion.h1
            className="text-hero font-grotesk font-medium text-foreground leading-[0.9] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Software
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Engineer
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-subheading text-muted-foreground max-w-2xl font-light leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Software engineer focused on backend systems and cross-platform mobile apps. I build reliable services and delightful user experiences.
          </motion.p>

          <motion.button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-3 text-small uppercase tracking-widest text-foreground border border-foreground/30 px-6 py-3 hover:border-foreground transition-colors"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Contact me
          </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-3"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="label-text text-xs">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hidden md:inline-flex text-small text-muted-foreground uppercase tracking-[0.4em] hover:text-foreground transition-colors"
        >
          Back to top
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
