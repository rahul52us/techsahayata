import {
  Box,
  Container,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import { footerData } from "./components/footerData";

export const Footer: React.FC = () => {
  const textColor = useColorModeValue("gray.700", "gray.700");
  const bgColor = useColorModeValue("#E8E8E8", "#E8E8E8");

  const sections: any = [
    {
      title: "NAVIGATION",
      links: [
        { name: "Leasing", href: "/appraisal" },
        { name: "Rent", href: "/contact-us" },
        { name: "Sell", href: "/appraisal" },
        { name: "Buy", href: "/contact-us" },
      ],
    },
    {
      title: "OUR COMPANY",
      links: [
        { name: "Team", href: "/team" },
        { name: "Blog", href: "/blog" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Quick Appraisal", href: "/appraisal" },
      ],
    },
  ];

  return (
    <Box bg={bgColor} color={textColor} py={{ base: "10", md: 12 }}>
      <Box>
        <Container as={Stack} maxW={{ lg: "85%" }} px={{ base: 6, md: 6 }}>
          <SimpleGrid
            templateColumns={{
              base: "1fr",
              sm: "1fr 1fr",
              md: "1.2fr 1fr 1fr 1fr",
              lg: "1.5fr 1fr 1fr 1fr",
            }}
            spacing={{ base: 8, md: 10 }}
          >
            {/* Company Info */}
            <Stack
              spacing={{ base: 4, md: 5 }}
              align={{ base: "center", md: "flex-start" }}
            >
              <Box textAlign={{ base: "center", md: "left" }}>
                <Image
                  src="/images/logo2.png"
                  alt="VD Properties logo"
                  objectFit="contain"
                  h={{ base: "35px", lg: "40px", xl: "70px" }}
                  mx={{ base: "auto", md: -1 }}
                />
                <Text
                  fontSize={{ base: "xs", md: "sm" }}
                  mt={3}
                  color="gray.600"
                  maxW="250px"
                >
                  Your partner in finding the perfect place to call home
                </Text>
                <Text
                  fontSize={{ base: "xs", md: "sm" }}
                  mt={1}
                  color="gray.600"
                >
                  ABN: 22 692 789 754
                </Text>
              </Box>
            </Stack>

            {sections.map((section: any) => (
              <FooterSection key={section.title} section={section} />
            ))}

            <ContactSection contactInfo={footerData.contactInfo} />
          </SimpleGrid>
        </Container>

        <Box mt={10}>
          <Divider borderColor={"gray.300"} maxW="85%" mx="auto" />
          <Flex
            pt={6}
            maxW="85%"
            mx="auto"
            justify="center"
            align="center"
            flexWrap="wrap"
            gap={2}
          >
            <Text fontSize={{ base: "xs", sm: "sm" }} color="gray.600">
              © VD Properties Pty Ltd. All rights reserved.
            </Text>
            <Text fontSize={{ base: "xs", sm: "sm" }} color="gray.600">
              |
            </Text>
            <ChakraLink
              as={Link}
              href="/privacy-policy"
              fontSize={{ base: "xs", sm: "sm" }}
              color="gray.600"
              _hover={{ color: "#ff914d", textDecoration: "underline" }}
            >
              Privacy Policy
            </ChakraLink>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};