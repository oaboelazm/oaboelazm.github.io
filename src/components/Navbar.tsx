import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 overflow-x-hidden ${
        scrolled ? "glass-strong shadow-[0_1px_30px_hsl(var(--background)/0.5)] py-0" : "py-1"
      }`}
    >
      <div className="w-full flex items-center justify-between py-4 px-4 sm:px-6">
        <Link to="/" className="font-heading text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-500 flex-shrink-0">
          oaboelazm<span className="text-primary">.</span>
        </Link>

        {isHome && (
          <div className="hidden md:flex items-center gap-10">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                className="relative text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-500 font-medium tracking-wide group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
              </motion.a>
            ))}
          </div>
        )}

        {isHome && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex-shrink-0 flex flex-col gap-1.5 p-3 rounded-lg bg-secondary/80 border border-border/50 text-foreground"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block w-5 h-0.5 bg-current transition-all duration-500 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-500 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-500 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        )}
      </div>

      {mobileOpen && isHome && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-strong border-t border-border/20 px-6 pb-6 overflow-hidden"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="block py-3 text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

