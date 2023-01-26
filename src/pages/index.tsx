import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box className="page_container" sx={{ minHeight: "300px" }}>
      <Typography>HOME PAGE</Typography>
    </Box>
  );
};

export default Home;
