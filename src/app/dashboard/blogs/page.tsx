"use client";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  SimpleGrid,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaHome, FaPlus } from "react-icons/fa";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import stores from "../../../store/stores";

const initialForm = {
  title: "",
  excerpt: "",
  content: "",
  coverImageUrl: "",
  published: true,
};

const BlogIndex = observer(() => {
  const {
    BlogStore: { blogs, getBlogs, createBlog, updateBlog, deleteBlog },
  } = stores;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState("");
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    setLoading(true);
    getBlogs(true)
      .catch((err: any) => setError(err?.message || "Unable to load blogs"))
      .finally(() => setLoading(false));
  }, [getBlogs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      if (editingId) {
        await updateBlog(editingId, formData);
      } else {
        await createBlog(formData);
      }
      await getBlogs(true);
      setFormData(initialForm);
      setEditingId("");
    } catch (err: any) {
      setError(err?.message || "Unable to save blog");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box p={{ base: 4, md: 8 }} bg="gray.50" borderRadius="lg" boxShadow="lg" minH="100vh">
      <Flex justify="space-between" align="center" mb={{ base: 6, md: 8 }} flexWrap="wrap" gap={4}>
        <Heading as="h1" display="flex" alignItems="center" fontSize={{ base: "2xl", md: "3xl" }} color="teal.700">
          <Box as={FaHome} boxSize={{ base: 6, md: 8 }} mr={3} />
          Blogs
        </Heading>

        <IconButton
          aria-label="Create Blog"
          icon={<FaPlus />}
          colorScheme="teal"
          size="lg"
          borderRadius="full"
          onClick={() => router.push("/dashboard/blogs")}
          display={{ base: "flex", md: "none" }}
        />
      </Flex>

      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={6}>
        <Box p={6} bg="white" borderRadius="2xl" boxShadow="sm">
          <Heading as="h2" size="md" mb={4}>
            {editingId ? "Edit Blog" : "Add Blog"}
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input name="title" value={formData.title} onChange={handleInputChange} placeholder="Enter title" required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Excerpt</FormLabel>
              <Textarea name="excerpt" value={formData.excerpt} onChange={handleInputChange} placeholder="Short excerpt" required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Content</FormLabel>
              <Textarea name="content" value={formData.content} onChange={handleInputChange} placeholder="Blog content" minH="180px" required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Cover Image URL</FormLabel>
              <Input name="coverImageUrl" value={formData.coverImageUrl} onChange={handleInputChange} placeholder="https://..." />
            </FormControl>
            <Checkbox colorScheme="teal" isChecked={formData.published} name="published" onChange={handleInputChange} mb={4}>
              Publish immediately
            </Checkbox>

            {error ? (
              <Box mb={4} p={3} borderRadius="lg" bg="red.50" color="red.700">
                {error}
              </Box>
            ) : null}

            <Button colorScheme="teal" type="submit" isLoading={saving} loadingText="Saving" w="full">
              {editingId ? "Update Blog" : "Create Blog"}
            </Button>
          </form>
        </Box>

        <Box p={6} bg="white" borderRadius="2xl" boxShadow="sm">
          <Heading as="h2" size="md" mb={4}>
            Blogs List
          </Heading>
          {loading ? (
            <Flex justify="center" py={10}>
              <Spinner size="lg" />
            </Flex>
          ) : (
            <SimpleGrid columns={1} spacing={4}>
              {blogs.data.map((blog: any) => (
                <Box key={blog._id} borderWidth="1px" borderRadius="2xl" p={4}>
                  <Flex justify="space-between" align="start" gap={4}>
                    <Box flex="1">
                      <Heading size="sm">{blog.title}</Heading>
                      <Text mt={2} fontSize="sm" color="gray.600">
                        {blog.excerpt}
                      </Text>
                    </Box>
                    {blog.coverImageUrl ? (
                      <Box
                        as="img"
                        src={blog.coverImageUrl}
                        alt={blog.title}
                        w="120px"
                        h="80px"
                        objectFit="cover"
                        borderRadius="lg"
                      />
                    ) : null}
                  </Flex>

                  <Flex mt={4} gap={3}>
                    <Button
                      size="sm"
                      variant="outline"
                      colorScheme="teal"
                      onClick={() => {
                        setEditingId(blog._id);
                        setFormData({
                          title: blog.title,
                          excerpt: blog.excerpt,
                          content: blog.content,
                          coverImageUrl: blog.coverImageUrl || "",
                          published: blog.published,
                        });
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      colorScheme="red"
                      onClick={async () => {
                        await deleteBlog(blog._id);
                        await getBlogs(true);
                      }}
                    >
                      Delete
                    </Button>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          )}
        </Box>
      </SimpleGrid>
    </Box>
  );
});

export default BlogIndex;
