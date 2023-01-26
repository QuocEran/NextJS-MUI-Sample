import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import Navbar from "components/layout/navbar";
import Theme from "styles/theme";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <ThemeProvider theme={Theme}>
        <Navbar />
        <Box sx={{ maxWidth: 1440, marginX: "auto" }}>{children}</Box>
      </ThemeProvider>
    </Box>
  );
};

export default Layout;
