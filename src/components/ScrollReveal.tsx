import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

const directionMap = {
  up: { y: 80, x: 0 },
  down: { y: -80, x: 0 },
  left: { x: 80, y: 0 },
  right: { x: -80, y: 0 },
};

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up", distance }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.55"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const baseOffset = directionMap[direction];
  const dist = distance ?? Math.abs(baseOffset.y || baseOffset.x);

  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const y = useTransform(smoothProgress, [0, 1], [baseOffset.y ? dist * Math.sign(baseOffset.y) : 0, 0]);
  const x = useTransform(smoothProgress, [0, 1], [baseOffset.x ? dist * Math.sign(baseOffset.x) : 0, 0]);
  const blur = useTransform(smoothProgress, [0, 0.5], [6, 0]);
  const filterBlur = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, y, filter: filterBlur }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Apple-style text that reveals word by word on scroll
export const TextReveal = ({ text, className = "" }: { text: string; className?: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={`leading-relaxed ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word} </Word>;
      })}
    </p>
  );
};

const Word = ({ children, progress, range }: { children: ReactNode; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.08, 1]);
  const y = useTransform(progress, range, [8, 0]);
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <motion.span style={{ opacity: smoothOpacity, y: smoothY }} className="inline-block mr-[0.25em] transition-colors duration-200">
      {children}
    </motion.span>
  );
};

// Stagger container — children animate in one by one
export const StaggerContainer = ({ children, className = "", staggerDelay = 0.08 }: { children: ReactNode; className?: string; staggerDelay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
  const opacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scale-in on scroll — like Apple product reveals (bidirectional)
export const ScaleReveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.45"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const scale = useTransform(smoothProgress, [0, 1], [0.9, 1]);
  const blur = useTransform(smoothProgress, [0, 0.6], [8, 0]);
  const filterBlur = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, filter: filterBlur }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax — moves slower than scroll for depth
export const Parallax = ({ children, className = "", speed = 0.3 }: { children: ReactNode; className?: string; speed?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
};

// Large heading that fades in with scale — Apple keynote style
export const HeroReveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const opacity = useTransform(smoothProgress, [0, 0.6], [0, 1]);
  const scale = useTransform(smoothProgress, [0, 1], [0.85, 1]);
  const y = useTransform(smoothProgress, [0, 1], [60, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, scale, y }} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
