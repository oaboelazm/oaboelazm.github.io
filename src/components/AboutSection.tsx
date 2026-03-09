import ScrollReveal, { TextReveal, StaggerContainer, StaggerItem, HeroReveal, Parallax } from "./ScrollReveal";
import { Cpu, Code2, Shield, Radio } from "lucide-react";

const interests = [
  { icon: Cpu, label: "Embedded Systems", desc: "VHDL, FPGA & hardware design" },
  { icon: Code2, label: "Software Development", desc: "Python, C, Java & full-stack" },
  { icon: Shield, label: "Cybersecurity", desc: "Pentesting & infrastructure security" },
  { icon: Radio, label: "IoT & Connected Devices", desc: "ESP32, BLE & smart systems" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-32 lg:py-52 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10 max-w-6xl">
        <HeroReveal className="mb-10 sm:mb-16 lg:mb-20">
          <p className="text-primary font-mono font-medium tracking-[0.25em] uppercase text-[11px] mb-3 sm:mb-4">About</p>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
            Crafting the <br /><span className="text-gradient">Future</span>
          </h2>
        </HeroReveal>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-start">
          <Parallax speed={0.15}>
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-muted-foreground">
              <TextReveal text="Computer Engineering undergraduate (Senior Year) with a strong interest in embedded systems, hardware/software co-design, and cybersecurity." />
              <TextReveal text="Hands-on experience in VHDL-based hardware design, Python/C programming, and real-world engineering projects. Actively developing skills in infrastructure security, vulnerability assessment, and penetration testing." />
              <TextReveal text="Driven by curiosity and a strong learning mindset, I continuously explore, research, and experiment with emerging technologies to become an efficient and security-aware hardware engineer." />
            </div>
          </Parallax>

          <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-5" staggerDelay={0.1}>
            {interests.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.label}>
                  <div className="cosmic-card p-5 sm:p-7 hover:border-primary/20 transition-all duration-500 group cursor-default h-full hover:translate-y-[-4px] hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.15)]">
                    <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-lg sm:rounded-xl bg-primary/8 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-primary/12 group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                    </div>
                    <p className="font-heading font-bold text-foreground text-xs sm:text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-[10px] sm:text-xs mt-1 sm:mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
