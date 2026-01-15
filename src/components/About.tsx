import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section id="about" ref={sectionRef} className="section-padding-lg overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Text content */}
          <motion.div 
            className="lg:col-span-6 lg:col-start-1"
            style={{ y: contentY }}
          >
            {/* Body text - like reference screenshot 2 */}
            <motion.p
              className="text-body text-muted-foreground/80 leading-[1.8] max-w-lg"
              variants={itemVariants}
            >
              I bring a dynamic approach to every project, delivering comprehensive solutions that drive undeniable success. With a track record of launching impactful products and leading transformative initiatives, I've worked with clients across diverse sectors, consistently exceeding expectations.
            </motion.p>
          </motion.div>

          {/* Right Column - Video/Image placeholder + caption */}
          <motion.div 
            className="lg:col-span-5 lg:col-start-8"
            style={{ y: imageY }}
          >
            {/* Video/Image placeholder */}
            <motion.div
              className="aspect-video bg-muted/20 overflow-hidden relative group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-transparent" />
              {/* Play button indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-16 h-16 rounded-full border border-foreground/20 flex items-center justify-center"
                  whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.4)" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-0 h-0 border-l-[12px] border-l-foreground/60 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                </motion.div>
              </div>
            </motion.div>

            {/* Caption */}
            <motion.p
              className="mt-4 text-small text-muted-foreground/60"
              variants={itemVariants}
            >
              How I can help you
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
