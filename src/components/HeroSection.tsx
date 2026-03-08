import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Soft nebula orbs */}
      <div className="nebula-orb w-[500px] h-[500px] top-[-10%] left-[-10%] bg-[hsl(var(--nebula-2)/0.04)] animate-float" />
      <div className="nebula-orb w-[400px] h-[400px] bottom-[5%] right-[-5%] bg-[hsl(var(--nebula-1)/0.03)] animate-float" style={{ animationDelay: "4s" }} />

      {/* Horizon glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-8 border border-border/30"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-pulse" />
            Open to opportunities
          </motion.div>

          {/* Name — letter by letter stagger */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] mb-6 tracking-tight">
            <span className="block overflow-hidden">
              {"Omar".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + i * 0.04,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block text-foreground"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-12 font-light leading-relaxed"
          >
            Engineering intelligence at the edge of
            <span className="text-foreground/80 font-medium"> AI</span>,
            <span className="text-foreground/80 font-medium"> Embedded Systems</span> &
            <span className="text-foreground/80 font-medium"> Software</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl glass border border-border/40 text-foreground font-semibold hover:border-primary/30 transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-border/40 text-muted-foreground font-semibold hover:text-foreground hover:border-border/60 transition-all duration-300"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-muted-foreground/15 flex justify-center pt-1.5"
          >
            <div className="w-0.5 h-1.5 rounded-full bg-muted-foreground/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
