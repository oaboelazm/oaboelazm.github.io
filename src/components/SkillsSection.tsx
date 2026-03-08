import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "Python", level: 90, category: "Languages" },
  { name: "C / C++", level: 85, category: "Languages" },
  { name: "JavaScript / TypeScript", level: 80, category: "Languages" },
  { name: "AI / Machine Learning", level: 88, category: "Domains" },
  { name: "Computer Vision", level: 82, category: "Domains" },
  { name: "Embedded Systems", level: 85, category: "Domains" },
  { name: "IoT", level: 78, category: "Domains" },
  { name: "React & Web Dev", level: 75, category: "Frameworks" },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="font-heading font-medium text-foreground">{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Skills</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-16">
            My <span className="text-gradient">Expertise</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 0.05}>
              <SkillBar name={skill.name} level={skill.level} delay={i * 0.1} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
