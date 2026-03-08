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
  <div className="space-y-2.5">
    <div className="flex justify-between text-sm">
      <span className="font-heading font-semibold text-foreground">{name}</span>
      <span className="font-mono text-xs text-primary/70">{level}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-secondary/80 overflow-hidden relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full relative"
        style={{
          background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--nebula-1)))`,
        }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground/90 shadow-[0_0_8px_2px_hsl(var(--primary)/0.5)]" />
      </motion.div>
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="nebula-orb w-[500px] h-[500px] top-[30%] left-[-15%] bg-[hsl(var(--nebula-2)/0.04)]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-mono font-medium tracking-widest uppercase text-xs mb-3">// Skills</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-16">
            My <span className="text-gradient">Expertise</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-7">
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
