import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem, ScaleReveal } from "./ScrollReveal";

const skills = [
  { name: "Python", level: 90 },
  { name: "C / C++", level: 85 },
  { name: "JavaScript / TypeScript", level: 80 },
  { name: "AI / Machine Learning", level: 88 },
  { name: "Computer Vision", level: 82 },
  { name: "Embedded Systems", level: 85 },
  { name: "IoT", level: 78 },
  { name: "React & Web Dev", level: 75 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="space-y-2.5">
    <div className="flex justify-between text-sm">
      <span className="font-heading font-semibold text-foreground">{name}</span>
      <span className="font-mono text-xs text-muted-foreground">{level}%</span>
    </div>
    <div className="h-1 rounded-full bg-secondary/60 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))`,
        }}
      />
    </div>
  </div>
);

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

        <ScaleReveal className="max-w-3xl mx-auto">
          <StaggerContainer className="space-y-6" staggerDelay={0.06}>
            {skills.map((skill, i) => (
              <StaggerItem key={skill.name}>
                <SkillBar name={skill.name} level={skill.level} delay={i * 0.08} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScaleReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
