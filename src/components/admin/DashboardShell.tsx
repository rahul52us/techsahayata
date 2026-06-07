"use client";

import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { observer } from "mobx-react-lite";
import stores from "../../store/stores";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/blogs", label: "Blogs" },
  { href: "/dashboard/testimonials", label: "Testimonials" },
  { href: "/dashboard/users", label: "Users" },
];

const DashboardShell = observer(function DashboardShell({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const {
    auth: { authUser, logout },
  } = stores;

  return (
    <Flex minH="100vh" bg="gray.50">
      <Box w={{ base: "0", lg: "280px" }} display={{ base: "none", lg: "block" }} bg="gray.900" color="white" px={6} py={8}>
        <Link href="/dashboard">
          <Text fontSize="xs" letterSpacing="0.35em" textTransform="uppercase" color="teal.300">
            Techsahayta
          </Text>
          <Heading mt={3} size="lg">
            Admin Console
          </Heading>
        </Link>

        <VStack align="stretch" spacing={2} mt={10}>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Box
                  px={4}
                  py={3}
                  borderRadius="2xl"
                  bg={active ? "teal.400" : "whiteAlpha.100"}
                  color={active ? "gray.900" : "gray.100"}
                  fontSize="sm"
                  fontWeight="medium"
                  transition="all 0.2s"
                  _hover={{ bg: active ? "teal.300" : "whiteAlpha.200" }}
                >
                  {item.label}
                </Box>
              </Link>
            );
          })}
        </VStack>

        <Box mt={10} borderRadius="3xl" border="1px solid" borderColor="whiteAlpha.200" bg="whiteAlpha.100" p={4}>
          <Text fontSize="sm" fontWeight="semibold">
            {authUser?.name || "Admin User"}
          </Text>
          <Text mt={1} fontSize="xs" textTransform="uppercase" letterSpacing="0.2em" color="gray.400">
            {authUser?.role || "admin"}
          </Text>
          <Button
            mt={4}
            w="full"
            variant="outline"
            colorScheme="whiteAlpha"
            onClick={() => {
              logout();
              router.replace("/login");
            }}
          >
            Sign out
          </Button>
        </Box>
      </Box>

      <Box flex="1" p={{ base: 4, sm: 6, lg: 8 }}>
        <Box bg="white" borderRadius="3xl" boxShadow="0 20px 60px rgba(15,23,42,0.08)" p={{ base: 5, sm: 8 }}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
});

export default DashboardShell;
