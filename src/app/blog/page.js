import Link from "next/link";
import { posts } from "@/content/posts";

export const metadata = { title: "BNIS - Blog" };

export default function BlogPage() {
  return (
    <main className="px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-40 pb-24">
        <h1 className="text-5xl font-semibold tracking-tighter mb-3">Blog</h1>
        <p className="text-neutral-600 mb-8 max-w-2xl">News, tutorials, and product updates from the BNIS team.</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {["All","Guides","Analytics","Product","Security"].map(c => (
            <button key={c} className="px-3 py-1.5 border border-neutral-200 rounded-full text-sm hover:border-neutral-300">{c}</button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              {p.cover ? (
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ) : null}
              <div className="p-6">
              <div className="text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full inline-block mb-3">{p.tag}</div>
              <h3 className="font-semibold tracking-tight mb-2">
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h3>
              <p className="text-neutral-700 text-sm mb-4">{p.excerpt}</p>
              <div className="text-xs text-neutral-500">{new Date(p.date).toLocaleDateString()} • {p.read} read</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
