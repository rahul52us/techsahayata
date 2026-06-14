import { CalendarIcon } from "@chakra-ui/icons";
import {
  FaBlog,
  FaChartPie,
  FaCommentAlt,
  FaCogs,
  FaPlusCircle,
  FaGlobe,
} from "react-icons/fa";

interface SidebarItem {
  id: number;
  name: string;
  icon: any;
  url: string;
  role?: string[];
  children?: SidebarItem[];
}

const sidebarDatas: SidebarItem[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: <FaChartPie />,
    url: "/dashboard",
    role: ["user", "admin", "superadmin", "manager"],
  },
  {
    id: 4,
    name: "Testimonials",
    icon: <FaCommentAlt />,
    url: "/dashboard/testimonials",
    role: ["user", "admin", "superadmin", "manager"],
  },
  {
    id: 5,
    name: "Websites",
    icon: <FaGlobe />,
    url: "/dashboard/websites",
    role: ["user", "admin", "superadmin", "manager"],
  },
  {
    id: 501,
    name: "Blogs",
    icon: <FaBlog />,
    url: "/dashboard/blogs",
    role: ["user", "superadmin", "manager", "admin"],
    children: [
      {
        id: 502,
        name: "All Blogs",
        icon: <CalendarIcon />,
        url: "/dashboard/blogs",
        role: ["user", "superadmin", "manager", "admin"],
      },
      {
        id: 503,
        name: "Create",
        icon: <FaPlusCircle />,
        url: "/dashboard/blogs/create",
        role: ["superadmin", "manager", "admin"],
      },
    ],
  },
];

export const sidebarFooterData: SidebarItem[] = [
  {
    id: 34,
    name: "Settings",
    icon: <FaCogs />,
    url: "/profile",
    role: ["user", "admin", "superadmin", "manager"],
  },
];

const getSidebarDataByRole = (role: string[] = ["user"]): SidebarItem[] => {
  const filterByRole = (items: SidebarItem[]): SidebarItem[] => {
    return items
      .filter((item) => !item.role || item.role.some((r) => role.includes(r)))
      .map((item) => ({
        ...item,
        children: item.children ? filterByRole(item.children) : undefined,
      }));
  };
  return filterByRole(sidebarDatas);
};

const userRole = ["user"];
const sidebarData = getSidebarDataByRole(userRole);

export { getSidebarDataByRole, sidebarData };
