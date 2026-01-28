import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <footer
      id="fourmeta"
      ref={ref}
      className="relative border-t border-foreground/10 pt-0 section-padding-lg overflow-hidden"
    >
      <div className="container-custom">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12"
        >
          {/* Left — Identity */}
          <motion.div variants={item} className="lg:col-span-4">
            <h3 className="text-lg sm:text-xl md:text-2xl text-subheading font-grotesk tracking-tight">
              Debisa Abebe
            </h3>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground/70 leading-relaxed">
              Full-Stack Software Engineer focused on scalable systems,
              AI-augmented development, and clean product architecture.
            </p>
          </motion.div>

          {/* Center — Contact */}
          <motion.div variants={item} className="lg:col-span-4 mt-6 md:mt-0">
            <p className="text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground/50 mb-2 sm:mb-4">
              Contact
            </p>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="mailto:se.debisaabebe@gmail.com"
                  className="hover:text-[#22c55e] transition-colors"
                >
                  se.debisaabebe@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground/70">
                Available for full-time & contract roles
              </li>
            </ul>
          </motion.div>

          {/* Right — Links */}
          <motion.div
            variants={item}
            className="lg:col-span-4 lg:text-right mt-6 md:mt-0"
          >
            <p className="text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground/50 mb-2 sm:mb-4">
              Online
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 lg:justify-end text-xs sm:text-sm">
              <a
                href="https://github.com/Debisa07"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#22c55e] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/debisa-abebe-tu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#22c55e] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="/Debisa-Abebe-CV.pdf"
                className="hover:text-[#22c55e] transition-colors"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={item}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10 sm:mt-16 pt-4 sm:pt-6 border-t border-foreground/10 flex flex-col md:flex-row justify-between gap-2 sm:gap-4 text-[11px] sm:text-xs text-muted-foreground/50"
        >
          <span>© {new Date().getFullYear()} Debisa Abebe</span>
          <span>Built with React, TypeScript & Framer Motion</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
