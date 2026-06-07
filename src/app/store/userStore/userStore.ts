"use client";

import { makeAutoObservable, runInAction } from "mobx";
import api from "../config/axios";
import type { AuthUser, UserRole } from "@/lib/types";

class UserStore {
  users = {
    data: [] as AuthUser[],
    loading: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getUsers() {
    this.users.loading = true;
    try {
      const { data } = await api.get("/users");
      runInAction(() => {
        this.users.data = data?.data ?? [];
      });
    } finally {
      runInAction(() => {
        this.users.loading = false;
      });
    }
  }

  async createUser(payload: { name: string; email: string; password: string; role: UserRole; isActive: boolean }) {
    const { data } = await api.post("/users", payload);
    return data;
  }

  async updateUser(id: string, payload: Partial<{ name: string; email: string; password: string; role: UserRole; isActive: boolean }>) {
    const { data } = await api.put(`/users/${id}`, payload);
    return data;
  }

  async deleteUser(id: string) {
    const { data } = await api.delete(`/users/${id}`);
    return data;
  }
}

export const userStore = new UserStore();

