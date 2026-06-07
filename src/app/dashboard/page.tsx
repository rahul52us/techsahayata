"use client";

import { Box } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import Dashboard from "./components/Dashboard/Dashboard";

const page = observer(() => {
  return (
    <Box>
      <Dashboard />
    </Box>
  );
});

export default page;
