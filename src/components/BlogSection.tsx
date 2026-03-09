import ScrollReveal, { HeroReveal } from "./ScrollReveal";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";

const BlogSection = () => (
  <section id="blog" className="py-40 lg:py-52 relative">
    <div className="section-divider absolute top-0 left-0 right-0" />
    <div className="absolute w-[600px] h-[500px] top-[30%] left-[-15%] rounded-full bg-[hsl(var(--nebula-1)/0.03)] blur-[150px]" />

    <div className="container mx-auto px-6 relative z-10 max-w-6xl">
      <HeroReveal className="mb-20 text-center">
        <p className="text-primary font-mono font-medium tracking-[0.25em] uppercase text-[11px] mb-4">Blog</p>
        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
          Latest <span className="text-gradient">Articles</span>
        </h2>
      </HeroReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {blogPosts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 0.05}>
            <Link
              to={`/blog/${post.slug}`}
              className="group block h-full cosmic-card p-7 hover:border-primary/20 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_25px_60px_-20px_hsl(var(--primary)/0.1)]"
            >
              <span className="inline-block text-[10px] font-mono font-semibold tracking-[0.15em] uppercase text-primary bg-primary/8 px-3 py-1.5 rounded-lg mb-5 border border-primary/8">
                {post.tag}
              </span>
              <h3 className="font-heading text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-500">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground/50">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2}>
        <div className="text-center mt-14">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2.5 text-primary font-medium hover:gap-4 transition-all duration-500 text-sm"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default BlogSection;
