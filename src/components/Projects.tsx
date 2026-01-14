import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Noir Essence",
    category: "Branding",
    year: "2024",
    image: project1,
  },
  {
    id: 2,
    title: "Lumière",
    category: "Editorial",
    year: "2024",
    image: project2,
  },
  {
    id: 3,
    title: "Minimal Space",
    category: "Architecture",
    year: "2023",
    image: project3,
  },
  {
    id: 4,
    title: "Obsidian",
    category: "Digital",
    year: "2023",
    image: project4,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="group relative border-t border-border py-8 md:py-12"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-center cursor-pointer">
          {/* Project Number */}
          <div className="col-span-2 md:col-span-1">
            <span className="label-text">0{project.id}</span>
          </div>

          {/* Project Title */}
          <div className="col-span-10 md:col-span-5">
            <motion.h3
              className="text-display font-grotesk font-medium text-foreground"
              animate={{ x: isHovered ? 20 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {project.title}
            </motion.h3>
          </div>

          {/* Category */}
          <div className="col-span-6 md:col-span-3 hidden md:block">
            <motion.span
              className="text-body text-muted-foreground"
              animate={{ opacity: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            >
              {project.category}
            </motion.span>
          </div>

          {/* Year */}
          <div className="col-span-6 md:col-span-2 hidden md:block text-right">
            <motion.span
              className="label-text"
              animate={{ opacity: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            >
              {project.year}
            </motion.span>
          </div>

          {/* Arrow */}
          <div className="col-span-12 md:col-span-1 hidden md:flex justify-end">
            <motion.span
              className="text-xl text-foreground"
              animate={{ x: isHovered ? 8 : 0, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </div>
        </div>

        {/* Hover Image Preview */}
        <motion.div
          className="absolute right-12 top-1/2 -translate-y-1/2 w-80 h-52 overflow-hidden pointer-events-none hidden lg:block z-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.95,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={sectionRef} className="section-padding">
      {/* Section Header */}
      <div className="container-custom mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label-text mb-4 block">Selected Work</span>
          <h2 className="text-heading font-grotesk font-medium text-foreground max-w-2xl">
            Projects that define our pursuit of excellence
          </h2>
        </motion.div>
      </div>

      {/* Projects List */}
      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
        
        {/* Final border */}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default Projects;
