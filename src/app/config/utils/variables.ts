export const AUTH_TOKEN = "techsahayta_admin_token";
export const USER_SESSION_DATA = "techsahayta_admin_user";
export const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "") || "http://localhost:5000";
export const ENCRYPT_SECRET_KEY = process.env.NEXT_PUBLIC_ENCRYPT_SECRET_KEY || "techsahayta-secret";
export const WEBSITE_TITLE = process.env.NEXT_PUBLIC_WEBSITE_TITLE || "Techsahayata";
export const INSTRAGRAM_LINK = process.env.NEXT_PUBLIC_INSTAGRAM_LINK || "https://instagram.com";export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const WEBSITE_DESCRIPTION = process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION || "Your partner in technology";
export const KEYWORDS = process.env.NEXT_PUBLIC_KEYWORDS || "technology, services, sahayata";
