import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Modal,
  Fade,
} from "@mui/material";
import { useDarkMode } from "../context/DarkModeContext";
import test1 from "../assets/images/test1.png";
import test2 from "../assets/images/test2.png";
import test3 from "../assets/images/test3.png";
import test4 from "../assets/images/test4.png";
import { Fade as FadeReveal } from "react-awesome-reveal"; // Using react-awesome-reveal for animations

const testimonials = [
  { id: 1, image: test1 },
  { id: 2, image: test2 },
  { id: 3, image: test3 },
  { id: 4, image: test4 },
];

const cardStyles = {
  maxWidth: { xs: 300, md: 400 },
  height: "auto",
  backgroundColor: "#212427",
  backdropFilter: "blur(15px)",
  opacity: 0.9,
  color: "white",
  cursor: "pointer",
};

const Portfolio = () => {
  const { darkMode } = useDarkMode();
  const [selectedImage, setSelectedImage] = useState(null);
  const [inView, setInView] = useState([]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView((prevState) => [...prevState, entry.target.id]);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    const targets = document.querySelectorAll(".scroll-animation");
    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClickImage = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <Box
      id="portfolioSec"
      sx={{
        backgroundColor: darkMode ? "#090808" : "#f6fbf6",
        color: darkMode ? "white" : "black",
        marginTop: "15rem",
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <FadeReveal cascade duration={3000} className="scroll-animation">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "600",
                  fontFamily: "Poppins",
                  color: "#00c062",
                  textTransform: "uppercase",
                }}
              >
                Testimonials
              </Typography>
            </Box>
          </FadeReveal>
          <br />
          <Box sx={{ width: { xs: "350px", md: "600px" }, margin: "auto" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "400", fontFamily: "Inter", color: "#c9c7c7" }}
            >
              See what our clients results are.
            </Typography>
          </Box>
        </Box>
        <br />
        <Grid container spacing={7} justifyContent="center" sx={{ mt: "2rem" }}>
          {testimonials.map((testimonial, index) => (
            <Grid
              item
              md={4}
              key={testimonial.id}
              className="scroll-animation"
              id={`testimonial-${testimonial.id}`}
            >
              <FadeReveal duration={1500} delay={index * 200}>
                <Card
                  sx={cardStyles}
                  onClick={() => handleClickImage(testimonial.image)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="auto"
                    image={testimonial.image}
                    alt={`Testimonial ${testimonial.id}`}
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </Card>
              </FadeReveal>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal to show clicked image */}
      <Modal
        open={!!selectedImage}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade in={!!selectedImage} timeout={500}>
          <Box sx={{ backgroundColor: "white", padding: "10px" }}>
            <img
              src={selectedImage}
              alt="Selected"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Portfolio;
