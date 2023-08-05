import { Box, Typography } from "@mui/material";
import HHC from "../assets/hhc-logo-white (1) 1.png";
import Home from "../assets/Frame.png";

const Sidebar = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "279px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component={"div"}
        sx={{
          padding: "4rem 0",
          borderTopRightRadius: "40px",
          borderBottomRightRadius: "40px",
          bgcolor: "#4E176C",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={HHC} alt="hhc-logo" />
      </Box>
      <Box
        sx={{
          bgcolor: "#4E176C",
          width: "100%",
          height: "60px",
          paddingLeft: "2rem",
        }}
      >
        <Box
          sx={{
            bgcolor: "#f6f6f6",
            width: "100%",
            height: "100%",
            borderTopLeftRadius: "40px",
            borderBottomLeftRadius: "40px",
            display: "flex",
            alignItems: "center",
            padding: "0 40px",
          }}
        >
          <img src={Home} alt="icon" />
          <Typography variant="body1" sx={{ marginLeft: "10px" }}>
            Home
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          bgcolor: "#4E176C",
          borderTopRightRadius: "40px",
        }}
      ></Box>
    </Box>
  );
};

export default Sidebar;
