"use client";

import { Box, Heading, Text } from "@chakra-ui/react";

export default function PropertiesPage() {
  return (
    <Box>
      <Heading as="h1" size="lg" color="teal.700" mb={2}>
        Properties
      </Heading>
      <Text color="gray.600">Property management can be expanded here when you are ready.</Text>
    </Box>
  );
}
