export type UserRole = "admin" | "editor" | "viewer";

export interface AuthUser {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  createdAt?: string;
}

export interface DashboardCounts {
  totalBlogs: number;
  publishedBlogs: number;
  totalTestimonials: number;
  totalUsers: number;
  activeUsers: number;
}

export interface BlogItem {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  author?: Pick<AuthUser, "_id" | "name" | "email">;
}

export interface TestimonialItem {
  _id: string;
  name: string;
  profession: string;
  company?: string;
  quote: string;
  imageUrl?: string;
  rating: number;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

