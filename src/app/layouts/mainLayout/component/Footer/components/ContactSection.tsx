import { HStack, Icon, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

const ContactSection: React.FC<{ contactInfo: ContactInfo }> = ({ }) => {
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61584152940512", icon: FaFacebook },
    { name: "Instagram", url: "https://www.instagram.com/vdproperties_re/", icon: FaInstagram },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/vdproperties", icon: FaLinkedin },
    { name: "WhatsApp", url: "https://wa.me/+61493319589", icon: FaWhatsapp },
  ];

  return (
    <Stack align="flex-start" spacing={3}>
      <Text
        fontWeight="600"
        fontSize={{ base: "xs", md: "xs" }}
        color="gray.900"
        letterSpacing="wide"
      >
        CONNECT WITH US
      </Text>

      <HStack spacing={4} ml={-1}>
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            isExternal
            display="flex"
            alignItems="center"
          >
            <Icon
              as={social.icon}
              boxSize={5}
              color="gray.700"
              _hover={{ color: 'gray.900' }}
            />
          </Link>
        ))}
      </HStack>
    </Stack>
  );
};

export default ContactSection;