"use client";
import { Flex } from "@chakra-ui/react";
import React, { useMemo } from "react";
import NavItem from "../element/NavItem";
 
interface NavItemType {
  title: string;
  link?: string;
  subItems?: { title: string; link: string }[];
}

interface NavItemsLayoutProps {
  onClose?: () => void;
}

const NavItemsLayout: React.FC<NavItemsLayoutProps> = ({ onClose }) => {
  const dynamicNavItems: NavItemType[] = useMemo(() => {
    return [
      { title: "Home", link: "/" },
      { title: "Team", link: "/team" },
      { title: "Blog", link: "/blog" },
      { title: "Contact Us", link: "/contact-us" },
    ];
  }, []);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={{ base: 6, md: 8 }}
      alignItems="center"
      justifyContent="center"
    >
      {dynamicNavItems.map((item) => (
        <NavItem item={item} key={item.title} onClose={() => { if (onClose) onClose(); }} />
      ))}
    </Flex>
  );
};

export default NavItemsLayout;