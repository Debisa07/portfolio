import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/debisa-abebe-tu/" },
    { label: "GitHub", href: "https://github.com/Debisa07" },
    { label: "Email", href: "mailto:se.debisaabebe@gmail.com" },
  ];

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" ref={footerRef} className="section-padding border-t border-border/60 overflow-hidden">
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Social Media Links */}
        <motion.div
          className="mb-20"
          variants={itemVariants}
        >
          <span className="label-text mb-8 block">Follow me on social media for daily insights.</span>
          <div className="flex flex-wrap gap-10">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-small uppercase tracking-widest text-muted-foreground/60 hover:text-foreground transition-all duration-500 relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.3 + i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94] as const
                }}
                whileHover={{ y: -3 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mb-20 pt-14 border-t border-border/60"
          variants={itemVariants}
        >
          <span className="label-text mb-5 block">Join my newsletter!</span>
          <p className="text-body text-muted-foreground/60 mb-10">
            Monthly updates, special offers, business news and more!
          </p>
          <div className="max-w-xl flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 bg-transparent border border-border/60 text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-foreground/40 transition-all duration-500"
            />
            <motion.button
              onClick={() => {
                if (email.trim().length > 3) {
                  setIsSubscribed(true);
                }
              }}
              className="px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 text-small uppercase tracking-[0.3em]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Nice!
            </motion.button>
          </div>
          {isSubscribed && (
            <motion.p 
              className="text-small text-muted-foreground/60 mt-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              Thanks for subscribing! Let's talk
            </motion.p>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mb-12 max-w-2xl"
          variants={itemVariants}
        >
          <p className="text-body text-muted-foreground/60 leading-relaxed">
            Addis Ababa-based software engineer focused on backend and mobile development. Available for freelance
            and full-time opportunities.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20"
          variants={itemVariants}
        >
          <div>
            <span className="label-text mb-5 block">Location</span>
            <div className="text-body text-muted-foreground/70">Addis Ababa, Ethiopia</div>
          </div>
          <div>
            <span className="label-text mb-5 block">Email</span>
            <motion.a
              href="mailto:se.debisaabebe@gmail.com"
              className="text-body text-foreground/80 hover:text-foreground transition-colors duration-500"
              whileHover={{ x: 3 }}
            >
              se.debisaabebe@gmail.com
            </motion.a>
          </div>
          <div>
            <span className="label-text mb-5 block">Links</span>
            <div className="flex flex-col gap-2">
              <motion.a 
                href="https://github.com/Debisa07" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-body text-muted-foreground/60 hover:text-foreground transition-colors duration-500"
                whileHover={{ x: 3 }}
              >
                github.com/Debisa07
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/debisa-abebe-tu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-body text-muted-foreground/60 hover:text-foreground transition-colors duration-500"
                whileHover={{ x: 3 }}
              >
                linkedin.com/in/debisa-abebe-tu
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="flex flex-wrap justify-start gap-10 mb-14"
          variants={itemVariants}
        >
          {navLinks.map((link, i) => (
            <motion.button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-small uppercase tracking-[0.3em] text-muted-foreground/50 hover:text-foreground transition-all duration-500"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.5 + i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94] as const
              }}
              whileHover={{ y: -3 }}
            >
              {link.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-border/60 gap-6"
        >
          <p className="text-small text-muted-foreground/40">
            © 2026 Debisa Abebe Tulu. All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-small text-muted-foreground/40 hover:text-foreground transition-all duration-500"
            whileHover={{ y: -2 }}
          >
            Back to top ↑
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
