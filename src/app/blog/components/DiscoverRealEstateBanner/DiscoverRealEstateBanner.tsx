"use client";

import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const DiscoverRealEstateBanner = () => {
  const router = useRouter();

  return (
    <Box
      w="100%"
      bg="#ff914d" // orange background
      borderRadius="12px"
      px={{ base: 6, md: 12 }}
      py={{ base: 8, md: 14 }}
      position="relative"
      overflow="hidden"
    >
      <Flex
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        gap={{ base: 6, md: 0 }}
      >
        {/* Left Content */}
        <Box maxW="720px">
          <Text
            fontSize="xs"
            letterSpacing="0.15em"
            color="whiteAlpha.800"
            fontWeight="600"
            mb={3}
          >
            DISCOVER OUR SERVICES
          </Text>

          <Heading
            color="white"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="700"
            lineHeight="1.2"
            mb={4}
          >
            Wondering How To Start <br />
            Your Digital Transformation?
          </Heading>

          <Text
            color="whiteAlpha.900"
            fontSize={{ base: "sm", md: "md" }}
            maxW="520px"
          >
            Let our team guide you through your options and move forward
            with assurance.
          </Text>
        </Box>

        {/* Right Button */}
        <Button
          bg="white"
          color="black"
          size="lg"
          px={10}
          py={6}
          borderRadius="full"
          fontWeight="600"
          _hover={{
            bg: "gray.100",
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
          transition="all 0.3s ease"
          onClick={() => router.push("/contact-us")}
        >
          Contact Us
        </Button>
      </Flex>
    </Box>
  );
};

export default DiscoverRealEstateBanner;
