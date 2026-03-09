import ScrollReveal, { StaggerContainer, StaggerItem, HeroReveal } from "./ScrollReveal";

const timeline = [
  {
    year: "2021 – 2026",
    title: "B.Eng. Computer Engineering",
    org: "El Shorouk Academy, Cairo",
    description: "Senior year undergraduate studying computer engineering with focus on embedded systems, hardware/software co-design, and cybersecurity.",
  },
  {
    year: "2023 – Present",
    title: "System Administrator (Part-Time, Remote)",
    org: "EC4SDF – Cairo, Egypt",
    description: "Managing and maintaining organizational servers and websites, handling Linux hosting environments, WordPress infrastructure and basic security hardening.",
  },
  {
    year: "2022 – Present",
    title: "Freelance Software Developer (Remote)",
    org: "Freelance",
    description: "Utilizing Python and Java for software development, providing optimal solutions, and collaborating with remote teams.",
  },
  {
    year: "2025",
    title: "ML, CV, NLP (Upscaling Program)",
    org: "NTI",
    description: "Advanced training in Machine Learning, Computer Vision, and Natural Language Processing.",
  },
  {
    year: "2025",
    title: "HCIA-Datacom Certification",
    org: "Huawei Talent Academy",
    description: "Certified in Huawei's datacom technologies and networking fundamentals.",
  },
  {
    year: "2024",
    title: "HCIA-AI Certification",
    org: "Huawei Talent Academy",
    description: "Certified in Huawei's AI fundamentals including machine learning and deep learning concepts.",
  },
  {
    year: "In Progress",
    title: "Vulnerability Analyst & Penetration Tester",
    org: "DEPI – Expected July 2026",
    description: "Comprehensive cybersecurity training covering vulnerability assessment and penetration testing methodologies.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 sm:py-32 lg:py-52 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10 max-w-6xl">
        <HeroReveal className="mb-10 sm:mb-16 lg:mb-20">
          <p className="text-primary font-mono font-medium tracking-[0.25em] uppercase text-[11px] mb-3 sm:mb-4">Experience</p>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
            My <span className="text-gradient">Journey</span>
          </h2>
        </HeroReveal>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/15 via-border/30 to-transparent" />

          <StaggerContainer className="space-y-8 sm:space-y-14" staggerDelay={0.15}>
            {timeline.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-4 sm:gap-8 relative group">
                  <div className="relative z-10 flex-shrink-0 w-8 sm:w-16 flex items-start justify-center pt-1.5">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-primary/40 group-hover:bg-primary/80 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all duration-500" />
                  </div>

                  <div className="cosmic-card p-5 sm:p-7 lg:p-8 flex-1 transition-all duration-500 group-hover:border-primary/15">
                    <span className="text-primary text-[10px] sm:text-xs font-mono font-semibold tracking-[0.2em]">{item.year}</span>
                    <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold mt-1.5 sm:mt-2">{item.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1 font-medium">{item.org}</p>
                    <p className="text-muted-foreground mt-3 sm:mt-4 leading-relaxed text-xs sm:text-sm lg:text-base">{item.description}</p>
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
