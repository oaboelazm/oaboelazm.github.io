import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ScrollReveal, { HeroReveal, ScaleReveal } from "./ScrollReveal";
import { useRef } from "react";

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

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.5"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
  const width = useTransform(smoothProgress, [0, 1], ["0%", `${level}%`]);
  const opacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={ref} className="space-y-3">
      <motion.div style={{ opacity }} className="flex justify-between text-sm">
        <span className="font-heading font-semibold text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </motion.div>
      <div className="h-[3px] rounded-full bg-secondary/40 overflow-hidden">
        <motion.div
          style={{ width }}
          className="h-full rounded-full"
          {...{ style: { width, background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))` } }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-40 lg:py-52 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <HeroReveal className="mb-20">
          <p className="text-primary font-mono font-medium tracking-[0.25em] uppercase text-[11px] mb-4">Skills</p>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
            My <span className="text-gradient">Expertise</span>
          </h2>
        </HeroReveal>

        <ScaleReveal className="max-w-3xl mx-auto">
          <div className="space-y-7">
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
            ))}
          </div>
        </ScaleReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
