import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const ScrollIndicators = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowBackToTop(latest > 400);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll indicator - bottom right */}
      <motion.div
        className="fixed bottom-8 right-6 md:right-12 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-3"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1] as const,
          }}
        >
          <span className="text-small text-muted-foreground/50 tracking-[0.2em] uppercase font-grotesk font-normal">
            Scroll
          </span>
          <motion.span 
            className="w-px h-10 bg-foreground/20"
            animate={{ scaleY: [1, 0.6, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Back to top - bottom right */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 md:right-12 z-40 text-small text-muted-foreground/50 hover:text-foreground transition-colors duration-500 tracking-[0.2em] uppercase font-grotesk font-normal"
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        whileHover={{ y: -4, opacity: 0.9 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          initial={{ y: 0 }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
        >
          Back to top
        </motion.span>
      </motion.button>
    </>
  );
};

export default ScrollIndicators;
