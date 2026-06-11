"use client";

import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { BiMoon, BiSun } from "react-icons/bi";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import stores from "../../../store/stores";
import { headerHeight, mediumSidebarWidth, sidebarWidth } from "../../../component/config/utils/variable";
import { WEBSITE_TITLE } from "../../../config/utils/variables";

const getInitials = (value: string) => {
  const parts = value
    .split(/\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length === 0) {
    return "T";
  }

  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
};

const HeaderLayout = observer(() => {
  const isMobile = useBreakpointValue({ base: true, lg: false }) ?? false;
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const sidebarOffset = isMobile
    ? "0px"
    : stores.layout.isCallapse
      ? mediumSidebarWidth
      : sidebarWidth;
  const {
    auth: { authUser, logout, openNotification },
    layout: { setOpenMobileSideDrawer },
  } = stores;

  const iconColor = "white";
  const headerBackground = useColorModeValue("#1E88E5", "#1E88E5");

  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      left={sidebarOffset}
      right={0}
      height={headerHeight}
      bg={headerBackground}
      align="center"
      justify="space-between"
      px={{ base: 3, md: 6 }}
      zIndex={40}
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.12)"
      transition="left 0.25s ease"
    >
      <HStack spacing={3} flex="1" justify="flex-start">
        {isMobile && (
          <IconButton
            aria-label="Open menu"
            icon={<FaBars />}
            variant="ghost"
            color={iconColor}
            _hover={{ bg: "rgba(255,255,255,0.12)" }}
            onClick={() => setOpenMobileSideDrawer(true)}
          />
        )}
        {!isMobile && <Box width="40px" />}
      </HStack>

      <Box maxW={{ base: "220px", md: "360px", xl: "420px" }} flex="1">
        <InputGroup>
          <InputLeftElement pointerEvents="none" height="44px" color="gray.500">
            <FiSearch />
          </InputLeftElement>
          <Input
            height="44px"
            borderRadius="999px"
            bg="white"
            color="gray.700"
            border="none"
            placeholder="Start typing to search..."
            _placeholder={{ color: "gray.500" }}
            _focusVisible={{ boxShadow: "0 0 0 2px rgba(255,255,255,0.35)" }}
          />
        </InputGroup>
      </Box>

      <HStack spacing={2} flex="1" justify="flex-end">
        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === "dark" ? <BiSun /> : <BiMoon />}
          variant="ghost"
          color={iconColor}
          fontSize="2xl"
          _hover={{ bg: "rgba(255,255,255,0.12)" }}
          onClick={toggleColorMode}
        />

        <Menu placement="bottom-end">
          <MenuButton>
            <Avatar
              size="sm"
              name={authUser?.name || WEBSITE_TITLE}
              bg="orange.600"
              color="white"
              fontWeight="700"
            />
          </MenuButton>
          <Portal>
            <MenuList minW="220px" py={2}>
              <Box px={4} py={2}>
                <Text fontWeight="700">{authUser?.name || WEBSITE_TITLE}</Text>
                <Text fontSize="sm" color="gray.500">
                  {authUser?.email || "Admin account"}
                </Text>
              </Box>
              <MenuItem
                icon={<FaSignOutAlt />}
                onClick={() => {
                  logout();
                  openNotification({
                    title: "Signed out",
                    message: "You have been logged out successfully.",
                    type: "info",
                  });
                  router.push("/login");
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
        <Box />
      </HStack>
    </Flex>
  );
});

export default HeaderLayout;
