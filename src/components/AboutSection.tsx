import ScrollReveal from "./ScrollReveal";

const interests = [
  { icon: "🤖", label: "Artificial Intelligence" },
  { icon: "⚡", label: "Embedded Systems" },
  { icon: "💻", label: "Software Development" },
  { icon: "📡", label: "IoT & Connected Devices" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About Me</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-12">
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
              {interests.map((item, i) => (
                <div
                  key={item.label}
                  className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group cursor-default"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <p className="font-heading font-semibold text-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
