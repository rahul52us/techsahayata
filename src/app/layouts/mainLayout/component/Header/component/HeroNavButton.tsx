"use client";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const HeroNavButton = ({ onClick }: any) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    router.push("/appraisal");
  };

  return (
    <Button
      bg="#ff914d"
      rounded={'16px'}
      color="white"
      _hover={{
        bg: "#e67e3d",
        transform: "translateY(-2px)",
      }}
      fontWeight={600}
      fontSize="sm"
      onClick={handleClick}
    >
      Quick Appraisal
    </Button>
  );
};

export default HeroNavButton;