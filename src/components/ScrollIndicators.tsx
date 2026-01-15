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
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <span className="text-small text-muted-foreground/50 tracking-widest">
            Scroll
          </span>
        </motion.div>
      </motion.div>

      {/* Back to top - bottom right */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 md:right-12 z-40 text-small text-muted-foreground/50 hover:text-foreground transition-colors duration-500 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -2 }}
      >
        Back to top
      </motion.button>
    </>
  );
};

export default ScrollIndicators;
