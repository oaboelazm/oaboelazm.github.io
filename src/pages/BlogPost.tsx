import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>

          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            {post.tag}
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
            <Calendar className="w-4 h-4" /> {post.date}
          </div>

          <div className="prose prose-lg prose-portfolio max-w-none
            prose-headings:font-heading
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-p:leading-relaxed
            prose-li:leading-relaxed
            prose-ul:space-y-1
            prose-a:no-underline hover:prose-a:underline
            prose-pre:rounded-xl prose-pre:border prose-pre:border-border
            prose-blockquote:border-l-2 prose-blockquote:italic
          ">
            {post.content.split("\n\n").map((block, i) => {
              const trimmed = block.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("## ")) {
                return <h2 key={i}>{trimmed.replace("## ", "")}</h2>;
              }
              if (trimmed.startsWith("**") && trimmed.includes("** —")) {
                return <p key={i} dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/—/g, "—") }} />;
              }
              if (trimmed.startsWith("- ")) {
                const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i}>
                    {items.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                    ))}
                  </ul>
                );
              }
              if (/^\d+\. /.test(trimmed)) {
                const items = trimmed.split("\n").filter((l) => /^\d+\. /.test(l));
                return (
                  <ol key={i} className="list-decimal pl-5 space-y-1">
                    {items.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\. /, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                    ))}
                  </ol>
                );
              }
              return <p key={i} dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
            })}
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;
