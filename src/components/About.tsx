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
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Label & Heading */}
          <div>
            <motion.span
              className="label-text mb-6 block"
              variants={getVariants(0)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              About
            </motion.span>
            
            <motion.h2
              className="text-display font-grotesk font-medium text-foreground"
              variants={getVariants(0.1)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Design is a bridge between imagination and reality
            </motion.h2>
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-col justify-end">
            <motion.p
              className="text-subheading text-muted-foreground font-light leading-relaxed mb-8"
              variants={getVariants(0.2)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              We are a creative studio dedicated to crafting meaningful 
              digital experiences. Our approach combines strategic thinking 
              with artistic vision to create work that resonates.
            </motion.p>

            <motion.p
              className="text-body text-muted-foreground/70 leading-relaxed mb-12"
              variants={getVariants(0.3)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Founded on the principle that great design emerges from the 
              intersection of form and function, we partner with brands 
              who share our passion for excellence and innovation.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
              variants={getVariants(0.4)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div>
                <span className="text-display font-grotesk font-medium text-foreground block mb-2">
                  50+
                </span>
                <span className="label-text">Projects</span>
              </div>
              <div>
                <span className="text-display font-grotesk font-medium text-foreground block mb-2">
                  8
                </span>
                <span className="label-text">Years</span>
              </div>
              <div>
                <span className="text-display font-grotesk font-medium text-foreground block mb-2">
                  12
                </span>
                <span className="label-text">Awards</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
