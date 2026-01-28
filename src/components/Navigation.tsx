import { motion, useScroll, useMotionValueEvent, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { Mail, Linkedin, Phone, Github } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-5">
          {/* Profile Image */}
          <motion.img
            src="/babi.jpg" // ← replace with your image path
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border border-border"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <motion.a
              href="mailto:se.debisaabebe@gmail.com"
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-muted-foreground hover:text-foreground transition"
              aria-label="Gmail"
            >
              <Mail size={18} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/debisa-abebe-tu/"
              target="_blank"
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-muted-foreground hover:text-foreground transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>

            <motion.a
              href="https://github.com/Debisa07"
              target="_blank"
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-muted-foreground hover:text-foreground transition"
              aria-label="GitHub"
            >
              <Github size={18} />
            </motion.a>

            <motion.a
  href="tel:+251912291624"
  whileHover={{ y: -3, scale: 1.1 }}
  className="text-muted-foreground hover:text-foreground transition"
  aria-label="Phone"
>
  <Phone size={18} />
</motion.a>
          </div>

          {/* Actions Group */}
          <div className="flex items-center gap-10 pl-4 border-l border-border/50 min-w-0 mr-4">
            <a
              href="https://drive.google.com/file/d/1SmJa61pzK1SRNP3AWRWA-yARl6gqGKsY/view"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="min-w-0"
            >
              <Button
                variant="outline"
                className="font-grotesk font-semibold tracking-wide uppercase text-sm px-5 py-2 whitespace-nowrap min-w-0"
              >
                Download CV
              </Button>
            </a>

            <div className="flex items-center justify-center w-10 h-10 flex-shrink-0">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="focus:outline-none"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className={`transition-all duration-300 w-7 h-7 ${mobileOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`absolute transition-all duration-300 w-7 h-7 ${mobileOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-4 md:gap-8 md:hidden"
          >
            {[
              { href: "#hero", label: "Home" },
              { href: "#timeline", label: "Timeline" },
              { href: "#summery", label: "Summary" },
              { href: "#education", label: "Education" },
              { href: "#projects", label: "Projects" },
              { href: "#tech-stack", label: "Tech Stack" },
              { href: "#fourmeta", label: "Fourmeta" }
            ].map((item, idx) => (
              <button
                key={item.href}
                onClick={() => {
                  scrollToSection(item.href);
                  setMobileOpen(false);
                }}
                className="text-2xl font-grotesk font-semibold text-foreground/90 tracking-[0.12em] uppercase relative"
                style={{ transitionDelay: `${0.1 + idx * 0.05}s` }}
              >
                {item.label}
              </button>
            ))}
            {/* Mobile Download CV Button */}
            <a
              href="https://drive.google.com/file/d/1SmJa61pzK1SRNP3AWRWA-yARl6gqGKsY/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className=""
              download
            >
              <Button variant="outline" className="font-grotesk font-semibold tracking-wide uppercase text-lg px-8 py-3 mt-4">
                Download CV
              </Button>
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
