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

          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-14 font-light leading-relaxed tracking-wide"
          >
            Engineering intelligence at the edge of
            <br className="hidden sm:block" />
            <span className="text-foreground font-semibold relative inline-block mx-1 group">
              <span className="relative z-10">AI</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/40 -z-10 group-hover:h-full transition-all duration-300" />
            </span>,
            <span className="text-foreground font-semibold relative inline-block mx-1 group">
              <span className="relative z-10">Embedded Systems</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary/60 -z-10 group-hover:h-full transition-all duration-300" />
            </span> &
            <span className="text-foreground font-semibold relative inline-block mx-1 group">
              <span className="relative z-10">Software</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-accent/40 -z-10 group-hover:h-full transition-all duration-300" />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full glass border-2 border-primary/20 text-foreground font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-primary/5 hover:border-primary/50"
            >
              <span className="relative z-10">Let's Talk</span>
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
