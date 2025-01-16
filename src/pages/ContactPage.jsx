import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "@mui/material";
import ContactAppBar from "../components/ContactAppBar";
import EmailIcon from "@mui/icons-material/Email";

const formContainerStyles = {
  margin: "auto",
  transition: "width 1s ease-in-out", // CSS transition for width
  backgroundColor: "rgba(255, 255, 255, 0.9)", // Glassy effect background color
  backdropFilter: "blur(10px)", // Glassy effect backdrop filter
  borderRadius: "25px",
  padding: "25px",
  zIndex: 1,
};

const smformContainerStyles = {
  margin: "auto",
  marginTop: "2rem",
  transition: "width 1s ease-in-out", // CSS transition for width
  backgroundColor: "rgba(255, 255, 255, 0.9)", // Glassy effect background color
  backdropFilter: "blur(10px)", // Glassy effect backdrop filter
  borderRadius: "25px",
  padding: "25px",
};

const FORMSPARK_ACTION_URL = "https://submit-form.com/w1rbhLsCm"; // Correct Formspree URL

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isMdScreen = useMediaQuery("(min-width:960px)");

  const containerStyles = isMdScreen
    ? formContainerStyles
    : smformContainerStyles;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (firstName === "" || lastName === "" || email === "" || message === "") {
      alert("Please Fill All The Fields.");
    } else {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
        }),
      });
      alert("Message Sent.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#090808" }}>
      <ContactAppBar />
      <Box
        id="contactUs"
        sx={{
          position: "relative",
          backgroundColor: "#090808",
          color: "white",
          marginTop: "4%",
        }}
      >
        <Container>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                marginLeft: "2rem",
                fontSize: { xs: "50px", md: "100px" },
                color: "#00c062",
              }}
            >
              <EmailIcon sx={{ fontSize: "2rem" }} />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "50px", md: "70px" },
                fontWeight: "500",
                fontFamily: "Poppins",
                color: "#00c062",
              }}
            >
              CONTACT US
            </Typography>
          </Box>
          <br />
          <Fade left triggerOnce>
            <Box sx={{ ...containerStyles }}>
              <form validate autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      name="firstName"
                      fullWidth
                      required
                      margin="normal"
                      label="First Name"
                      variant="standard"
                      sx={{
                        "& label": { color: "black" },
                        "& label.Mui-focused": { color: "black" },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "black",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      name="lastName"
                      fullWidth
                      required
                      margin="normal"
                      label="Last Name"
                      variant="standard"
                      sx={{
                        "& label": { color: "black" },
                        "& label.Mui-focused": { color: "black" },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "black",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      fullWidth
                      required
                      margin="normal"
                      label="Email Address"
                      variant="standard"
                      sx={{
                        "& label": { color: "black" },
                        "& label.Mui-focused": { color: "black" },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "black",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                      fullWidth
                      required
                      margin="normal"
                      multiline
                      rows={4}
                      label="Message"
                      variant="standard"
                      sx={{
                        "& label": { color: "black" },
                        "& label.Mui-focused": { color: "black" },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "black",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <br />
                    <Box sx={{ textAlign: "center" }}>
                      <Button
                        type="submit"
                        sx={{
                          fontFamily: "Inter",
                          border: "1px solid black",
                          color: "black",
                          backgroundColor: "#00c062",
                          width: "150px",
                          borderRadius: "20px",
                          "&:hover": {
                            backgroundColor: "#00c062",
                            borderColor: "white",
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage;
