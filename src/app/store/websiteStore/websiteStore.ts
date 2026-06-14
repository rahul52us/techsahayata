"use client";

import { makeAutoObservable, runInAction } from "mobx";
import api from "../config/axios";

class WebsiteStore {
  websites = {
    data: [] as any[],
    loading: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  getWebsites = async () => {
    this.websites.loading = true;
    try {
      const { data } = await api.get("/websites");
      runInAction(() => {
        this.websites.data = data?.data || [];
      });
    } catch (error) {
      console.error("Failed to fetch websites", error);
    } finally {
      runInAction(() => {
        this.websites.loading = false;
      });
    }
  };

  createWebsite = async (payload: any) => {
    const { data } = await api.post("/websites", payload);
    return data;
  };

  updateWebsite = async (id: string, payload: any) => {
    const { data } = await api.put(`/websites/${id}`, payload);
    return data;
  };

  deleteWebsite = async (id: string) => {
    const { data } = await api.delete(`/websites/${id}`);
    return data;
  };
}

export const websiteStore = new WebsiteStore();
