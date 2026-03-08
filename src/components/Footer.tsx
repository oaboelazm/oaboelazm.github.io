import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative py-10 border-t border-border/20">
    <div className="container mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-heading text-sm font-bold tracking-tight text-foreground/60 hover:text-foreground transition-colors">
          YN<span className="text-primary">.</span>
        </Link>

        <p className="text-muted-foreground/50 text-xs">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
