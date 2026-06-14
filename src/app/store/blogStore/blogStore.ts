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

  getBlogs = async (admin: any = false) => {
    this.blogs.loading = true;
    try {
      const endpoint = admin ? "/blogs/admin/list" : "/blogs";
      const { data } = await api.get(endpoint);
      runInAction(() => {
        // Handle both `{ data: [...] }` and `{ data: { data: [...] } }` backend formats
        const responseData = data?.data;
        this.blogs.data = Array.isArray(responseData) ? responseData : (responseData?.data ?? []);
      });
    } finally {
      runInAction(() => {
        this.blogs.loading = false;
      });
    }
  };

  getBlog = async (slug: string) => {
    this.singleBlog.loading = true;
    try {
      const { data } = await api.get(`/blogs/${slug}`);
      runInAction(() => {
        this.singleBlog.data = data?.data ?? null;
      });
      return data?.data ?? null;
    } finally {
      runInAction(() => {
        this.singleBlog.loading = false;
      });
    }
  };

  createBlog = async (payload: Omit<BlogItem, "_id" | "createdAt" | "updatedAt" | "slug" | "author">) => {
    const { data } = await api.post("/blogs", payload);
    return data;
  };

  updateBlog = async (id: string, payload: Partial<BlogItem>) => {
    const { data } = await api.put(`/blogs/${id}`, payload);
    return data;
  };

  deleteBlog = async (id: any) => {
    let blogId = id;
    if (typeof id === 'object' && id !== null) {
        blogId = id.id; // Extract id if an object is passed (like {id: ..., deleted: ...})
    }
    const { data } = await api.delete(`/blogs/${blogId}`);
    return data;
  };

  getStatusCount = async (payload: any = {}) => {
    try {
      const { data } = await api.get("/blogs/admin/list");
      // Handle nested formats just in case
      const responseData = data?.data;
      const blogs = Array.isArray(responseData) ? responseData : (responseData?.data ?? []);
      
      const publicBlogs = blogs.filter((b: any) => !b.isPrivate).length;
      const privateBlogs = blogs.filter((b: any) => b.isPrivate).length;
      const deletedBlogs = 0; 
      return { data: { publicBlogs, privateBlogs, deletedBlogs } };
    } catch (e) {
      return { data: { publicBlogs: 0, privateBlogs: 0, deletedBlogs: 0 } };
    }
  }
}

export const blogStore = new BlogStore();
