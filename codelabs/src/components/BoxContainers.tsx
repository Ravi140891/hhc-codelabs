import { Box, Typography } from "@mui/material";
import ArrowRight from "../assets/arrow-right-circle.png";
import TrendingUp from "../assets/trending-up.png";
import TrendingDown from "../assets/trending-down.png";
import { useDispatch } from "react-redux";
import { toggleShow } from "../Slices/createStudentProfile";

export interface ListItems {
  activeStudents: number;
  inActiveStudents: number;
}

interface BoxContainersProps {
  icon: string;
  heading1: string;
  heading2: string;
  extra: boolean;
  data: ListItems;
}

const BoxContainers: React.FC<BoxContainersProps> = ({
  icon,
  heading1,
  heading2,
  extra,
  data,
}) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleShow());
  };

  return (
    <Box
      component={"div"}
      sx={{
        width: "22%",
        height: "200px",
        borderRadius: "20px",
        bgcolor: "#fff",
        padding: "2rem 1rem",
      }}
    >
      <Box
        component={"div"}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <button
            onClick={heading2 === "Student Profile" ? handleToggle : undefined}
          >
            <img src={icon} alt="plus icon" />
          </button>
          <Box sx={{ marginLeft: "1rem" }}>
            <Typography
              sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 400 }}
            >
              {heading1}
            </Typography>
            <Typography sx={{ fontFamily: "Poppins" }}>{heading2}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          {extra ? (
            <Box
              component={"div"}
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRight: "2px solid #333333",
                  padding: "0 1rem",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontSize: "10px", fontFamily: "Poppins" }}
                >
                  Active Students
                </Typography>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "20px",
                      color: "#4E176C",
                      fontFamily: "Poppins",
                    }}
                  >
                    {data.activeStudents}
                  </Typography>
                  <img src={TrendingUp} alt="trending up" />
                </Box>
              </Box>
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "0 1rem",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontSize: "10px", fontFamily: "Poppins" }}
                >
                  In Active Students
                </Typography>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "20px",
                      color: "#4E176C",
                      fontFamily: "Poppins",
                    }}
                  >
                    {data.inActiveStudents}
                  </Typography>
                  <img src={TrendingDown} alt="trending down" />
                </Box>
              </Box>
            </Box>
          ) : (
            <Box>
              <Typography sx={{ fontSize: "13px", fontFamily: "Poppins" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Typography>
            </Box>
          )}
          <img src={ArrowRight} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default BoxContainers;
