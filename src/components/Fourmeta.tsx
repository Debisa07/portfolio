import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Fourmeta = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);

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

  return (
    <section id="work" ref={sectionRef} className="section-padding overflow-hidden">
      <div className="container-custom border-t border-border/60 pt-16">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Label & Heading */}
          <motion.div style={{ y: headingY }}>
            <motion.span
              className="label-text mb-8 block"
              variants={itemVariants}
            >
              Selected work
            </motion.span>

            <motion.h2
              className="text-display font-grotesk font-medium text-foreground max-w-xl leading-[0.92]"
              variants={itemVariants}
            >
              A selection of projects showcasing backend systems and mobile apps.
            </motion.h2>
          </motion.div>

          {/* Right Column - Description */}
          <div className="flex flex-col justify-end">
            <motion.p
              className="text-subheading text-muted-foreground font-light leading-[1.65] mb-10 max-w-2xl"
              variants={itemVariants}
            >
              Highlights include cross-platform Flutter work, backend APIs, and cloud deployments. See more on my GitHub and LinkedIn.
            </motion.p>

            <motion.p
              className="text-body text-muted-foreground/60 leading-relaxed mb-12 max-w-xl"
              variants={itemVariants}
            >
              Whether your project is small and focused or demands a full team effort, we are ready to meet the challenge head-on.
            </motion.p>

            <motion.div
              className="flex items-center gap-4 mb-12"
              variants={itemVariants}
            >
              <span className="text-small text-muted-foreground/60">GitHub: </span>
              <motion.a
                href="https://github.com/Debisa07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small text-foreground/80 hover:text-foreground transition-colors duration-500 relative group"
                whileHover={{ x: 4 }}
              >
                github.com/Debisa07
                <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/30 group-hover:bg-foreground transition-colors duration-500" />
              </motion.a>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="/Debisa_Abebe_Tulu_Resume.pdf"
              className="inline-flex items-center gap-3 text-small uppercase tracking-widest text-foreground border border-foreground/20 px-7 py-4 hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-500 w-fit"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              View resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Fourmeta;