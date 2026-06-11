"use client";

import { Box, Heading, Text } from "@chakra-ui/react";

export default function TeamPage() {
  return (
    <Box>
      <Heading as="h1" size="lg" color="teal.700" mb={2}>
        Team
      </Heading>
      <Text color="gray.600">Team management can be wired in here to match the reference layout.</Text>
    </Box>
  );
}
