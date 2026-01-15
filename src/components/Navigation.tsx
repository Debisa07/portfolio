import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["hsla(0, 0%, 4%, 0)", "hsla(0, 0%, 4%, 0.9)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      style={{ backgroundColor: navBackground, opacity: navOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-md border-b border-border/60" : ""
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-grotesk text-lg font-medium tracking-[0.08em] text-foreground uppercase"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Debisa Abebe
        </motion.a>

        {/* Nav Links */}
        <motion.ul
          className="hidden md:flex items-center gap-7"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <button
                onClick={() => scrollToSection(item.href)}
                className="nav-link text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </button>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.button
          onClick={() => scrollToSection("#contact")}
          className="hidden md:inline-flex items-center gap-2 text-small uppercase tracking-[0.3em] text-foreground border border-foreground/30 px-5 py-2.5 hover:border-foreground transition-colors"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Let's talk
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
