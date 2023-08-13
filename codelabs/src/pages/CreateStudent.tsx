import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Grid,
  InputLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleShow } from "../Slices/createStudentProfile";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: string;
  phoneNumber: string;
  address: string;
  userName: string;
  gender: string;
  location: string;
  preference: string[];
}

const CreateStudent = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    phoneNumber: "",
    address: "",
    userName: "",
    gender: "",
    location: "",
    preference: [],
  });

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleShow());
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post("/v1/admin/users/create", formData, {
        baseURL: "https://codelabs-server.el.r.appspot.com",
      });
      console.log("Response from API:", response.data);
    } catch (error) {
      console.error("Error while sending POST request:", error);
    }
    handleToggle();
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (
    event: ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  return (
    <Box
      component="div"
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
        component="div"
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
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputLabel htmlFor="first-name">First Name</InputLabel>
              <TextField
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel htmlFor="last-name">Last Name</InputLabel>
              <TextField
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="user-name">User Name</InputLabel>
              <TextField
                id="user-name"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                placeholder="User Name"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <TextField
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="mobile-number">Mobile Number</InputLabel>
              <TextField
                id="mobile-number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="age">Age</InputLabel>
              <TextField
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
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
                name="gender"
                value={formData.gender}
                onChange={handleSelectChange}
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="location">Location</InputLabel>
              <TextField
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location"
                type="text"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="address">Address</InputLabel>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={6}
                style={{
                  width: "94%",
                  boxShadow: "3px 3px 10px 2px lightgrey",
                  resize: "none",
                  outline: "none",
                  border: "none",
                }}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="preference">Language Preference</InputLabel>
              <Select
                labelId="preference"
                id="preference"
                name="preference"
                multiple
                value={formData.preference}
                onChange={handleSelectChange}
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Hindi">Hindi</MenuItem>
                <MenuItem value="Tamil">Tamil</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <TextField
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                type="password"
                variant="outlined"
                sx={{ width: "85%", boxShadow: "3px 3px 10px 2px lightgrey" }}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1rem", textAlign: "center" }}>
              <Button
                type="submit"
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
