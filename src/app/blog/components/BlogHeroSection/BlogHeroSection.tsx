"use client";

import { Box, Container, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const BlogFeatureCard = () => {
  const bgColor = useColorModeValue("#ff914d", "#ff914d");

  return (
    <Box bg={bgColor} py={{ base: 10, md: 14 }}>
      <Container maxW="90%">
        <Box textAlign="center">
          <Heading
            fontSize={{ base: "32px", md: "44px", lg: "52px" }}
            fontWeight={700}
            color="white"
            lineHeight="1.2"
          >
            Our{" "}
            <Text as="span" color="black">
              Blogs
            </Text>
          </Heading>

          <Text
            mt={{ base: 4, md: 6 }}
            fontSize={{ base: "16px", md: "22px", lg: "26px" }}
            color="white"
            maxW="900px"
            mx="auto"
            fontWeight={400}
          >
            Explore industry insights, market updates, and helpful tips to guide you
            through your digital transformation journey.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogFeatureCard;
