"use client";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Box, Flex, Spinner, Text, Grid } from "@chakra-ui/react";
import stores from "../../store/stores";

const BlogsLayout = observer(() => {
  const {
    BlogStore: { getBlogs, blogs },
  } = stores;

  useEffect(() => {
    getBlogs(true).catch(console.error);
  }, [getBlogs]);

  return (
    <Box py={8} px={6}>
      {blogs.loading ? (
        <Flex justify="center" align="center" py={12}>
          <Spinner size="lg" />
        </Flex>
      ) : blogs.data?.length ? (
        <Grid templateColumns={{ base: "1fr", sm: "1fr", md: "1fr 1fr", xl: "1fr 1fr 1fr" }} gap={5}>
          {blogs.data.map((item: any, index: number) => (
             <Box key={index} p={4} borderWidth="1px" borderRadius="md" mb={4}>
                  <Text fontWeight="bold">{item.title}</Text>
                  <Text>{item.short_description || "No description"}</Text>
              </Box>
          ))}
        </Grid>
      ) : (
        <Flex justify="center" align="center" py={12}>
          <Text fontSize="lg" fontWeight="bold" color="gray.500">
            No Blogs Found
          </Text>
        </Flex>
      )}
    </Box>
  );
});

export default BlogsLayout;
