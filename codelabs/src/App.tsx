import { Box } from "@mui/material";
import "./App.css";
import Admin from "./pages/Admin";

function App() {
  return (
    <Box sx={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Admin />
    </Box>
  );
}

export default App;
