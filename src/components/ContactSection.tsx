import { useState } from "react";
import ScrollReveal, { HeroReveal } from "./ScrollReveal";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-40 lg:py-52 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute w-[600px] h-[500px] bottom-[10%] left-[25%] rounded-full bg-[hsl(var(--nebula-2)/0.03)] blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <HeroReveal className="text-center mb-20">
          <p className="text-primary font-mono font-medium tracking-[0.25em] uppercase text-[11px] mb-4">Contact</p>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </HeroReveal>

        <div className="grid lg:grid-cols-2 gap-20 max-w-5xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="space-y-10">
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
                Have a project in mind or want to collaborate? I'd love to hear from you.
                Feel free to reach out through the form or connect with me on social media.
              </p>

              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-13 h-13 rounded-xl cosmic-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-colors duration-500"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { type: "text", placeholder: "Your Name", key: "name" as const },
                { type: "email", placeholder: "Your Email", key: "email" as const },
              ].map((field) => (
                <div key={field.key}>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.key]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/10 transition-all duration-500 font-body"
                    required
                  />
                </div>
              ))}
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-secondary/40 border border-border/30 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/10 transition-all duration-500 resize-none font-body"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_40px_hsl(var(--primary)/0.25)] transition-all duration-500"
              >
                Send Message
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
