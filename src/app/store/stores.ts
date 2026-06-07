import { authStore } from "./authStore/authStore";
import { blogStore } from "./blogStore/blogStore";
import { dashboardStore } from "./dashboardStore/dashboardStore";
import { testimonialStore } from "./testimonialStore/testimonialStore";
import { userStore } from "./userStore/userStore";

const stores = {
  auth: authStore,
  dashboardStore,
  BlogStore: blogStore,
  testimonialStore,
  userStore,
};

export default stores;
