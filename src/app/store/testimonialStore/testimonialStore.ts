"use client";

import { makeAutoObservable, runInAction } from "mobx";
import api from "../config/axios";
import type { TestimonialItem } from "@/lib/types";

class TestimonialStore {
  testimonialLayout = "table";
  testimonials = {
    data: [] as TestimonialItem[],
    loading: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getTestimonials() {
    this.testimonials.loading = true;
    try {
      const { data } = await api.get("/testimonials");
      runInAction(() => {
        this.testimonials.data = data?.data ?? [];
      });
    } finally {
      runInAction(() => {
        this.testimonials.loading = false;
      });
    }
  }

  async createTestimonial(payload: Omit<TestimonialItem, "_id" | "createdAt" | "updatedAt">) {
    const { data } = await api.post("/testimonials", payload);
    return data;
  }

  async updateTestimonial(id: string, payload: Partial<TestimonialItem>) {
    const { data } = await api.put(`/testimonials/${id}`, payload);
    return data;
  }

  async deleteTestimonial(id: string) {
    const { data } = await api.delete(`/testimonials/${id}`);
    return data;
  }

  toggleTestimonialLayout() {
    this.testimonialLayout = this.testimonialLayout === "table" ? "grid" : "table";
  }
}

export const testimonialStore = new TestimonialStore();

