"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BlogCardSection from "../components/BlogsCard/BlogCardSection";
import { useRouter } from "next/navigation";
import PageLoader from "@/app/component copy/common/Loader/PageLoader";
import SeoHead from "@/app/component copy/config/component/SeoHead/SeoHead";

const IndividualBlogPage = observer(() => {
  const [blogData, setBlogData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const {
    BlogStore: { getBlog },
  } = stores;

  const router = useRouter();
  const { title } = useParams();

  useEffect(() => {
    if (!title) return;

    setLoading(true);
    getBlog(title as string)
      .then((data: any) => {
        if (data) {
          setBlogData({ ...data });
        }
      })
      .catch(() => { })
      .finally(() => setLoading(false));
  }, [title, getBlog]);

  // Function to handle social media sharing
  const handleShare = (platform: "facebook" | "instagram") => {
    const currentUrl = window.location.href;
    let shareUrl = "";

    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`;
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  // ✅ INSTAGRAM — ONLY NEW ADDITION
  const handleInstagramShare = async () => {
    const currentUrl = window.location.href;

    try {
      await navigator.clipboard.writeText(currentUrl);

      const isMobile = /Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent
      );

      if (isMobile) {
        window.location.href = "instagram://app";
      } else {
        window.open("https://www.instagram.com/", "_blank");
      }
    } catch (error) {
      console.error("Instagram share failed", error);
    }
  };

  // Function to handle native share or copy link
  const handleShareIcon = async () => {
    const currentUrl = window.location.href;
    const blogTitle = blogData?.title?.split("-").join(" ") || "";

    if (navigator.share) {
      try {
        await navigator.share({
          title: blogTitle,
          text: `Check out this blog: ${blogTitle}`,
          url: currentUrl,
        });
      } catch (error) {
        console.log(error, "Share cancelled or failed");
      }
    } else {
      try {
        await navigator.clipboard.writeText(currentUrl);
        alert("Link copied to clipboard!");
      } catch (error) {
        console.error(error, "Failed to copy link");
      }
    }
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      onClick: () => handleShare("facebook"),
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      onClick: handleInstagramShare, // ✅ ONLY CHANGE HERE
    },
  ];

  return (
    <PageLoader loading={loading} noRecordFoundText={!blogData} height="15vh">
      <Box maxW={{ base: "95%", md: "90%" }} mx="auto">
        <Box maxW="800px" mx="auto" px={{ base: 2, md: 4 }}>
          <Heading
            as="h1"
            textAlign="center"
            fontWeight={600}
            mt={2}
            mb={2}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            {blogData?.title?.split("-").join(" ")}
          </Heading>
        </Box>

        <SeoHead
          title={
            blogData?.title?.split("-").join(" ") ||
            blogData?.slug?.split("-").join(" ")
          }
          description={blogData?.subTitle}
          image={blogData?.coverImage?.url}
        />

        <Image
          alt={blogData?.title?.split("-").join(" ")}
          borderTopRightRadius="50px"
          borderBottomLeftRadius="50px"
          mt={6}
          h={{ base: "30vh", md: "50vh" }}
          objectFit="cover"
          w="100%"
          src={blogData?.coverImage?.url}
        />

        <Grid
          templateColumns={{ base: "1fr", md: "0.75fr 4fr 1fr" }}
          gap={{ base: 6, md: 4 }}
          my={{ base: 6, md: 12 }}
        >
          <Box>
            <Box cursor="pointer" onClick={handleShareIcon}>
              <Center>
                <Icon as={IoShareSocialOutline} boxSize={5} />
              </Center>
            </Box>

            <Flex
              direction={{ base: "row", md: "column" }}
              align="center"
              justify="center"
              gap={{ base: 3, md: 1 }}
              mt={6}
            >
              {socialLinks.map((social) => (
                <Box
                  key={social.name}
                  cursor="pointer"
                  onClick={social.onClick}
                  _hover={{ opacity: 0.7 }}
                  mb={{ base: 0, md: 3 }}
                  mr={{ base: 3, md: 0 }}
                  title={
                    social.name === "Instagram"
                      ? "Link copied! Paste it in Instagram Story using link sticker"
                      : `Share on ${social.name}`
                  }
                >
                  <Icon as={social.icon} boxSize={6} color="gray.700" />
                </Box>
              ))}
            </Flex>
          </Box>

          <Box
            pr={{ base: 0, md: 4 }}
            dangerouslySetInnerHTML={{ __html: blogData?.content }}
          />

          <Box px={{ base: 2, md: 4 }} mt={{ base: 6, md: 0 }}>
            <Text fontWeight={700} fontSize={{ base: "xs", md: "lg" }}>
              Contact Us Right Now
            </Text>
            <Text color="#616161" fontSize={{ base: "sm", md: "md" }}>
              Have questions or need support? Reach out to us—we&apos;re here to
              help!
            </Text>
            <Button
              variant="outline"
              py={5}
              px={6}
              fontSize="sm"
              mt={4}
              color="#ff914d"
              borderColor="#ff914d"
              _hover={{ bg: "#ff914d", color: "white" }}
              onClick={() => router.push("/contact-us")}
            >
              Contact Us Now!
            </Button>
          </Box>
        </Grid>

        <BlogCardSection fromIndividualBlog={true} />
      </Box>
    </PageLoader>
  );
});

export default IndividualBlogPage;
