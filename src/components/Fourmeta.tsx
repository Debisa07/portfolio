import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Fourmeta = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const getVariants = (delay: number) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  });

  return (
    <section id="fourmeta" ref={sectionRef} className="section-padding">
      <div className="container-custom border-t border-border pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Label & Heading */}
          <div>
            <motion.span
              className="label-text mb-6 block"
              variants={getVariants(0)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              When you choose to work with my team
            </motion.span>

            <motion.h2
              className="text-display font-grotesk font-medium text-foreground max-w-xl"
              variants={getVariants(0.1)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              You gain my personal commitment to translating your vision into a reality.
            </motion.h2>
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-col justify-end">
            <motion.p
              className="text-subheading text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl"
              variants={getVariants(0.2)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Founder of Fourmeta: I lead an incredible team that leverages the collective
expertise of experienced designers, developers, project managers, and marketing
specialists. Together, we will bring your vision to life and drive unprecedented
success.
            </motion.p>

            <motion.p
              className="text-body text-muted-foreground/70 leading-relaxed mb-10 max-w-xl"
              variants={getVariants(0.3)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Whether your project is small and focused or demands a full team effort, we are
ready to meet the challenge head-on.
            </motion.p>

            <motion.div
              className="flex items-center gap-4 mb-10"
              variants={getVariants(0.35)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <img
                src="https://cdn.prod.website-files.com/642ab9cb69d01c2bbd371806/642d36bf75d75ba20d68e20d_fourmeta.svg"
                alt="Fourmeta"
                className="h-6"
              />
              <span className="text-small text-muted-foreground">Fourmeta.com</span>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="https://fourmeta.com/"
              className="inline-flex items-center gap-3 text-small uppercase tracking-widest text-foreground border border-foreground/30 px-5 py-3 hover:border-foreground transition-colors w-fit"
              variants={getVariants(0.4)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              Discover Fourmeta
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fourmeta;