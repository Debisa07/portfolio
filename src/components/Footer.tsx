import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

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

  const navLinks = [
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ];

  return (
    <footer id="contact" ref={footerRef} className="section-padding border-t border-border">
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left - CTA */}
          <motion.div variants={itemVariants}>
            <span className="label-text mb-6 block">Get in touch</span>
            <h2 className="text-display font-grotesk font-medium text-foreground mb-8">
              Let's create something extraordinary
            </h2>
            <motion.a
              href="mailto:hello@studio.com"
              className="inline-flex items-center gap-4 text-subheading text-foreground group"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              <span className="border-b border-foreground pb-1">hello@studio.com</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">→</span>
            </motion.a>
          </motion.div>

          {/* Right - Address & Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col justify-between"
          >
            <div className="mb-12">
              <span className="label-text mb-4 block">Location</span>
              <p className="text-body text-muted-foreground">
                New York, NY<br />
                Los Angeles, CA
              </p>
            </div>

            <div>
              <span className="label-text mb-4 block">Follow</span>
              <ul className="flex gap-6">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-body text-muted-foreground hover:text-foreground transition-colors duration-300"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-border gap-4"
        >
          <p className="text-small text-muted-foreground">
            © 2024 Studio. All rights reserved.
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
