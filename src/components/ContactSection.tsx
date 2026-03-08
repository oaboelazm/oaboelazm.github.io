import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="nebula-orb w-[500px] h-[400px] bottom-[10%] left-[30%] bg-[hsl(var(--nebula-2)/0.04)]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-mono font-medium tracking-widest uppercase text-xs mb-3 text-center">// Contact</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold mb-6 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-md mx-auto mb-16">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1} className="lg:col-span-2 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="font-heading font-bold text-foreground">Let's connect</p>
                <p className="text-muted-foreground text-sm">
                  Feel free to reach out through the form or connect with me on social media.
                </p>
              </div>

              <div className="flex gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl cosmic-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40 transition-all duration-300 font-body text-sm"
                    required
                  />
                  {focused === "name" && (
                    <motion.div
                      layoutId="focus-ring"
                      className="absolute inset-0 rounded-xl border-2 border-primary/20 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40 transition-all duration-300 font-body text-sm"
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40 transition-all duration-300 resize-none font-body text-sm"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
