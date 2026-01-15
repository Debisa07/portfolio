import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
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
    <footer id="contact" ref={footerRef} className="section-padding border-t border-border">
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Social Media Links */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <span className="label-text mb-6 block">Follow me on social media for daily insights.</span>
          <div className="flex flex-wrap gap-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-small uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mb-16 pt-12 border-t border-border"
          variants={itemVariants}
        >
          <span className="label-text mb-4 block">Join my newsletter!</span>
          <p className="text-body text-muted-foreground/70 mb-8">
            Monthly updates, special offers, business news and more!
          </p>
          <div className="max-w-xl flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-background border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
            <button
              onClick={() => {
                if (email.trim().length > 3) {
                  setIsSubscribed(true);
                }
              }}
              className="px-6 py-3 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors text-small uppercase tracking-[0.3em]"
            >
              Nice!
            </button>
          </div>
          {isSubscribed && (
            <p className="text-small text-muted-foreground mt-4">
              Thanks for subscribing! Let's talk
            </p>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mb-10 max-w-2xl"
          variants={itemVariants}
        >
          <p className="text-body text-muted-foreground/70">
            Addis Ababa-based software engineer focused on backend and mobile development. Available for freelance
            and full-time opportunities.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={itemVariants}
        >
          <div>
            <span className="label-text mb-4 block">Location</span>
            <div className="text-body text-muted-foreground">Addis Ababa, Ethiopia</div>
          </div>
          <div>
            <span className="label-text mb-4 block">Email</span>
            <a
              href="mailto:se.debisaabebe@gmail.com"
              className="text-body text-foreground hover:text-muted-foreground transition-colors"
            >
              se.debisaabebe@gmail.com
            </a>
          </div>
          <div>
            <span className="label-text mb-4 block">Links</span>
            <div className="flex flex-col">
              <a href="https://github.com/Debisa07" target="_blank" rel="noopener noreferrer" className="text-body text-muted-foreground hover:text-foreground transition-colors">github.com/Debisa07</a>
              <a href="https://www.linkedin.com/in/debisa-abebe-tu/" target="_blank" rel="noopener noreferrer" className="text-body text-muted-foreground hover:text-foreground transition-colors">linkedin.com/in/debisa-abebe-tu</a>
            </div>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="flex flex-wrap justify-start gap-8 mb-12"
          variants={itemVariants}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-small uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4"
        >
          <p className="text-small text-muted-foreground">
            © 2026 Debisa Abebe Tulu. All rights reserved.
          </p>
          <div className="flex gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-small text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Back to top ↑
            </button>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
