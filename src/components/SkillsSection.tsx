import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Computer Vision", "Deep Learning", "NLP", "Edge AI"],
    color: "primary",
  },
  {
    title: "Embedded & IoT",
    skills: ["ARM Cortex", "FreeRTOS", "C/C++", "MQTT", "STM32", "ESP32"],
    color: "accent",
  },
  {
    title: "Software Development",
    skills: ["Python", "TypeScript", "React", "Node.js", "FastAPI", "PostgreSQL"],
    color: "primary",
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "Linux", "CI/CD", "AWS", "Kubernetes"],
    color: "accent",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-mono font-medium tracking-widest uppercase text-xs mb-3">// Skills</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-16">
            My <span className="text-gradient">Expertise</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
                className="cosmic-card p-6 h-full"
              >
                <h3 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full bg-${category.color}`} />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-secondary/80 text-secondary-foreground border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default SkillsSection;
