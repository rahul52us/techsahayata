"use client";

import { makeAutoObservable, runInAction } from "mobx";
import api from "../config/axios";
import { authRoutes, dashboardRoutes } from "../../config/utils/routes";
import type { AuthUser } from "@/lib/types";
import { AUTH_TOKEN, ENCRYPT_SECRET_KEY, USER_SESSION_DATA } from "../../config/utils/variables";
import CryptoJS from "crypto-js";
import { clearAuthSession, getAuthUser, setAuthSession } from "@/lib/auth";

class AuthStore {
  authUser: AuthUser | null = null;
  isAuthenticated = false;
  notificationOpen = false;
  notificationData = {
    title: "",
    description: "",
    status: "success" as "success" | "error" | "info",
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.restoreSession();
  }

  get user() {
    return this.authUser;
  }

  set user(value: AuthUser | null) {
    this.authUser = value;
  }

  restoreSession() {
    if (typeof window === "undefined") return;

    const token = window.localStorage.getItem(AUTH_TOKEN);
    const rawUser = window.sessionStorage.getItem(USER_SESSION_DATA);

    if (token && rawUser) {
      try {
        const decryptedBytes = CryptoJS.AES.decrypt(rawUser, ENCRYPT_SECRET_KEY);
        const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
        this.authUser = decryptedData ? (JSON.parse(decryptedData) as AuthUser) : null;
        this.isAuthenticated = true;
      } catch {
        this.clearSession();
      }
      return;
    }

    if (token) {
      const fallbackUser = getAuthUser();
      if (fallbackUser) {
        this.authUser = fallbackUser;
        this.isAuthenticated = true;
        return;
      }

      this.isAuthenticated = true;
      void this.fetchUser();
    }
  }

  setSession(token: string, user?: AuthUser) {
    if (typeof window === "undefined") return;

    if (user) {
      setAuthSession(token, user);
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(user), ENCRYPT_SECRET_KEY).toString();
      window.sessionStorage.setItem(USER_SESSION_DATA, encryptedData);
    }
  }

  clearSession() {
    if (typeof window === "undefined") return;

    clearAuthSession();
    this.authUser = null;
    this.isAuthenticated = false;
  }

  openNotification = (data: {
    title?: string;
    message: string;
    type?: "success" | "error" | "info";
    duration?: number;
    placement?: string;
    action?: unknown;
  }) => {
    this.notificationData = {
      title: data.title || "",
      description: data.message,
      status: data.type || "success",
    };
    this.notificationOpen = true;
  };

  closeNotification = () => {
    this.notificationOpen = false;
  };

  async login(formData: { username: string; password: string; loginType?: string }) {
    const { data } = await api.post(authRoutes.login, {
      username: formData.username,
      password: formData.password,
      loginType: formData.loginType || "username",
    });

    const response = data;
    const payload = data?.data ?? data;
    const token = payload?.authorization_token ?? data?.authorization_token;
    const user = payload?.user as AuthUser | undefined;

    if (!token) {
      throw new Error("Invalid login response");
    }

    runInAction(() => {
      const fallbackUser: AuthUser | undefined =
        user ?? {
          _id: formData.username,
          name: formData.username,
          email: formData.username,
          role: "admin",
          isActive: true,
        };

      this.setSession(token, fallbackUser);
      this.authUser = fallbackUser;
      this.isAuthenticated = true;
    });

    return response;
  }

  async fetchUser() {
    try {
      const { data } = await api.get("/auth/me");
      const fetchedUser = (data?.data ?? data) as AuthUser | undefined;

      if (!fetchedUser) {
        return null;
      }

      runInAction(() => {
        this.authUser = fetchedUser;
        this.isAuthenticated = true;
        const token = window.localStorage.getItem(AUTH_TOKEN);
        if (token) {
          setAuthSession(token, fetchedUser);
          const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(fetchedUser), ENCRYPT_SECRET_KEY).toString();
          window.sessionStorage.setItem(USER_SESSION_DATA, encryptedData);
        }
      });

      return fetchedUser;
    } catch {
      return null;
    }
  }

  logout() {
    this.clearSession();
    this.openNotification({
      title: "Signed out",
      message: "You have been logged out successfully.",
      type: "info",
    });
  }

  get homeRoute() {
    return dashboardRoutes.home;
  }
}

export const authStore = new AuthStore();
