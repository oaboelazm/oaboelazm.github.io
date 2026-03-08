import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => (
  <div className="min-h-screen bg-background">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Blog</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-16">
          All <span className="text-gradient">Articles</span>
        </h1>
      </motion.div>

      <div className="grid gap-6 max-w-3xl">
        {blogPosts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              to={`/blog/${post.slug}`}
              className="group block rounded-2xl glass p-6 sm:p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                    {post.tag}
                  </span>
                  <h2 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2 shrink-0">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Blog;
