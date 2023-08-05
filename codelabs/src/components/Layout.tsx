import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopMenu from "./TopMenu";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#F6F6F6",
        display: "flex",
        overflowX: "hidden",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          flex: "1 1 0",
          maxWidth: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TopMenu />
        <Box
          sx={{
            flex: "1 1 auto",
            overflowY: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
