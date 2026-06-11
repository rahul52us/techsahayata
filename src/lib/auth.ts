"use client";

import { AUTH_TOKEN, USER_SESSION_DATA } from "@/app/config/utils/variables";
import type { AuthUser } from "./types";

export function getAuthToken() {
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem(AUTH_TOKEN) ?? "";
}

export function getAuthUser() {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(USER_SESSION_DATA);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function setAuthSession(token: string, user: AuthUser) {
  window.localStorage.setItem(AUTH_TOKEN, token);
  window.localStorage.setItem(USER_SESSION_DATA, JSON.stringify(user));
}

export function clearAuthSession() {
  window.localStorage.removeItem(AUTH_TOKEN);
  window.localStorage.removeItem(USER_SESSION_DATA);
}
