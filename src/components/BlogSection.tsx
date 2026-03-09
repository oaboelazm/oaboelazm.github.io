import ScrollReveal, { HeroReveal } from "./ScrollReveal";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => (
  <section id="blog" className="py-20 sm:py-32 lg:py-52 relative">
    <div className="section-divider absolute top-0 left-0 right-0" />
    <div className="absolute w-[600px] h-[500px] top-[30%] left-[-15%] rounded-full bg-[hsl(var(--nebula-1)/0.03)] blur-[150px]" />

    <div className="container mx-auto px-5 sm:px-6 relative z-10 max-w-6xl">
      <HeroReveal className="mb-10 sm:mb-16 lg:mb-20 text-center">
        <p className="text-primary font-mono font-medium tracking-[0.25em] uppercase text-[11px] mb-3 sm:mb-4">Blog</p>
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
          Latest <span className="text-gradient">Articles</span>
        </h2>
      </HeroReveal>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
        {blogPosts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 0.05}>
            <Link
              to={`/blog/${post.slug}`}
              className="group block h-full cosmic-card p-5 sm:p-7 hover:border-primary/20 transition-all duration-500 hover:translate-y-[-4px]"
            >
              <span className="inline-block text-[10px] font-mono font-semibold tracking-[0.15em] uppercase text-primary bg-primary/8 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg mb-4 sm:mb-5 border border-primary/8">
                {post.tag}
              </span>
              <h3 className="font-heading text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-500">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground/50">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2}>
        <div className="text-center mt-10 sm:mt-14">
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
