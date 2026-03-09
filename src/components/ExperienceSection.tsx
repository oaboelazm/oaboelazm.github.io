import ScrollReveal, { StaggerContainer, StaggerItem, HeroReveal } from "./ScrollReveal";

const timeline = [
  {
    year: "2024",
    title: "AI Research Engineer",
    org: "Tech Company",
    description: "Leading development of computer vision models for real-time applications and edge deployment.",
  },
  {
    year: "2023",
    title: "Embedded Systems Developer",
    org: "Innovation Lab",
    description: "Designed and programmed firmware for IoT devices with wireless connectivity and sensor integration.",
  },
  {
    year: "2023",
    title: "Machine Learning Certification",
    org: "Stanford Online",
    description: "Completed advanced ML specialization covering deep learning, NLP, and computer vision.",
  },
  {
    year: "2022",
    title: "Software Engineering Intern",
    org: "Startup",
    description: "Built full-stack web applications and contributed to CI/CD pipeline optimization.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-40 lg:py-52 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <HeroReveal className="mb-20">
          <p className="text-primary font-mono font-medium tracking-[0.25em] uppercase text-[11px] mb-4">Experience</p>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
            My <span className="text-gradient">Journey</span>
          </h2>
        </HeroReveal>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/15 via-border/30 to-transparent" />

          <StaggerContainer className="space-y-14" staggerDelay={0.15}>
            {timeline.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-8 relative group">
                  <div className="relative z-10 flex-shrink-0 w-16 flex items-start justify-center pt-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/40 group-hover:bg-primary/80 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all duration-500" />
                  </div>

                  <div className="cosmic-card p-7 lg:p-8 flex-1 transition-all duration-500 group-hover:border-primary/15 group-hover:translate-x-1">
                    <span className="text-primary text-xs font-mono font-semibold tracking-[0.2em]">{item.year}</span>
                    <h3 className="font-heading text-lg lg:text-xl font-bold mt-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 font-medium">{item.org}</p>
                    <p className="text-muted-foreground mt-4 leading-relaxed text-sm lg:text-base">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
