import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Fourmeta from "@/components/Fourmeta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <Navigation />
      <Hero />
      <About />
      <Fourmeta />
      <Footer />
    </motion.main>
  );
};

export default Index;
