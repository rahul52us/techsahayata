"use client";
import {
  Box,
  Flex,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import React from "react";
import NavItemsLayout from "./component/NavItemsLayout";
import HeroNavButton from "./component/HeroNavButton";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <Box shadow="sm" position="sticky" top="0" zIndex="1000" bg="brand.200">

      {/* Header for Mobile */}
      <Flex
        alignItems="center"
        justify="space-between"
        px={{ base: 2, md: 6 }}
        py={1}
        bg="#E2E2E2"
        display={{ base: "flex", md: "none" }}
        h="4rem"
      >
        <Image
          src="/images/logo2.png"
          alt=""
          h={{ base: "43px", sm: "48px" }}
          cursor="pointer"
          onClick={() => router.push("/")}
        />

        {/*  MOBILE QUICK APPRAISAL BUTTON */}
        <Flex gap={2} alignItems="center">

          <HeroNavButton />

          <IconButton
            icon={<HamburgerIcon fontSize={"22px"} />}
            onClick={onOpen}
            aria-label="Open menu"
            variant="ghost"
            size="md"
          />
        </Flex>
      </Flex>


      {/* Drawer for Mobile Navigation */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            {/* Centered Logo */}
            <Center mt={6} mb={4}>
              <Image
                src="/images/logo2.png"
                alt="Vd Propertiess"
                h="50px" // Reduced logo size in mobile menu
                onClick={() => router.push("/")}
              />
            </Center>
            {/* Navigation Items */}
            <Box px={4}>
              <NavItemsLayout onClose={onClose} />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Header for Desktop */}
      <Flex
        alignItems="center"
        justify="space-between"
        px={{ lg: 5, xl: 8 }}
        py={2} // Reduced padding
        display={{ base: "none", md: "flex" }}
      // h="4rem" // Reduced height
      >
        <Image
          src="/images/logo2.png"
          alt="VD PROPERTIES LOGO"
          objectFit="contain"
          h={{ base: "35px", lg: "40px", xl: "40px" }} // Reduced logo size
          cursor={"pointer"}
          onClick={() => router.push("/")}
        />
        <Flex flex={1} justify="end" pr={6}>
          <NavItemsLayout />
        </Flex>
        <HeroNavButton />
      </Flex>
    </Box>
  );
});

export default Header;
