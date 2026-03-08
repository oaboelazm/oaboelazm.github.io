import ScrollReveal from "./ScrollReveal";
import { Rocket, Cpu, Code2, Radio } from "lucide-react";

const interests = [
  { icon: Rocket, label: "Artificial Intelligence", desc: "Deep learning & neural nets" },
  { icon: Cpu, label: "Embedded Systems", desc: "ARM, RTOS & firmware" },
  { icon: Code2, label: "Software Development", desc: "Full-stack & architecture" },
  { icon: Radio, label: "IoT & Connected Devices", desc: "MQTT, edge & cloud" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="nebula-orb w-[400px] h-[300px] top-[20%] right-[-10%] bg-[hsl(var(--nebula-1)/0.04)]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-mono font-medium tracking-widest uppercase text-xs mb-3">// About Me</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-12">
            Crafting the <span className="text-gradient">Future</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a passionate developer and engineer specializing in the intersection of
                artificial intelligence, embedded systems, and modern software development.
              </p>
              <p>
                With a deep curiosity for how intelligent systems interact with the physical world,
                I build solutions that bridge cutting-edge AI with real-world hardware — from
                computer vision pipelines to IoT-connected embedded devices.
              </p>
              <p>
                I believe in clean code, elegant architecture, and technology that makes a
                meaningful impact.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="cosmic-card p-6 hover:border-primary/30 transition-all duration-300 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-heading font-bold text-foreground text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
