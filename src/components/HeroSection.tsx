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

          {/* Name — clean reveal */}
          <div className="relative inline-block">
            <motion.div 
              className="absolute -inset-x-20 -inset-y-10 bg-primary/15 blur-[100px] rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
            />
            <h1 className="relative z-10 font-heading text-6xl sm:text-8xl lg:text-[7rem] font-black leading-[0.95] mb-8 tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block text-foreground"
              >
                Omar
                <span className="text-primary">.</span>
              </motion.span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-12 font-light leading-relaxed"
          >
            Engineering intelligence at the edge of{" "}
            <span className="text-foreground font-medium">AI</span>,{" "}
            <span className="text-foreground font-medium">Embedded Systems</span> &{" "}
            <span className="text-foreground font-medium">Software</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full glass border border-border/50 text-foreground font-semibold transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
            >
              Let's Talk
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
