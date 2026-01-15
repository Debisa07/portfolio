import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  // Smooth scroll-based opacity and blur
  const navBlur = useTransform(scrollY, [0, 100], [0, 8]);
  const navBorderOpacity = useTransform(scrollY, [0, 100], [0, 0.15]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY ? "down" : "up";
    
    if (latest > 100) {
      setIsScrolled(true);
      // Hide on scroll down, show on scroll up
      if (direction === "down" && latest > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    } else {
      setIsScrolled(false);
      setIsVisible(true);
    }
    
    setLastScrollY(latest);
  });

  const navItems = [
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
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -20 
      }}
      transition={{ 
        duration: 0.5, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      style={{
        backdropFilter: isScrolled ? `blur(${navBlur.get()}px)` : "none",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out-expo ${
        isScrolled 
          ? "bg-background/80" 
          : "bg-transparent"
      }`}
    >
      <motion.div 
        className="absolute inset-x-0 bottom-0 h-px bg-border"
        style={{ opacity: navBorderOpacity }}
      />
      
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-grotesk text-lg font-medium tracking-[0.08em] text-foreground uppercase relative group"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="relative inline-block">
            Debisa Abebe
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-px bg-foreground origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </span>
        </motion.a>

        {/* Nav Links */}
        <motion.ul
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.button
                onClick={() => scrollToSection(item.href)}
                className="nav-link text-muted-foreground/70 hover:text-foreground transition-all duration-400 relative py-2"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="relative inline-block">
                  {item.label}
                </span>
              </motion.button>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.button
          onClick={() => scrollToSection("#contact")}
          className="hidden md:inline-flex items-center gap-2 text-small uppercase tracking-[0.3em] text-foreground border border-foreground/20 px-6 py-3 hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-500"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
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
