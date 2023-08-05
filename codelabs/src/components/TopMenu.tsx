import { Box } from "@mui/material";
import Search from "../assets/search.png";
import Message from "../assets/message-square.png";
import Bell from "../assets/bell.png";
import User from "../assets/Group 11394.png";

const TopMenu = () => {
  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        padding: "32px 32px",
      }}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          width: "fit-content",
          height: "max-content",
          gap: "30px",
        }}
      >
        <img src={Search} alt="search icon" />
        <img src={Message} alt="message icon" />
        <img src={Bell} alt="bell icon" />
        <img src={User} alt="user icon" />
      </Box>
    </Box>
  );
};

export default TopMenu;
