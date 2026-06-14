import { Box, Grid } from "@chakra-ui/react";
import CustomCarousel from "../../../../component/common/CustomCarousal/CustomCarousal";
import BlogsCard from "../BlogsCard/BlogsCard";
import CustomSmallTitle from "../../../../component/common/CustomSmallTitle/CustomSmallTitle";
import CustomSubHeading from "../../../../component/common/CustomSubHeading/CustomSubHeading";

export const otherBlogData = [
  
];

const OtherBlogSection = () => {
  return (
    <Box py={4}>
      {/* Titles */}
      <Box textAlign="center" mb={6}>
        <CustomSmallTitle>You might like</CustomSmallTitle>
        <CustomSubHeading>Other blogs</CustomSubHeading>
      </Box>

      {/* Desktop */}
      <Box display={{ base: "none", lg: "block" }}>
        <Grid templateColumns="repeat(3, 1fr)" gap={4} maxW="85%" mx="auto">
          {otherBlogData.map((blog) => (
            <BlogsCard key={blog.id} {...blog} />
          ))}
        </Grid>
      </Box>

      {/* Mobile */}
      <Box display={{ base: "block", lg: "none" }} px={3}>
        <CustomCarousel slidesToShow={1} autoplay showDots>
          {otherBlogData.map((blog) => (
            <BlogsCard key={blog.id} {...blog} />
          ))}
        </CustomCarousel>
      </Box>
    </Box>
  );
};

export default OtherBlogSection;
