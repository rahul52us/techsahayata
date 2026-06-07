"use client";

import { makeAutoObservable, runInAction } from "mobx";
import api from "../config/axios";
import type { BlogItem } from "@/lib/types";

class BlogStore {
  blogs = {
    data: [] as BlogItem[],
    loading: false,
  };
  singleBlog = {
    data: null as BlogItem | null,
    loading: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getBlogs(admin = false) {
    this.blogs.loading = true;
    try {
      const endpoint = admin ? "/blogs/admin/list" : "/blogs";
      const { data } = await api.get(endpoint);
      runInAction(() => {
        this.blogs.data = data?.data ?? [];
      });
    } finally {
      runInAction(() => {
        this.blogs.loading = false;
      });
    }
  }

  async getBlog(slug: string) {
    this.singleBlog.loading = true;
    try {
      const { data } = await api.get(`/blogs/${slug}`);
      runInAction(() => {
        this.singleBlog.data = data?.data ?? null;
      });
    } finally {
      runInAction(() => {
        this.singleBlog.loading = false;
      });
    }
  }

  async createBlog(payload: Omit<BlogItem, "_id" | "createdAt" | "updatedAt" | "slug" | "author">) {
    const { data } = await api.post("/blogs", payload);
    return data;
  }

  async updateBlog(id: string, payload: Partial<BlogItem>) {
    const { data } = await api.put(`/blogs/${id}`, payload);
    return data;
  }

  async deleteBlog(id: string) {
    const { data } = await api.delete(`/blogs/${id}`);
    return data;
  }
}

export const blogStore = new BlogStore();
