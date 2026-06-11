"use client";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { FaBlog, FaCommentAlt, FaUsers, FaRegCircle } from "react-icons/fa";
import stores from "../store/stores";

const monthlyVisits = [120, 180, 150, 260, 210, 320, 400];
const growthValues = [230, 240, 232, 250, 288, 370, 350];

const MetricCard = ({
  label,
  value,
  icon,
  accent,
  bg,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  accent: string;
  bg: string;
}) => {
  return (
    <Box
      bg={bg}
      borderRadius="xl"
      p={5}
      minH="110px"
      boxShadow="0 4px 18px rgba(15, 23, 42, 0.06)"
      position="relative"
      overflow="hidden"
    >
      <Flex align="center" justify="space-between" mb={4}>
        <Text fontSize="sm" fontWeight="700" color={accent}>
          {label}
        </Text>
        <Box color={accent} fontSize="22px">
          {icon}
        </Box>
      </Flex>
      <Text fontSize="3xl" fontWeight="700" color="gray.800">
        {value}
      </Text>
      <Box position="absolute" left={0} bottom={0} h="4px" w="38%" bg={accent} />
    </Box>
  );
};

const Panel = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Box bg="white" borderRadius="xl" p={5} boxShadow="0 4px 18px rgba(15, 23, 42, 0.06)">
      <Text fontSize="lg" fontWeight="700" color="gray.800" mb={5}>
        {title}
      </Text>
      {children}
    </Box>
  );
};

const BarChart = ({ values }: { values: number[] }) => {
  const chartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const maxValue = Math.max(...values, 1);

  return (
    <Flex align="end" gap={3} h="280px" px={2} pb={2}>
      {values.map((value, index) => {
        const height = `${Math.max((value / maxValue) * 100, 10)}%`;
        return (
          <Flex key={chartLabels[index]} direction="column" align="center" flex="1" h="full" justify="end">
            <Box
              w="100%"
              maxW="54px"
              h={height}
              minH="28px"
              bg="rgba(72, 187, 120, 0.55)"
              borderRadius="10px 10px 0 0"
              border="1px solid rgba(72, 187, 120, 0.9)"
            />
            <Text mt={3} fontSize="xs" color="gray.500">
              {chartLabels[index]}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

const LineChart = ({ values }: { values: number[] }) => {
  const width = 640;
  const height = 280;
  const padding = 24;
  const maxValue = Math.max(...values, 1);
  const minValue = Math.min(...values, 0);
  const range = Math.max(maxValue - minValue, 1);
  const stepX = (width - padding * 2) / Math.max(values.length - 1, 1);

  const points = values
    .map((value, index) => {
      const x = padding + index * stepX;
      const normalized = (value - minValue) / range;
      const y = height - padding - normalized * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <Box w="full" h="280px">
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <linearGradient id="growthLine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          points={points}
        />
        <polyline
          fill="url(#growthLine)"
          stroke="none"
          points={`${padding},${height - padding} ${points} ${width - padding},${height - padding}`}
        />
        {values.map((value, index) => {
          const x = padding + index * stepX;
          const normalized = (value - minValue) / range;
          const y = height - padding - normalized * (height - padding * 2);
          return <circle key={index} cx={x} cy={y} r="6" fill="#8B5CF6" />;
        })}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#E2E8F0" strokeWidth="2" />
      </svg>
    </Box>
  );
};

const Dashboard = observer(() => {
  const {
    dashboardStore,
  } = stores;

  useEffect(() => {
    void dashboardStore.getDashboardData();
  }, [dashboardStore]);

  const cards = [
    {
      label: "Blogs",
      value: dashboardStore.dashboardData.totalBlogs,
      icon: <FaBlog />,
      accent: "#2D9CDB",
      bg: "#F8FBFF",
    },
    {
      label: "Users",
      value: dashboardStore.dashboardData.totalUsers,
      icon: <FaUsers />,
      accent: "#2F855A",
      bg: "#F7FFF9",
    },
    {
      label: "Testimonials",
      value: dashboardStore.dashboardData.totalTestimonials,
      icon: <FaCommentAlt />,
      accent: "#6B46C1",
      bg: "#FBF7FF",
    },
    {
      label: "Active Users",
      value: dashboardStore.dashboardData.activeUsers,
      icon: <FaRegCircle />,
      accent: "#C05621",
      bg: "#FFF9F3",
    },
  ];

  return (
    <Box>
      <Heading as="h1" size="lg" color="teal.700" mb={2}>
        Dashboard
      </Heading>
      <Text color="gray.600" mb={6}>
        A focused snapshot of the content and users you are managing.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={4}>
        {cards.map((card) => (
          <Skeleton key={card.label} isLoaded={!dashboardStore.loading} borderRadius="xl">
            <MetricCard {...card} />
          </Skeleton>
        ))}
      </SimpleGrid>

      <Grid templateColumns={{ base: "1fr", xl: "1fr 1fr" }} gap={6} mt={6}>
        <GridItem>
          <Panel title="Monthly Visits">
            <BarChart values={monthlyVisits} />
          </Panel>
        </GridItem>
        <GridItem>
          <Panel title="Growth">
            <LineChart values={growthValues} />
          </Panel>
        </GridItem>
      </Grid>
    </Box>
  );
});

export default Dashboard;
