"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Spinner,
  Text,
  Textarea,
  Checkbox,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import stores from "../../../store/stores";

const initialValues = { name: "", profession: "", company: "", rating: "", quote: "", imageUrl: "", featured: true };

const TestimonialPage = observer(() => {
  const {
    testimonialStore: { testimonials, getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial },
  } = stores;
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    getTestimonials()
      .catch((err: any) => setError(err?.message || "Unable to load testimonials"))
      .finally(() => setLoading(false));
  }, [getTestimonials]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const resetForm = () => {
    setFormData(initialValues);
    setSelectedTestimonial(null);
    setIsEditing(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const payload = {
        ...formData,
        rating: Number(formData.rating),
      };

      if (isEditing && selectedTestimonial) {
        await updateTestimonial(selectedTestimonial._id, payload);
      } else {
        await createTestimonial(payload);
      }

      await getTestimonials();
      resetForm();
    } catch (err: any) {
      setError(err?.message || "Unable to save testimonial");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box p={{ base: 4, md: 8 }} bg="gray.50" borderRadius="lg" boxShadow="lg" minH="100vh">
      <Heading as="h1" size="lg" color="teal.700" mb={2}>
        Our Testimonials
      </Heading>
      <Text color="gray.600" mb={6}>
        What other people think about your organisation.
      </Text>

      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={6}>
        <Box p={6} bg="white" borderRadius="2xl" boxShadow="sm">
          <Heading as="h2" size="md" mb={4}>
            {isEditing ? "Edit Testimonial" : "Add Testimonial"}
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input name="name" value={formData.name} onChange={handleInputChange} required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Profession</FormLabel>
              <Input name="profession" value={formData.profession} onChange={handleInputChange} required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Company</FormLabel>
              <Input name="company" value={formData.company} onChange={handleInputChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Rating</FormLabel>
              <Input name="rating" type="number" value={formData.rating} onChange={handleInputChange} required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Quote</FormLabel>
              <Textarea name="quote" value={formData.quote} onChange={handleInputChange} minH="140px" required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Image URL</FormLabel>
              <Input name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} />
            </FormControl>
            <Checkbox name="featured" colorScheme="teal" isChecked={formData.featured} onChange={handleInputChange} mb={4}>
              Featured testimonial
            </Checkbox>

            {error ? (
              <Box mb={4} p={3} borderRadius="lg" bg="red.50" color="red.700">
                {error}
              </Box>
            ) : null}

            <Flex gap={3}>
              <Button colorScheme="teal" type="submit" isLoading={saving} loadingText="Saving">
                {isEditing ? "Update Testimonial" : "Create Testimonial"}
              </Button>
              <Button variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            </Flex>
          </form>
        </Box>

        <Box p={6} bg="white" borderRadius="2xl" boxShadow="sm">
          <Heading as="h2" size="md" mb={4}>
            Testimonials List
          </Heading>
          {loading ? (
            <Flex justify="center" py={10}>
              <Spinner size="lg" />
            </Flex>
          ) : (
            <SimpleGrid columns={1} spacing={4}>
              {testimonials.data.map((item: any) => (
                <Box key={item._id} borderWidth="1px" borderRadius="2xl" p={4}>
                  <Flex justify="space-between" align="start" gap={4}>
                    <Box flex="1">
                      <Heading size="sm">{item.name}</Heading>
                      <Text mt={1} fontSize="sm" color="gray.500">
                        {item.profession}
                      </Text>
                      <Text mt={2} fontSize="sm" color="gray.600">
                        {item.quote}
                      </Text>
                    </Box>
                    {item.imageUrl ? (
                      <Box as="img" src={item.imageUrl} alt={item.name} w="88px" h="88px" objectFit="cover" borderRadius="full" />
                    ) : null}
                  </Flex>

                  <Flex mt={4} gap={3}>
                    <Button
                      size="sm"
                      variant="outline"
                      colorScheme="teal"
                      onClick={() => {
                        setSelectedTestimonial(item);
                        setIsEditing(true);
                        setFormData({
                          name: item.name || "",
                          profession: item.profession || "",
                          company: item.company || "",
                          rating: String(item.rating || ""),
                          quote: item.quote || "",
                          imageUrl: item.imageUrl || "",
                          featured: item.featured ?? true,
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
                        await deleteTestimonial(item._id);
                        await getTestimonials();
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

export default TestimonialPage;
