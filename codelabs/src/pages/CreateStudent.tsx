import {
  Box,
  Grid,
  InputLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
  TextareaAutosize,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

const CreateStudent = () => {
  const StyledTextArea = styled(TextareaAutosize)(
    () => `
      width: 93%;
      resize: none;
      border: 1px solid #ccc;
      padding: 8px;
        `
  );
  return (
    <Box
      component={"div"}
      sx={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 5,
        bgcolor: "rgba(246, 246, 246,0.3)",
      }}
    >
      <Box
        component={"div"}
        sx={{
          width: "55%",
          height: "100vh",
          position: "absolute",
          top: 0,
          right: 0,
          backgroundColor: "#ffffff",
          zIndex: 10,
          padding: "2rem 4rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "16px",
            fontFamily: "Poppins",
            fontWeight: 600,
            margin: "2rem 0",
          }}
        >
          Create Student Profile
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputLabel htmlFor="first-name">First Name</InputLabel>
              <TextField
                id="first-name"
                placeholder="First Name"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel htmlFor="last-name">Last Name</InputLabel>
              <TextField
                id="last-name"
                placeholder="Last Name"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="last-name">User Name</InputLabel>
              <TextField
                id="user-name"
                placeholder="User Name"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="last-name">Email</InputLabel>
              <TextField
                id="email"
                placeholder="Email"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="last-name">Mobile Number</InputLabel>
              <TextField
                id="mobile-number"
                placeholder="Mobile Number"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="last-name">Age</InputLabel>
              <TextField
                id="age"
                placeholder="Age"
                type="number"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="gender">Gender</InputLabel>
              <Select
                labelId="gender"
                id="gender"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="last-name">Location</InputLabel>
              <TextField
                id="location"
                placeholder="Location"
                type="textarea"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="last-name">Address</InputLabel>
              <StyledTextArea
                id="address"
                minRows={6}
                sx={{ boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="gender">Language Preference</InputLabel>
              <Select
                labelId="gender"
                id="gender"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              >
                <MenuItem value="Male">English</MenuItem>
                <MenuItem value="Female">Hindi</MenuItem>
                <MenuItem value="Female">Tamil</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="last-name">Password</InputLabel>
              <TextField
                id="password"
                placeholder="Password"
                type="password"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1rem", textAlign: "center" }}>
              <Button
                sx={{
                  bgcolor: "#4E176C",
                  color: "white",
                  padding: "1rem 2rem",
                  "&:hover": { bgcolor: "#4E176C" },
                  fontSize: "18px",
                }}
              >
                Create Student Profile
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default CreateStudent;
