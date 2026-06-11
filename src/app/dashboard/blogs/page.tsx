"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Spinner,
  useBreakpointValue,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { FaBlog, FaPlus, FaProjectDiagram, FaTasks, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import stores from "../../store/stores";
import BlogsLayout from "./BlogsLayout";

interface BlogCounts {
  privateBlogs: number;
  publicBlogs: number;
  deletedBlogs: number;
}

const BlogIndex = observer(() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [countData, setCountData] = useState<BlogCounts>({
    privateBlogs: 0,
    publicBlogs: 0,
    deletedBlogs: 0,
  });

  const {
    BlogStore: { getBlogs },
  } = stores;

  const router = useRouter();
  const showIconOnly = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    setLoading(true);
    getBlogs(true).finally(() => setLoading(false));
  }, [getBlogs]);

  const summaryData = [
    {
      label: "Public Blogs",
      value: countData?.publicBlogs,
      icon: FaProjectDiagram,
      colorScheme: "teal",
    },
    {
      label: "Private Blogs",
      value: countData?.privateBlogs,
      icon: FaTasks,
      colorScheme: "blue",
    },
    {
      label: "Inactive Blogs",
      value: countData?.deletedBlogs,
      icon: FaEyeSlash,
      colorScheme: "purple",
    },
  ];

  return (
    <Box p={{ base: 6, md: 8 }} bg="gray.50" borderRadius="lg" boxShadow="lg" minH="100vh">
      {/* Header Section */}
      <Flex justify="space-between" align="center" mb={{ base: 6, md: 8 }} flexWrap="wrap" gap={4}>
        <Heading
          as="h1"
          display="flex"
          alignItems="center"
          fontSize={{ base: "2xl", md: "3xl" }}
          color="teal.700"
          fontWeight="bold"
        >
          <Icon as={FaBlog} boxSize={{ base: 6, md: 8 }} mr={3} />
          Blogs
        </Heading>

        <Box>
          {showIconOnly ? (
            <IconButton
              aria-label="Create Blog"
              icon={<FaPlus />}
              colorScheme="teal"
              size="lg"
              variant="solid"
              borderRadius="full"
              onClick={() => router.push("/dashboard/blogs/create")}
            />
          ) : (
            <Button
              leftIcon={<FaPlus />}
              colorScheme="teal"
              variant="solid"
              size="lg"
              px={6}
              fontWeight="semibold"
              borderRadius="md"
              onClick={() => router.push("/dashboard/blogs/create")}
            >
              Create Blog
            </Button>
          )}
        </Box>
      </Flex>

      {/* Summary Widgets */}
      {loading ? (
        <Flex justify="center" mb={8}><Spinner size="lg" color="teal.500" /></Flex>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={6} mb={8}>
          {summaryData.map((item) => (
            <Box key={item.label} bg="white" borderRadius="lg" boxShadow="sm" p={5} borderLeft="4px solid" borderLeftColor={`${item.colorScheme}.400`}>
              <Stat>
                <StatLabel color="gray.500">{item.label}</StatLabel>
                <StatNumber color={`${item.colorScheme}.600`}>{item.value ?? 0}</StatNumber>
              </Stat>
            </Box>
          ))}
        </SimpleGrid>
      )}

      {/* Blogs Layout */}
      <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
        <BlogsLayout />
      </Box>
    </Box>
  );
});

export default BlogIndex;
