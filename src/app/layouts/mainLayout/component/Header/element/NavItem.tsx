"use client";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

interface NavItemProps {
  item: {
    title: string;
    link?: string;
    subItems?: { title: string; link: string }[];
  };
  onClose: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, onClose }) => {
  const router = useRouter();

  /*  DROPDOWN ITEMS */
  if (item.subItems) {
    return (
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          variant="ghost"
          fontSize="16px"
          fontWeight="500"
          color="black"
          _hover={{ bg: "transparent", color: "brand.500" }}
          p={0}
        >
          {item.title}
        </MenuButton>

        <MenuList>
          {item.subItems.map((subItem) => (
            <MenuItem
              key={subItem.title}
              onClick={() => router.push(subItem.link)}
              _hover={{
                bg: "brand.500",
                color: "white",
              }}
            >
              {subItem.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }

  /*  NORMAL NAV ITEMS */
  return (
    <Box
      as="span"
      fontWeight="700"
      fontSize="16px"
      color="black"
      position="relative"
      cursor="pointer"
      px="2px"
      _after={{
        content: '""',
        position: "absolute",
        bottom: "-6px",
        left: 0,
        width: "100%",
        height: "3px",
        backgroundColor: "brand.100",  //  ORANGE UNDERLINE
        transform: "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.25s ease",
      }}
      _hover={{
        color: "brand.100",           //  ORANGE TEXT ON HOVER
        "&::after": {
          transform: "scaleX(1)",
        },
      }}
      onClick={() => {
        if (item.link) router.push(item.link);
        if (onClose) onClose();
      }}
    >
      {item.title}
    </Box>
  );
};

export default NavItem;
