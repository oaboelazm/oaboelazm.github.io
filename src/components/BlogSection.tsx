import ScrollReveal from "./ScrollReveal";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => (
  <section id="blog" className="py-32 relative">
    <div className="absolute top-1/2 left-0 w-[500px] h-[400px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />

    <div className="container mx-auto px-6 relative z-10">
      <ScrollReveal>
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3 text-center">Blog</p>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-16 text-center">
          Latest <span className="text-gradient">Articles</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {blogPosts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 0.1}>
            <Link
              to={`/blog/${post.slug}`}
              className="group block h-full rounded-2xl glass p-6 hover:border-primary/30 transition-all duration-300"
            >
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                {post.tag}
              </span>
              <h3 className="font-heading text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default BlogSection;
