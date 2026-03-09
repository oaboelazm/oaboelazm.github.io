import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative py-14 border-t border-border/10">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <Link to="/" className="font-heading text-sm font-bold tracking-tight text-foreground/40 hover:text-foreground/70 transition-colors duration-500">
          oaboelazm<span className="text-primary/60">.</span>
        </Link>

        <p className="text-muted-foreground text-xs font-mono tracking-wider">
          © {new Date().getFullYear()} Omar. All rights reserved.
        </p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
