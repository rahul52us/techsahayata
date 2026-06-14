import { authStore } from "./authStore/authStore";
import { blogStore } from "./blogStore/blogStore";
import { dashboardStore } from "./dashboardStore/dashboardStore";
import { testimonialStore } from "./testimonialStore/testimonialStore";
import { userStore } from "./userStore/userStore";
import { layoutStore } from "./layoutStore/layoutStore";
import { themeStore } from "./themeStore/themeStore";
import { websiteStore } from "./websiteStore/websiteStore";

const stores: any = {
  auth: authStore,
  dashboardStore,
  BlogStore: blogStore,
  testimonialStore,
  userStore,
  layout: layoutStore,
  themeStore,
  websiteStore,
};

export default stores;
