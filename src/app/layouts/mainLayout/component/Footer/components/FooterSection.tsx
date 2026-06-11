import { Link, Stack, Text } from '@chakra-ui/react';
import { useRouter } from "next/navigation";
import React from 'react';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSectionProps {
  section: {
    title: string;
    links: FooterLink[];
  };
}

const FooterSection: React.FC<FooterSectionProps> = ({ section }) => {
  const router = useRouter();
  
  return (
    <Stack align="flex-start" spacing={3}>
      <Text 
        fontWeight="600" 
        fontSize={{ base: "xs", md: "xs" }}
        mb={1}
        color="gray.900"
        letterSpacing="wide"
      >
        {section.title}
      </Text>
      {section.links.map((link) => (
        <Link
          key={link.name}
          onClick={() => {
            router.push(link.href);
          }}
          fontSize={{ base: "sm", md: "sm" }}
          color="gray.700"
          _hover={{ color: 'gray.900', textDecoration: 'none' }}
          fontWeight="400"
        >
          {link.name}
        </Link>
      ))}
    </Stack>
  );
};

export default FooterSection;