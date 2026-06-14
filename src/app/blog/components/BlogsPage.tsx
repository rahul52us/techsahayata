"use client";

import { Box } from "@chakra-ui/react";
import BlogFeatureCard from "./BlogHeroSection/BlogHeroSection";
import BlogCardSection from "./BlogsCard/BlogCardSection";
import { observer } from "mobx-react-lite";
import DiscoverRealEstateBanner from "./DiscoverRealEstateBanner/DiscoverRealEstateBanner";

const BlogsPage = observer(() => {
  return (
    <Box bg={'brand.200'}>
      <BlogFeatureCard />
      
      <Box mt={{ base: "50px", lg: "80px" }} maxW={{ md: "90%", xl: '85%' }} mx={'auto'} px={{ base: 3, md: 0 }}>
        <BlogCardSection />
      </Box>
      {/* DiscoverRealEstateBanner - Full Width */}
      <Box my={{ base: "40px", lg: "80px" }} px={{ base: 3, md: 6, lg: 8 }}>
        <DiscoverRealEstateBanner />
      </Box>
      {/* <IndividualBlogPage/>
        <OtherBlogSection/> */}
    </Box>
  );
});

export default BlogsPage;
