"use client";

import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { Box, Flex, Spinner, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import SidebarLayout from "./SidebarLayout/SidebarLayout";
import HeaderLayout from "./HeaderLayout/HeaderLayout";
import stores from "../../store/stores";
import { headerHeight, mediumSidebarWidth, sidebarWidth } from "../../component/config/utils/variable";

const DashboardLayout = observer(({ children }: { children: React.ReactNode }) => {
  const {
    auth: { authUser, restoreSession },
    layout: { isCallapse, openDashSidebarFun, openMobileSideDrawer, setOpenMobileSideDrawer },
  } = stores;

  const isMobile = useBreakpointValue({ base: true, lg: false }) ?? false;
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const sidebarOffset = isMobile ? "0px" : isCallapse ? mediumSidebarWidth : sidebarWidth;

  const closeDrawerModel = () => setOpenMobileSideDrawer(false);

  const handleSidebarItemClick = (item: any) => {
    if (!item.children || item.url) {
      if (typeof window !== "undefined") {
        localStorage.setItem("activeComponentName", item.id);
      }
    }
  };

  useEffect(() => {
    restoreSession();

    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        openDashSidebarFun(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCallapse, openDashSidebarFun, restoreSession]);

  if (!authUser) {
    return (
      <Flex minH="100vh" align="center" justify="center" bg={bgColor}>
        <Spinner size="xl" color="teal.500" />
      </Flex>
    );
  }

  return (
    <Flex minH="100vh" bg={bgColor} overflow="hidden">
      {/* Sidebar */}
      <Box ref={sidebarRef}>
        <SidebarLayout
          onItemClick={handleSidebarItemClick}
          isCollapsed={isCallapse}
          onLeafItemClick={handleSidebarItemClick}
          openMobileSideDrawer={openMobileSideDrawer}
          setOpenMobileSideDrawer={closeDrawerModel}
        />
      </Box>

      {/* Main content area */}
      <Box
        flex="1"
        ml={sidebarOffset}
        transition="margin 0.3s ease"
        display="flex"
        flexDirection="column"
        minH="100vh"
        overflow="hidden"
      >
        <HeaderLayout />

        {/* Page content */}
        <Box
          mt={headerHeight}
          p={isMobile ? 3 : 6}
          flex="1"
          overflowY="auto"
        >
          {children}
        </Box>
      </Box>
    </Flex>
  );
});

export default DashboardLayout;
