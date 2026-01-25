import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Clients from "@/components/Clients";
import ProjectsShowcase from "@/components/projects";
import Summery from "@/components/summery";
import AiMlSkill from "@/components/aiml";
import Fourmeta from "@/components/Fourmeta";

import SideNavigation from "@/components/SideNavigation";
import ScrollIndicators from "@/components/ScrollIndicators";
import Timeline from "@/components/timeline";

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
      <Timeline />
      <ProjectsShowcase />
      <Summery />
      <Education />
      <AiMlSkill />
      <About />
      <Clients />
      <Fourmeta />
     
    
    </motion.main>
  );
};

export default Index;
