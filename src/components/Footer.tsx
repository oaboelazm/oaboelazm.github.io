import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative py-12 border-t border-border/30">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

    <div className="container mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="brand-mark group">
          <div className="brand-icon !w-6 !h-6 !rounded transition-transform duration-300 group-hover:scale-110" />
          <span className="font-heading text-sm font-bold tracking-tight">
            <span className="text-foreground">ORBIT</span>
            <span className="text-primary">.</span>
          </span>
        </Link>

        <p className="text-muted-foreground/60 text-xs font-mono">
          © {new Date().getFullYear()} · Built from the cosmos
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
