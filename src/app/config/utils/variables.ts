export const AUTH_TOKEN = "techsahayta_admin_token";
export const USER_SESSION_DATA = "techsahayta_admin_user";
export const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "") || "http://localhost:5000";
export const ENCRYPT_SECRET_KEY = process.env.NEXT_PUBLIC_ENCRYPT_SECRET_KEY || "techsahayta-secret";

