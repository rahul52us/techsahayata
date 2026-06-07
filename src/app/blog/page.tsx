"use client";

import Link from "next/link";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import stores from "../../store/stores";

const BlogListingPage = observer(function BlogListingPage() {
  const { BlogStore } = stores;

  useEffect(() => {
    BlogStore.getBlogs().catch(() => {});
  }, [BlogStore]);

  return (
    <main className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700">Blogs</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">Stories, updates, and insights from Techsahayta.</h1>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BlogStore.blogs.data.map((blog) => (
            <Link key={blog._id} href={`/blog/${blog.slug}`} className="rounded-[1.75rem] bg-white p-5 shadow-sm transition hover:-translate-y-1">
              {blog.coverImageUrl ? (
                <img src={blog.coverImageUrl} alt={blog.title} className="h-52 w-full rounded-2xl object-cover" />
              ) : null}
              <h2 className="mt-5 text-2xl font-semibold text-slate-950">{blog.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{blog.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
});

export default BlogListingPage;
