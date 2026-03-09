import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem, HeroReveal } from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Vision Pipeline",
    description: "Real-time computer vision system for object detection and tracking using deep learning models optimized for edge deployment.",
    tech: ["Python", "OpenCV", "TensorFlow", "CUDA"],
    github: "#",
    demo: "#",
  },
  {
    title: "IoT Smart Dashboard",
    description: "Full-stack IoT monitoring dashboard with real-time sensor data visualization and alerting for embedded devices.",
    tech: ["React", "Node.js", "MQTT", "InfluxDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Embedded ML Accelerator",
    description: "Custom firmware for deploying ML models on ARM microcontrollers with optimized inference and low power consumption.",
    tech: ["C", "ARM", "TFLite", "FreeRTOS"],
    github: "#",
  },
  {
    title: "Neural Style Transfer App",
    description: "Web application that applies artistic neural style transfer to images using PyTorch models served via REST API.",
    tech: ["Python", "PyTorch", "FastAPI", "React"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-40 lg:py-52 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute w-[600px] h-[600px] top-[20%] right-[-15%] rounded-full bg-[hsl(var(--nebula-1)/0.03)] blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <HeroReveal className="mb-20">
          <p className="text-primary font-mono font-medium tracking-[0.25em] uppercase text-[11px] mb-4">Projects</p>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </HeroReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
          {projects.map((project, i) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                className="cosmic-card p-8 lg:p-10 h-full flex flex-col transition-all duration-500 group hover:shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.12)]"
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Project {String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-heading text-xl lg:text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-7 flex-1 leading-relaxed text-sm lg:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-3 py-1.5 rounded-lg bg-secondary/40 text-secondary-foreground font-mono border border-border/15 transition-colors duration-300 group-hover:border-primary/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5">
                  <a href={project.github} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  )}
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
