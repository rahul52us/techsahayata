"use client";

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import stores from "../../../../store/stores";

const Dashboard = observer(() => {
  const {
    dashboardStore: { dashboardData, getDashboardData },
  } = stores;

  useEffect(() => {
    getDashboardData();
  }, [getDashboardData]);

  const summaryData = [
    { label: "Total Blogs", value: dashboardData.totalBlogs, bg: "teal.50", color: "teal.700" },
    { label: "Published Blogs", value: dashboardData.publishedBlogs, bg: "green.50", color: "green.700" },
    { label: "Testimonials", value: dashboardData.totalTestimonials, bg: "orange.50", color: "orange.700" },
    { label: "Users", value: dashboardData.totalUsers, bg: "purple.50", color: "purple.700" },
    { label: "Active Users", value: dashboardData.activeUsers, bg: "gray.100", color: "gray.700" },
  ];

  return (
    <Box>
      <Heading as="h1" size="lg" color="teal.700" mb={2}>
        Dashboard
      </Heading>
      <Text color="gray.600" mb={6}>
        A focused snapshot of the content and users you are managing.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 5 }} spacing={4}>
        {summaryData.map((item) => (
          <Box key={item.label} p={5} borderRadius="xl" bg={item.bg}>
            <Text fontSize="sm" fontWeight="semibold" color={item.color}>
              {item.label}
            </Text>
            <Text mt={4} fontSize="3xl" fontWeight="bold" color={item.color}>
              {item.value}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
});

export default Dashboard;
