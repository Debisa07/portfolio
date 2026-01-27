import { motion, useScroll, useMotionValueEvent, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const scrollProgress = useMotionValue(0);
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    scrollProgress.set(Math.min(latest / 500, 1));
  });

  const navOpacity = useTransform(scrollProgress, [0, 1], [1, 0.95]);
  const navBlur = useTransform(scrollProgress, [0, 1], [0, 12]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItemVariants = {
    initial: { y: 0, opacity: 0.7 },
    hover: { 
      y: -4, 
      opacity: 1,
      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      style={{ opacity: navOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "bg-background/60 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-grotesk text-sm md:text-base font-normal tracking-[0.15em] text-foreground/90 relative group flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          whileHover={{ y: -2, opacity: 1, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            D
          </motion.span>
          <span className="text-muted-foreground/40">—</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A
          </motion.span>
          <sup className="text-[0.5em] text-muted-foreground/40 ml-0.5">®</sup>
        </motion.a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-12">
          {[
            { href: "#hero", label: "Home", delay: 0.4 },
            { href: "#education", label: "Education", delay: 0.45 }
          ].map((item) => (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-small font-grotesk font-normal text-foreground/70 tracking-[0.12em] uppercase relative overflow-hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.delay, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              variants={navItemVariants}
              whileHover="hover"
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              />
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={() => scrollToSection("#contact")}
          className="text-small font-grotesk font-normal text-foreground/90 border border-foreground/20 rounded-full px-7 py-3 hover:border-foreground/50 transition-all duration-500 backdrop-blur-sm relative overflow-hidden group"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Let's talk</span>
          <motion.div
            className="absolute inset-0 bg-foreground/5 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          />
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
