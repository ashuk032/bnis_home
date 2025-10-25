import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPostBySlug } from "@/content/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "BNIS - Blog" };
  return {
    title: `${post.title} – BNIS Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
            ← Back to Blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-16 pb-10 border-b border-neutral-100">
          <div className="inline-block px-3 py-1 bg-neutral-50 rounded-full text-xs font-medium text-neutral-700 mb-5">
            {post.tag}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-base text-neutral-500">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            <span>•</span>
            <span>{post.read} read</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </header>

        {/* Cover Image */}
        {post.cover ? (
          <figure className="mb-10">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-auto rounded-2xl border border-neutral-100 object-cover"
              loading="lazy"
            />
          </figure>
        ) : null}

        {/* Article Content */}
        <article className="blog-content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-neutral-100">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            ← Back to all posts
          </Link>
        </footer>
      </div>
    </main>
  );
}
