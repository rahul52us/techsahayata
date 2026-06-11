import { Box, Heading, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import ReviewsList from "../../(main)/testimonials/components/ReviewCard/ReviewCard";

const TestimonialSection = observer(() => {
  return (
    <Box my={12}
    //  bgGradient="linear(to-b, #F2FAFB, #D7F1F3, #B3E2E8, #89D1DB)"
    // bgGradient="linear(to-b, #E8F9F9, #C9EFF1, #A7DEE4)"


    >
      <Box
        maxW={{ md: "95%" }}
        py={{ base: "3rem", md: "2rem" }}
        px={{ base: 4, md: 0 }}
        mx={"auto"}
      >
        <Heading
          textAlign="center"
          as="h2"
          fontWeight="bold"
          fontSize={{ base: "22px", md: "44px" }}
          my={{ base: 1, md: 2 }}
          mt={{ base: "-2rem" }}
          px={1}
        >
          What{" "}
          <Text as="span" fontWeight={600} color="#ff914d">
            Our Clients
          </Text>{" "}
          Say
        </Heading>

        <ReviewsList />
      </Box>
    </Box>
  );
});

export default TestimonialSection;
