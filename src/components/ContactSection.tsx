import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3 text-center">Contact</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-16 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have a project in mind or want to collaborate? I'd love to hear from you.
                Feel free to reach out through the form or connect with me on social media.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 glow-primary"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
