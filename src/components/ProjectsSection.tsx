import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem, HeroReveal } from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Automatic Indoor Lighting Control System",
    description: "Designed and implemented a VHDL-based light control system on FPGA that maintains constant room brightness and automatically controls curtains using sensor input for energy efficiency.",
    tech: ["VHDL", "FPGA", "HDL Designer", "Sensor Integration"],
    github: "#",
  },
  {
    title: "Face & Object Detection System",
    description: "Lightweight real-time vision system for face and object detection, tailored for low-power, resource-constrained hardware using the Luckfox Pico Mini SBC.",
    tech: ["Python", "OpenCV", "Luckfox Pico", "Embedded Linux"],
    github: "#",
  },
  {
    title: "Wearable Bracelet Communication System",
    description: "ESP32-based touch-sensitive bracelet that communicates with a mobile app via BLE, providing haptic and visual feedback with real-time alerts between connected individuals.",
    tech: ["ESP32", "BLE", "Mobile App", "Haptic Feedback"],
    github: "#",
  },
  {
    title: "AI Wearable Assistant for Visually Impaired",
    description: "Conceptualizing a wearable assistant with AI for real-time obstacle detection, forehead haptic feedback, hybrid embedded/mobile processing, and offline LLM support.",
    tech: ["AI", "Embedded Systems", "Haptics", "LLM"],
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 lg:py-52 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute w-[600px] h-[600px] top-[20%] right-[-15%] rounded-full bg-[hsl(var(--nebula-1)/0.03)] blur-[150px]" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10 max-w-6xl">
        <HeroReveal className="mb-10 sm:mb-16 lg:mb-20">
          <p className="text-primary font-mono font-medium tracking-[0.25em] uppercase text-[11px] mb-3 sm:mb-4">Projects</p>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </HeroReveal>

        <StaggerContainer className="grid sm:grid-cols-2 gap-4 sm:gap-6" staggerDelay={0.12}>
          {projects.map((project, i) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                className="cosmic-card p-6 sm:p-8 lg:p-10 h-full flex flex-col transition-all duration-500 group hover:shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.12)]"
              >
                <div className="flex items-center gap-2 mb-3 sm:mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Project {String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-5 sm:mb-7 flex-1 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-7">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-secondary/40 text-secondary-foreground font-mono border border-border/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 sm:gap-5">
                  <a href={project.github} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProjectsSection;
