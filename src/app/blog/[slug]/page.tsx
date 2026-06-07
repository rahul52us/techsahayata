"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";

const BlogDetailPage = observer(function BlogDetailPage() {
  const params = useParams<{ slug: string }>();
  const { BlogStore } = stores;

  useEffect(() => {
    if (!params?.slug) return;
    BlogStore.getBlog(params.slug).catch(() => {});
  }, [BlogStore, params?.slug]);

  const blog = BlogStore.singleBlog.data;

  if (!blog) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500">Loading blog...</p>
      </main>
    );
  }

  return (
    <main className="bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700">Blog</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">{blog.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{blog.excerpt}</p>
        {blog.coverImageUrl ? (
          <img src={blog.coverImageUrl} alt={blog.title} className="mt-8 h-auto w-full rounded-[1.5rem] object-cover" />
        ) : null}
        <div className="mt-8 whitespace-pre-wrap text-base leading-8 text-slate-700">{blog.content}</div>
      </article>
    </main>
  );
});

export default BlogDetailPage;
