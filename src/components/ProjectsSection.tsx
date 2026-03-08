import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
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
    <section id="projects" className="py-32 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="nebula-orb w-[400px] h-[400px] bottom-[10%] right-[-10%] bg-[hsl(var(--nebula-3)/0.04)]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-mono font-medium tracking-widest uppercase text-xs mb-3">// Projects</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-16">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="cosmic-card p-8 h-full flex flex-col hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Project {String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2.5 py-1 rounded-md bg-secondary/80 text-secondary-foreground font-mono font-medium border border-border/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
