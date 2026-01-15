import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Fourmeta from "@/components/Fourmeta";
import Footer from "@/components/Footer";
import SideNavigation from "@/components/SideNavigation";
import ScrollIndicators from "@/components/ScrollIndicators";

const Index = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 1, 
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <Navigation />
      <SideNavigation />
      <ScrollIndicators />
      <Hero />
      <About />
      <Fourmeta />
      <Footer />
    </motion.main>
  );
};

export default Index;
