import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Fourmeta = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
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

  return (
    <section id="work" ref={sectionRef} className="section-padding-lg overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Title & Logo */}
          <motion.div 
            className="lg:col-span-5"
            style={{ y: headingY }}
          >
            {/* Title with underline like reference */}
            <motion.a
              href="https://github.com/Debisa07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-heading font-grotesk font-medium text-foreground border-b border-foreground/60 pb-1 hover:border-foreground transition-colors duration-500"
              variants={itemVariants}
            >
              GitHub.com/Debisa07
            </motion.a>

            {/* Logo/Icon placeholder */}
            <motion.div 
              className="mt-8 text-muted-foreground/40"
              variants={itemVariants}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Right Column - Quote & Image */}
          <motion.div 
            className="lg:col-span-6 lg:col-start-7"
            style={{ y: imageY }}
          >
            {/* Quote text like reference */}
            <motion.p
              className="text-subheading text-muted-foreground/80 font-light leading-[1.5] mb-12"
              variants={itemVariants}
            >
              When you choose to work with me. You gain my personal commitment to translating your vision into a reality.
            </motion.p>

            {/* Image placeholder with play button */}
            <motion.div
              className="aspect-[4/5] bg-muted/20 overflow-hidden relative group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-20 h-20 rounded-full border border-foreground/20 flex items-center justify-center bg-background/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.4)" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-0 h-0 border-l-[14px] border-l-foreground/80 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom description */}
        <motion.div 
          className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            className="lg:col-span-6 lg:col-start-4 text-body text-muted-foreground/60 leading-[1.8]"
            variants={itemVariants}
          >
            Founder of innovative solutions: I lead an incredible approach that leverages the collective expertise of experienced developers, engineers, and architects. Together, we bring your vision to life and drive unprecedented success.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Fourmeta;