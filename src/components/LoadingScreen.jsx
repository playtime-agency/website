import React from "react";
import { Box } from "@mui/material";
import loading from "../assets/images/loading.png";
const LoadingScreen = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Display the logo image */}
      <img src={loading} alt="Your Logo" width="500px" />{" "}
      {/* Adjust width as needed */}
    </Box>
  );
};

export default LoadingScreen;
