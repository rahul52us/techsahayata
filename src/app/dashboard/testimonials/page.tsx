"use client";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { FaCommentAlt } from "react-icons/fa";
import { useEffect } from "react";
import stores from "../../store/stores";

const Testimonial = observer(() => {
  const {
    testimonialStore: { getTestimonials, testimonials },
  } = stores;

  useEffect(() => {
    getTestimonials();
  }, [getTestimonials]);

  return (
    <Box p={{ base: 6, md: 8 }} bg="gray.50" borderRadius="lg" boxShadow="lg" minH="100vh">
      <Flex justify="space-between" align="center" mb={{ base: 6, md: 8 }} flexWrap="wrap" gap={4}>
        <Box>
          <Heading as="h1" display="flex" alignItems="center" fontSize={{ base: "2xl", md: "3xl" }} color="teal.700" fontWeight="bold">
            <Icon as={FaCommentAlt} boxSize={{ base: 6, md: 8 }} mr={3} />
            Our Testimonials
          </Heading>
          <Text color="gray.600" mt={2}>What other people think about your organization</Text>
        </Box>
      </Flex>
      <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
         {testimonials.loading ? (
            <Text>Loading testimonials...</Text>
          ) : testimonials.data?.length ? (
            <Box>
              {testimonials.data.map((t: any, index: number) => (
                <Box key={index} p={4} borderWidth="1px" borderRadius="md" mb={4}>
                  <Text fontWeight="bold">{t.name} - {t.profession}</Text>
                  <Text>{t.description}</Text>
                </Box>
              ))}
            </Box>
          ) : (
             <Text fontSize="lg" fontWeight="bold" color="gray.500" textAlign="center" py={12}>
               No Testimonials Found
             </Text>
          )}
      </Box>
    </Box>
  );
});

export default Testimonial;
