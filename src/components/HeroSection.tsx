import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);
  const smoothOpacity = useSpring(heroOpacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(heroScale, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(heroY, { stiffness: 100, damping: 30 });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden max-w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] top-[-10%] left-[-5%] rounded-full bg-[hsl(var(--primary)/0.03)] blur-[150px] animate-float" />
        <div className="absolute w-[250px] sm:w-[600px] h-[250px] sm:h-[600px] bottom-[-5%] right-[-5%] rounded-full bg-[hsl(var(--accent)/0.03)] blur-[150px] animate-float" style={{ animationDelay: "5s" }} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/8 to-transparent" />

      <motion.div
        style={{ opacity: smoothOpacity, scale: smoothScale, y: smoothY }}
        className="container mx-auto px-5 sm:px-6 relative z-10 text-center"
      >
        <div className="flex justify-center w-full mb-6 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[10px] sm:text-xs font-mono text-muted-foreground border border-border/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-pulse" />
            Open to opportunities
          </motion.div>
        </div>

        <div className="relative inline-block mb-4 sm:mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5, duration: 2 }}
            className="absolute -inset-x-10 sm:-inset-x-20 -inset-y-8 sm:-inset-y-16 bg-primary/10 blur-[80px] sm:blur-[100px] rounded-full"
          />
          <h1 className="relative z-10 font-heading text-5xl sm:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-[-0.04em]">
            <span className="block overflow-hidden pb-2 sm:pb-4">
              {"Omar".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 80, rotateX: 40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.5 + i * 0.1,
                    duration: 1,
                    type: "spring",
                    bounce: 0.35,
                  }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/40"
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring", bounce: 0.5 }}
                className="inline-block text-primary ml-1"
              >.</motion.span>
            </span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <p className="text-base sm:text-xl lg:text-3xl text-muted-foreground font-light leading-relaxed tracking-wide">
            Engineering intelligence at the edge of
          </p>
          <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 gap-y-1 mt-2 sm:mt-3">
            {[
              { text: "Embedded Systems", color: "primary" },
              { text: "Cybersecurity", color: "accent" },
              { text: "Software", color: "primary" },
            ].map((item, i) => (
              <motion.span
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-base sm:text-xl lg:text-3xl font-semibold text-foreground group cursor-default"
              >
                <span className="relative z-10">{item.text}</span>
                <motion.span
                  className={`absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] bg-${item.color}/40 -z-10 origin-left`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2 + i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
                {i < 2 && <span className="text-muted-foreground font-light mx-1">·</span>}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm sm:text-base overflow-hidden transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_50px_hsl(var(--primary)/0.35)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              Explore Work
              <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full glass border border-border/20 text-foreground font-semibold text-sm sm:text-base overflow-hidden transition-all duration-500 hover:scale-[1.04] hover:border-primary/30"
          >
            <span className="relative z-10">Let's Talk</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 sm:gap-4"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 3, duration: 1 }}
          className="text-[9px] sm:text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground/40"
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 sm:h-9 rounded-full border border-muted-foreground/10 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-1.5 sm:h-2 rounded-full bg-muted-foreground/30"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
