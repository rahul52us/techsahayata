"use client";
import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";

export default function DeleteWebsite({ close, deleteData, submitForm }: any) {
  return (
    <VStack spacing={4} align="center" p={4}>
      <WarningIcon boxSize={12} color="red.500" />
      <Heading size="md" textAlign="center">
        Are you sure you want to delete this website?
      </Heading>
      <Text textAlign="center" color="gray.600">
        This action cannot be undone. Any blogs or testimonials associated with this website may lose their website link.
      </Text>
      
      <Flex gap={4} mt={4} w="100%" justify="center">
        <Button variant="outline" onClick={close} flex={1}>
          Cancel
        </Button>
        <Button 
          colorScheme="red" 
          onClick={() => submitForm(deleteData._id)} 
          flex={1}
        >
          Delete
        </Button>
      </Flex>
    </VStack>
  );
}
