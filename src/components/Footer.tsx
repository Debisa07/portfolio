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

  const linkHoverVariants = {
    initial: { y: 0, opacity: 0.7 },
    hover: { 
      y: -3, 
      opacity: 1,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  return (
    <footer id="contact" ref={footerRef} className="section-padding-lg overflow-hidden bg-background transition-colors duration-700">
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
              {"Media for daily".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.3em]"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2 + i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                insights.
              </motion.span>
            </h2>
          </motion.div>
          <motion.div className="lg:col-span-4 lg:col-start-9" variants={itemVariants}>
            <div className="flex gap-10 text-small uppercase tracking-[0.2em] text-muted-foreground/70">
              {[
                { href: "https://www.linkedin.com/in/debisa-abebe-tu/", label: "LinkedIn" },
                { href: "https://www.instagram.com/", label: "Instagram" },
                { href: "https://medium.com/", label: "Medium" }
              ].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative border-b border-foreground/20 hover:text-foreground hover:border-foreground transition-colors duration-500 font-grotesk font-normal"
                  variants={linkHoverVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Media Grid with immersive hover */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={itemVariants}
        >
          {[project1, project2, project3].map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden image-reveal group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.9, delay: 0.2 + index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src={image} 
                alt="Media" 
                className="w-full h-full object-cover grayscale transition-all duration-700"
                whileHover={{ scale: 1.05, filter: "grayscale(0.5)" }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-start md:items-center pt-16 mt-16 border-t border-border/30 gap-6"
        >
          <motion.p 
            className="text-small text-muted-foreground/40 font-grotesk font-normal"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            © 2026 Debisa Abebe Tulu. All rights reserved.
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
