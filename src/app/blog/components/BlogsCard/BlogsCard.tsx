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
        borderWidth={1}
        overflow="hidden"
        bg="transparent"
      >
        {/* Image */}
        <Box position="relative" h={{ base: "210px", lg: "260px" }} overflow="hidden" rounded="12px">
          <img
            src={coverImage?.url}
            style={{ height: "260px", width: "100%", objectFit: "cover", borderRadius: "12px" }}
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
        <Box p={{ base: 3, lg: 4 }}>
          <Text fontSize="xs" color="#868080">
            {formatDate(createdAt)}
          </Text>

          <Link
            href={`/blog/${slug}`}
            _hover={{ textDecoration: "none" }}
          >
            <Text
              mt={1}
              fontSize={{ base: "16px", lg: "20px" }}
              fontWeight={700}
              noOfLines={2}
            >
              {title}
            </Text>
          </Link>


          <Text
            mt={1}
            fontSize="sm"
            color="gray.600"
            noOfLines={2}
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: "4",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
            dangerouslySetInnerHTML={{ __html: subTitle || "" }}
          />

          {/* Read More */}
          <Flex justify="flex-start" mt={3}>
            <Link href={`/blog/${slug}`}>
              <Button
                as="span"
                variant="ghost"
                color="brand.100"
                rightIcon={<ArrowForwardIcon />}
                p={0}
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
