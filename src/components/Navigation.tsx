import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "bg-background/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20 md:h-24">
        {/* Logo - Minimal like rodukov */}
        <motion.a
          href="#"
          className="font-grotesk text-base md:text-lg font-medium tracking-[0.15em] text-foreground relative group flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span>D</span>
          <span className="text-muted-foreground/60">—</span>
          <span>A</span>
          <sup className="text-[0.5em] text-muted-foreground/40 ml-0.5">®</sup>
        </motion.a>

        {/* Center Nav Link - Just "Home" like reference */}
        <motion.button
          onClick={() => scrollToSection("#hero")}
          className="hidden md:block text-small font-inter text-foreground/80 hover:text-foreground transition-all duration-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ y: -2 }}
        >
          Home
        </motion.button>

        {/* CTA - Pill shaped like rodukov */}
        <motion.button
          onClick={() => scrollToSection("#contact")}
          className="text-small text-foreground border border-foreground/20 rounded-full px-6 py-3 hover:border-foreground/50 hover:bg-foreground/5 transition-all duration-500"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Let's talk
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
