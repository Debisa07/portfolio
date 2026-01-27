import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "clients", label: "Clients" },
  { id: "work", label: "Fourmeta" },
  { id: "feedback", label: "Feedback" },
];

const SideNavigation = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest >= 0);
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="fixed left-6 md:left-12 bottom-10 z-40 hidden lg:flex flex-col gap-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        x: isVisible ? 0 : -20 
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
    >
      {/* Page Counter */}
      <motion.div 
        className="flex items-center gap-2 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.span 
          className="text-lg font-grotesk font-normal text-foreground/90"
          key={currentSection}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          {currentSection + 1}
        </motion.span>
        <span className="text-sm text-muted-foreground/40 font-grotesk font-normal">
          /{sections.length}
        </span>
      </motion.div>

      {/* Section Links */}
      <nav className="flex flex-col gap-2">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`text-left text-small font-grotesk font-normal uppercase tracking-[0.12em] transition-all duration-500 relative ${
              index === currentSection
                ? "text-foreground/90"
                : "text-muted-foreground/35 hover:text-muted-foreground/70"
            }`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: 0.1 + index * 0.08, 
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94] as const
            }}
            whileHover={{ x: 8, opacity: 0.9 }}
          >
            {section.label}
            {index === currentSection && (
              <motion.span
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground/60"
                layoutId="activeIndicator"
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              />
            )}
          </motion.button>
        ))}
      </nav>
    </motion.div>
  );
};

export default SideNavigation;
