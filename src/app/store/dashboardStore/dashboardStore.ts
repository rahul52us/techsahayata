"use client";

import { makeAutoObservable, runInAction } from "mobx";
import api from "../config/axios";
import type { DashboardCounts } from "@/lib/types";

class DashboardStore {
  dashboardData: DashboardCounts = {
    totalBlogs: 0,
    publishedBlogs: 0,
    totalTestimonials: 0,
    totalUsers: 0,
    activeUsers: 0,
  };
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getDashboardData() {
    this.loading = true;
    try {
      const { data } = await api.get("/dashboard");
      runInAction(() => {
        this.dashboardData = data?.data ?? data;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}

export const dashboardStore = new DashboardStore();

