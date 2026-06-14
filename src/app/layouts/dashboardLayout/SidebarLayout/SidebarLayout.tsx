"use client";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Text,
  Tooltip,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { usePathname, useRouter } from "next/navigation";
import type { ElementType, Dispatch, SetStateAction } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { FaAddressBook, FaBlog, FaBuilding, FaChartPie, FaCommentAlt, FaSignOutAlt, FaUsers, FaGlobe } from "react-icons/fa";
import stores from "../../../store/stores";
import { sidebarWidth, mediumSidebarWidth, headerHeight } from "../../../component/config/utils/variable";
import { WEBSITE_TITLE } from "../../../config/utils/variables";

type SidebarItem = {
  label: string;
  href: string;
  icon: ElementType;
};

const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: FaChartPie },
  // { label: "Contacts", href: "/dashboard/contacts", icon: FaAddressBook },
  // { label: "Team", href: "/dashboard/team", icon: FaUsers },
  // { label: "Properties", href: "/dashboard/properties", icon: FaBuilding },
  { label: "Testimonials", href: "/dashboard/testimonials", icon: FaCommentAlt },
  { label: "Websites", href: "/dashboard/websites", icon: FaGlobe },
  { label: "Blogs", href: "/dashboard/blogs", icon: FaBlog },
];

interface SidebarProps {
  isCollapsed: boolean;
  onItemClick: (item: SidebarItem) => void;
  onLeafItemClick: (item: SidebarItem) => void;
  openMobileSideDrawer: boolean;
  setOpenMobileSideDrawer: Dispatch<SetStateAction<boolean>>;
}

const getInitials = (value: string) => {
  const parts = value
    .split(/\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length === 0) {
    return "T";
  }

  if (parts.length === 1) {
    const word = parts[0];
    return `${word[0] ?? ""}${word[word.length - 1] ?? ""}`.toUpperCase();
  }

  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
};

const SidebarLogo = observer(({ isCollapsed }: { isCollapsed: boolean }) => {
  const sidebarAccent = useColorModeValue("#1E88E5", "#2B6CB0");

  return (
    <Flex
      height={headerHeight}
      bg={sidebarAccent}
      color="white"
      align="center"
      justify={isCollapsed ? "center" : "space-between"}
      px={isCollapsed ? 2 : 4}
      borderBottom="1px solid rgba(255,255,255,0.12)"
    >
      {isCollapsed ? (
        <Text fontSize="lg" fontWeight="700">
          {getInitials(WEBSITE_TITLE)}
        </Text>
      ) : (
        <Text fontSize="lg" fontWeight="700" noOfLines={1}>
          {WEBSITE_TITLE} | Welcome
        </Text>
      )}
    </Flex>
  );
});

const SidebarItemRow = ({
  item,
  collapsed,
  active,
  onClick,
}: {
  item: SidebarItem;
  collapsed: boolean;
  active: boolean;
  onClick: () => void;
}) => {
  const activeBg = useColorModeValue("blue.500", "blue.400");
  const activeColor = "white";
  const hoverBg = useColorModeValue("blue.50", "blue.800");
  const hoverColor = useColorModeValue("blue.700", "white");

  return (
    <Tooltip label={collapsed ? item.label : ""} placement="right" hasArrow isDisabled={!collapsed}>
      <Flex
        role="button"
        tabIndex={0}
        onClick={onClick}
        align="center"
        justify={collapsed ? "center" : "flex-start"}
        gap={3}
        w="full"
        px={collapsed ? 2 : 4}
        py={3}
        borderRadius="lg"
        cursor="pointer"
        bg={active ? activeBg : "transparent"}
        color={active ? activeColor : "gray.800"}
        fontWeight={active ? "700" : "500"}
        _hover={{ bg: active ? activeBg : hoverBg, color: active ? activeColor : hoverColor }}
        transition="all 0.2s ease"
      >
        <Icon as={item.icon} boxSize={5} />
        {!collapsed && <Text fontSize="sm">{item.label}</Text>}
      </Flex>
    </Tooltip>
  );
};

const SidebarContent = observer(({ collapsed, onClose }: { collapsed: boolean; onClose?: () => void }) => {
  const pathname = usePathname();
  const router = useRouter();
  const {
    auth: { logout, openNotification },
  } = stores;

  const navigate = (href: string) => {
    router.push(href);
    onClose?.();
  };

  return (
    <Flex direction="column" h="full" bg="white">

      <Box flex="1" py={3} px={collapsed ? 2 : 3} overflowY="auto">
        <VStack align="stretch" spacing={1}>
          {sidebarItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <SidebarItemRow
                key={item.href}
                item={item}
                collapsed={collapsed}
                active={active}
                onClick={() => navigate(item.href)}
              />
            );
          })}
        </VStack>
      </Box>

      <Box px={collapsed ? 2 : 3} pb={4}>
        <Flex
          align="center"
          justify={collapsed ? "center" : "flex-start"}
          gap={3}
          w="full"
          px={collapsed ? 2 : 4}
          py={3}
          borderRadius="lg"
          cursor="pointer"
          color="gray.700"
          _hover={{ bg: "red.50", color: "red.600" }}
          onClick={() => {
            logout();
            openNotification({
              title: "Signed out",
              message: "You have been logged out successfully.",
              type: "info",
            });
            navigate("/login");
          }}
        >
          <Icon as={FaSignOutAlt} boxSize={5} />
          {!collapsed && <Text fontSize="sm">Logout</Text>}
        </Flex>
      </Box>
    </Flex>
  );
});

const SidebarLayout = observer(
  ({ isCollapsed, openMobileSideDrawer, setOpenMobileSideDrawer }: SidebarProps) => {
    const isMobile = useBreakpointValue({ base: true, lg: false }) ?? false;
    const {
      layout: { openDashSidebarFun },
    } = stores;
    const sidebarWidthValue = isCollapsed ? mediumSidebarWidth : sidebarWidth;

    const headerBg = useColorModeValue("#1E88E5", "#2B6CB0");

    return (
      <>
        <Drawer
          isOpen={openMobileSideDrawer}
          placement="left"
          onClose={() => setOpenMobileSideDrawer(false)}
          size="xs"
        >
          <DrawerOverlay />
          <DrawerContent maxW={sidebarWidth}>
            <DrawerCloseButton />
            <DrawerBody p={0}>
              <SidebarContent collapsed={false} onClose={() => setOpenMobileSideDrawer(false)} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {!isMobile && (
          <Box
            pos="fixed"
            top={0}
            left={0}
            w={sidebarWidthValue}
            minH="100vh"
            zIndex={5000}
            bg="white"
            borderRight="1px solid"
            borderRightColor="gray.200"
            boxShadow="0 4px 18px rgba(0, 0, 0, 0.06)"
            overflow="hidden"
            transition="width 0.25s ease"
          >
            <Flex direction="column" h="full">
              <Flex
                height={headerHeight}
                bg={headerBg}
                align="center"
                justify="space-between"
                px={isCollapsed ? 2 : 3}
                color="white"
              >
                <Box flex="1">
                  <SidebarLogo isCollapsed={isCollapsed} />
                </Box>
                <IconButton
                  aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                  icon={isCollapsed ? <BiRightArrowAlt /> : <BiLeftArrowAlt />}
                  variant="ghost"
                  color="white"
                  fontSize="2xl"
                  _hover={{ bg: "rgba(255,255,255,0.12)" }}
                  onClick={() => openDashSidebarFun()}
                />
              </Flex>
              <SidebarContent collapsed={isCollapsed} />
            </Flex>
          </Box>
        )}
      </>
    );
  }
);

export default SidebarLayout;
