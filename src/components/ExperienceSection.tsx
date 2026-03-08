import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

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
    <section id="experience" className="py-32 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-mono font-medium tracking-widest uppercase text-xs mb-3">// Experience</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-16">
            My <span className="text-gradient">Journey</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-border/40 to-transparent" />

          <StaggerContainer className="space-y-12" staggerDelay={0.15}>
            {timeline.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-8 relative">
                  <div className="relative z-10 flex-shrink-0 w-16 flex items-start justify-center pt-1">
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                  </div>

                  <div className="cosmic-card p-6 flex-1 transition-colors duration-300">
                    <span className="text-primary text-xs font-mono font-semibold tracking-wider">{item.year}</span>
                    <h3 className="font-heading text-lg font-bold mt-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 font-medium">{item.org}</p>
                    <p className="text-muted-foreground mt-3 leading-relaxed text-sm">{item.description}</p>
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
