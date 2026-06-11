const dashboardName = "dashboard";

export const authRoutes = {
  login: "/auth/login",
};

export const dashboardRoutes = {
  home: `/${dashboardName}`,
  contacts: `/${dashboardName}/contacts`,
  team: `/${dashboardName}/team`,
  properties: `/${dashboardName}/properties`,
  blogs: `/${dashboardName}/blogs`,
  testimonials: `/${dashboardName}/testimonials`,
  users: `/${dashboardName}/users`,
};

// Alias used by sidebar/layout components
export const dashboard = {
  home: `/${dashboardName}`,
  contacts: `/${dashboardName}/contacts`,
  team: `/${dashboardName}/team`,
  properties: `/${dashboardName}/properties`,
  blogs: `/${dashboardName}/blogs`,
  testimonials: `/${dashboardName}/testimonials`,
  users: `/${dashboardName}/users`,
  blog: {
    index: `/${dashboardName}/blogs`,
    create: `/${dashboardName}/blogs/create`,
  },
};

export const authentication = {
  login: "/login",
  register: "/register",
  createOrganisationStep1: "/register",
};

export const main = {
  home: "/",
  profile: "/profile",
  changePassword: "/change-password",
};
