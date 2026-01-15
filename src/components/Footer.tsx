import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 40 },
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
    <footer id="contact" ref={footerRef} className="section-padding-lg overflow-hidden">
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Headline + Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <motion.div className="lg:col-span-8" variants={itemVariants}>
            <h2 className="text-display font-grotesk font-normal text-foreground leading-[0.92]">
              Media for daily
              <br />
              insights.
            </h2>
          </motion.div>
          <motion.div className="lg:col-span-4 lg:col-start-9" variants={itemVariants}>
            <div className="flex gap-10 text-small uppercase tracking-[0.2em] text-muted-foreground/70">
              <a
                href="https://www.linkedin.com/in/debisa-abebe-tu/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-foreground/30 hover:text-foreground hover:border-foreground transition-colors duration-500"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-foreground/30 hover:text-foreground hover:border-foreground transition-colors duration-500"
              >
                Instagram
              </a>
              <a
                href="https://medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-foreground/30 hover:text-foreground hover:border-foreground transition-colors duration-500"
              >
                Medium
              </a>
            </div>
          </motion.div>
        </div>

        {/* Media Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={itemVariants}
        >
          {[project1, project2, project3].map((image, index) => (
            <motion.div
              key={image}
              className="relative overflow-hidden image-reveal"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.9, delay: 0.2 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img src={image} alt="Media" className="w-full h-full object-cover grayscale" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-start md:items-center pt-16 mt-16 border-t border-border/30 gap-6"
        >
          <p className="text-small text-muted-foreground/40">
            © 2026 Debisa Abebe Tulu. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
