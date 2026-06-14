"use client";

import {
  Box,
  Divider,
  Grid,
  Heading,
  Text,
  Center,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import BlogsCard from "./BlogsCard";
import stores from "../../../../store/stores";
import { getStatusType } from "@/app/config/utils/function";
 
const BlogCardSection = observer(({ fromIndividualBlog }: any) => {
  const {
    auth: { openNotification },
    BlogStore: { getBlogs, blogs },
  } = stores;

  const [isLoading, setIsLoading] = useState(false);

  const fetchBlogsDetails = useCallback(() => {
    setIsLoading(true);

    getBlogs({ page: 1, limit: 9 })
      .catch((err: any) => {
        openNotification({
          title: "Failed to Retrieve Blogs",
          message: err?.data?.message,
          type: getStatusType(err.status),
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [openNotification, getBlogs]);

  useEffect(() => {
    fetchBlogsDetails();
  }, [fetchBlogsDetails]);

  const blogList = blogs?.data || [];

  return (
    <Box>
      {/* Divider only on individual blog page */}
      {fromIndividualBlog && <Divider mt={5} mb={5} />}

      {/* MAIN HEADING – ONLY on listing page */}
      {!fromIndividualBlog && (
        <Heading
          fontSize={{ base: "22px", md: "30px" }}
          fontWeight="bold"
          textAlign="center"
          mb={2}
          color="gray.800"
        >
          Explore Latest Technology Insights, Trends, and Expert Articles
        </Heading>
      )}

      {/* SUB TEXT – ONLY on individual blog page */}
      {fromIndividualBlog && (
        <Text
          textAlign="center"
          fontSize={{ base: "22px", md: "30px" }}
          fontWeight="bold"
          mt={2}
          px={{ base: 2, md: 0 }}
          color="gray.800"
        >
          Discover More Technology Blogs You Might Find Useful
        </Text>
      )}

      {/* BLOG GRID / LOADER */}
      <Box mb={{ base: 6, lg: 12 }} mt={{ base: 6, lg: 12 }}>
        {isLoading ? (
          <Center minH="300px" py={10}>
            <VStack spacing={4}>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#ff914d"
                size="xl"
              />
              <Text color="#ff914d" fontSize="lg" fontWeight="medium">
                Loading blogs...
              </Text>
            </VStack>
          </Center>
        ) : blogList.length > 0 ? (
          <Grid
            templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={6}
          >
            {blogList.map((blog: any) => (
              <BlogsCard
                key={blog.id || blog._id}
                {...blog}
                otherBlog={false}
              />
            ))}
          </Grid>
        ) : (
          <Text textAlign="center" color="gray.600" fontSize="lg" mt={6}>
            No blogs available.
          </Text>
        )}
      </Box>
    </Box>
  );
});

export default BlogCardSection;