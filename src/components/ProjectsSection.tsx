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
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Projects</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-16">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8 h-full flex flex-col hover:border-primary/30 transition-colors duration-300 group"
              >
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
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
