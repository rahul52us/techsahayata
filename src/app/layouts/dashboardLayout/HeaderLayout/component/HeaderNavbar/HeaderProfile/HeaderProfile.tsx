"use client";

import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Divider,
  Box,
  Text,
  VStack,
  Icon,
  Portal,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import {
  FaSignOutAlt,
  FaUser,
  FaKey,
  FaHome,
} from "react-icons/fa";
import stores from "../../../../../../store/stores";
import { authentication, main } from "../../../../../../config/utils/routes";
import { useRouter, usePathname } from "next/navigation";
import { WEBSITE_TITLE } from "../../../../../../config/utils/variables";

const HeaderProfile = observer(() => {
  const pathname = usePathname();
  const router = useRouter();
  const {
    auth: { authUser, logout },
  } = stores;

  const user = authUser;

  return user ? (
    <Menu closeOnSelect={false} placement="bottom-end">
      <MenuButton
        as={IconButton}
        aria-label="User Menu"
        icon={
          <Avatar
            size="sm"
            borderRadius={10}
            name={user?.name}
          />
        }
        size="sm"
        variant="ghost"
      />
      <Portal>
        <MenuList
          minWidth="220px"
          boxShadow="md"
          borderRadius="md"
          zIndex={10}
          p={2}
        >
          <VStack spacing={2}>
            <Box textAlign="center">
              <Avatar size="lg" name={user?.name} />
              <Text mt={2} fontWeight="bold">
                {user?.name}
              </Text>
              <Text mt={0.5} fontWeight="xl" fontSize="sm" cursor="pointer">
                {WEBSITE_TITLE}
              </Text>
            </Box>
            <Divider />
            {pathname !== main.home && (
              <MenuItem onClick={() => router.push(main.home)}>
                <FaHome style={{ marginRight: "8px" }} /> Home
              </MenuItem>
            )}
            <Divider />
            <MenuItem
              onClick={() => {
                logout();
                router.push(authentication.login);
              }}
            >
              <FaSignOutAlt style={{ marginRight: "8px" }} /> Logout
            </MenuItem>
          </VStack>
        </MenuList>
      </Portal>
    </Menu>
  ) : (
    <Menu closeOnSelect={false} placement="bottom-end">
      <MenuButton
        as={IconButton}
        aria-label="User Menu"
        icon={<Avatar size="sm" borderRadius="full" />}
        size="sm"
        variant="ghost"
      />
      <Portal>
        <MenuList
          minWidth="220px"
          boxShadow="md"
          borderRadius="md"
          zIndex={10}
          p={2}
        >
          <VStack spacing={2}>
            <MenuItem
              onClick={() => router.push(authentication.login)}
              display="flex"
              alignItems="center"
            >
              <Icon as={FaUser} boxSize={6} mr={2} color="blue.500" />
              <Text>Login</Text>
            </MenuItem>
            <MenuItem
              onClick={() => router.push(authentication.createOrganisationStep1)}
              display="flex"
              alignItems="center"
            >
              <Icon as={FaKey} boxSize={6} mr={2} color="blue.500" />
              <Text>Create New Account</Text>
            </MenuItem>
          </VStack>
        </MenuList>
      </Portal>
    </Menu>
  );
});

export default HeaderProfile;