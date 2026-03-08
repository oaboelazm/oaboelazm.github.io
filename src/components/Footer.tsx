import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="relative py-12 border-t border-border/20">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center gap-6">
        <Link to="/" className="font-heading text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-300">
          Omar<span className="text-primary">.</span>
        </Link>

        <div className="flex gap-8 text-sm">
          {["About", "Projects", "Experience", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="section-divider w-full max-w-xs" />

        <motion.p 
          className="text-muted-foreground/50 text-xs flex items-center gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Made with <Heart className="w-3 h-3 text-primary/60 fill-primary/60" /> © {new Date().getFullYear()} Omar
        </motion.p>
      </div>
    </div>
  </footer>
);

export default Footer;
