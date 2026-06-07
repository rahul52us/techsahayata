"use client";

import { Button, type ButtonProps } from "@chakra-ui/react";

export default function CustomButton(props: ButtonProps) {
  return (
    <Button
      colorScheme="teal"
      bg="#065F68"
      _hover={{ bg: "#05484F" }}
      _active={{ bg: "#04363B" }}
      borderRadius="lg"
      fontWeight={600}
      {...props}
    />
  );
}
