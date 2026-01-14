import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
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
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="container-custom border-t border-border pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Label & Heading */}
          <div>
            <motion.span
              className="label-text mb-6 block"
              variants={getVariants(0)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              About me
            </motion.span>
            
            <motion.h2
              className="text-display font-grotesk font-medium text-foreground max-w-xl"
              variants={getVariants(0.1)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Senior consultant with expertise in tech, marketing, design, and AI.
            </motion.h2>
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-col justify-end">
            <motion.p
              className="text-subheading text-muted-foreground font-light leading-relaxed mb-10 max-w-2xl"
              variants={getVariants(0.2)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              I bring a dynamic approach to every project, delivering comprehensive solutions
that drive undeniable success. With a track record of launching impactful
products and leading transformative initiatives, I've worked with clients across
diverse sectors, consistently exceeding expectations.
            </motion.p>

            <motion.p
              className="label-text leading-relaxed mb-6"
              variants={getVariants(0.3)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              How I can help you
            </motion.p>

            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-body text-muted-foreground/80 mb-12 max-w-2xl"
              variants={getVariants(0.35)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/70" />
                Strategy & positioning
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/70" />
                Brand & identity systems
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/70" />
                Digital product experiences
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/70" />
                AI-driven growth initiatives
              </li>
            </motion.ul>

            {/* Stats */}
            <motion.div
              className="pt-8 border-t border-border"
              variants={getVariants(0.4)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <span className="label-text mb-6 block">Proved myself with</span>
              <div className="grid grid-cols-3 gap-8">
              <div>
                <span className="text-display font-grotesk font-medium text-foreground block mb-2">
                  15+
                </span>
                <span className="label-text">Years of experience</span>
              </div>
              <div>
                <span className="text-display font-grotesk font-medium text-foreground block mb-2">
                  142+
                </span>
                <span className="label-text">Clients</span>
              </div>
              <div>
                <span className="text-display font-grotesk font-medium text-foreground block mb-2">
                  56+
                </span>
                <span className="label-text">Projects</span>
              </div>
              </div>
              <p className="text-small text-muted-foreground/80 mt-6">
                The numbers speak for themselves....
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
