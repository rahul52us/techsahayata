"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Link
} from "@chakra-ui/react";
 import { observer } from "mobx-react-lite";

interface BlogCardProps {
  coverImage?: any;
  createdAt?: string;
  subTitle?: string;
  title?: string;
  tags?: string[];
  slug?: string;
}

const BlogsCard: React.FC<BlogCardProps> = observer(
  ({ coverImage, subTitle, createdAt, title, tags, slug }) => {

    const formatDate = (createdAt?: string) => {
      if (!createdAt) return "";
      const date = new Date(createdAt);
      return `${date.getDate()} ${date.toLocaleString("en-US", {
        month: "short",
      })}, ${date.getFullYear()}`;
    };

    return (
      <Box
        rounded="16px"
        borderWidth="1px"
        borderColor="gray.200"
        overflow="hidden"
        bg="white"
        boxShadow="sm"
        transition="all 0.3s ease"
        _hover={{ boxShadow: "md", transform: "translateY(-4px)" }}
      >
        {/* Image */}
        <Box position="relative" h={{ base: "210px", lg: "260px" }} overflow="hidden" borderBottom="1px solid" borderColor="gray.100">
          <img
            src={coverImage?.url || "https://via.placeholder.com/400x260"}
            style={{ height: "260px", width: "100%", objectFit: "cover" }}
            alt={title || "Blog Image"}
          />

          {/* Tags */}
          {tags?.length > 0 && (
            <Flex position="absolute" top={4} left={4} gap={1} wrap="wrap">
              {tags.map((tag, index) => (
                <Text
                  key={index}
                  fontSize="sm"
                  color="brand.200"
                  bg="whiteAlpha.300"
                  px={2}
                  py={1}
                  rounded="6px"
                  backdropFilter="blur(10px)"
                >
                  {tag}
                </Text>
              ))}
            </Flex>
          )}
        </Box>

        {/* Content */}
        <Box p={{ base: 4, lg: 5 }}>
          <Text fontSize="sm" color="gray.500" fontWeight="500">
            {formatDate(createdAt)}
          </Text>

          <Link
            href={`/blog/${slug}`}
            _hover={{ textDecoration: "none" }}
            display="block"
            mt={2}
          >
            <Text
              fontSize={{ base: "lg", lg: "xl" }}
              fontWeight="700"
              color="gray.800"
              lineHeight="1.4"
              noOfLines={2}
            >
              {title}
            </Text>
          </Link>


          <Box
            mt={3}
            fontSize="sm"
            color="gray.600"
            lineHeight="1.6"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              "& p": { margin: 0 }
            }}
            dangerouslySetInnerHTML={{ __html: subTitle || "" }}
          />

          {/* Read More */}
          <Flex justify="flex-start" mt={4}>
            <Link href={`/blog/${slug}`}>
              <Button
                as="span"
                variant="ghost"
                color="#ff914d"
                rightIcon={<ArrowForwardIcon />}
                p={0}
                fontWeight="600"
                _hover={{ textDecoration: "underline", bg: "transparent" }}
              >
                Read More
              </Button>
            </Link>

          </Flex>
        </Box>
      </Box>
    );
  }
);

export default BlogsCard;
