import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

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
        {/* Newsletter Section - Like reference screenshot 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          {/* Left - Big headline */}
          <motion.div 
            className="lg:col-span-5"
            variants={itemVariants}
          >
            <h2 className="text-display font-grotesk font-medium text-foreground leading-[0.95] italic">
              Join my<br />newsletter!
            </h2>
          </motion.div>

          {/* Right - Form */}
          <motion.div 
            className="lg:col-span-5 lg:col-start-8 flex flex-col justify-end"
            variants={itemVariants}
          >
            <p className="text-body text-muted-foreground/60 mb-8">
              Monthly updates, special offers, business news and more!
            </p>
            
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-0 py-4 bg-transparent border-b border-border/60 text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-foreground/40 transition-all duration-500 text-body"
              />
              <motion.button
                className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground transition-colors duration-500"
                whileHover={{ x: 4 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-border/30"
          variants={itemVariants}
        >
          <div>
            <span className="text-small text-muted-foreground/50 mb-4 block tracking-wider">Location</span>
            <div className="text-body text-foreground/80">Addis Ababa, Ethiopia</div>
          </div>
          <div>
            <span className="text-small text-muted-foreground/50 mb-4 block tracking-wider">Email</span>
            <motion.a
              href="mailto:se.debisaabebe@gmail.com"
              className="text-body text-foreground/80 hover:text-foreground transition-colors duration-500"
              whileHover={{ x: 3 }}
            >
              se.debisaabebe@gmail.com
            </motion.a>
          </div>
          <div>
            <span className="text-small text-muted-foreground/50 mb-4 block tracking-wider">Links</span>
            <div className="flex flex-col gap-2">
              <motion.a 
                href="https://github.com/Debisa07" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-body text-foreground/80 hover:text-foreground transition-colors duration-500"
                whileHover={{ x: 3 }}
              >
                GitHub
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/debisa-abebe-tu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-body text-foreground/80 hover:text-foreground transition-colors duration-500"
                whileHover={{ x: 3 }}
              >
                LinkedIn
              </motion.a>
            </div>
          </div>
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
