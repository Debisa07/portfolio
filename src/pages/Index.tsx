import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Clients from "@/components/techstacks";
import ProjectsShowcase from "@/components/projects";
import Summery from "@/components/summery";

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
      className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-700 flex flex-col"
    >
      {/* Navigation always on top, responsive */}
      <Navigation />

      {/* Responsive container for side nav and main content */}
      <div className="flex flex-col md:flex-row w-full max-w-full">
        {/* SideNavigation: hidden on mobile, sticky on desktop */}
        <aside className="hidden lg:block lg:sticky lg:top-0 z-40">
          <SideNavigation />
        </aside>

        {/* Main content area, full width on mobile, margin on desktop */}
        <section className="flex-1 w-full max-w-full flex flex-col gap-0 md:gap-2">
          {/* ScrollIndicators: absolute on mobile, sticky on desktop */}
          <div className="sticky top-0 z-30">
            <ScrollIndicators />
          </div>

          {/* All main sections stacked vertically, responsive spacing */}
          <div className="flex flex-col gap-0 md:gap-8">
            <Hero />
            <Timeline />
            <Summery />
            <Education />
            <ProjectsShowcase />
            <Clients />
            <Fourmeta />
          </div>
        </section>
      </div>
    </motion.main>
  );
};

export default Index;
