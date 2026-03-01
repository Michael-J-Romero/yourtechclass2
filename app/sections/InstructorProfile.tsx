"use client";

import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Marquee from "react-fast-marquee";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type InstructorProfileProps = {
  colors: {
    warm: string;
  };
};

const TESTIMONIALS = [
  {
    quote:
      "My child went from being nervous about coding to confidently building and presenting projects. The structure and support were excellent.",
    source: "Parent, Los Angeles",
  },
  {
    quote:
      "Lessons are flexible, practical, and genuinely engaging. We saw growth in both technical skills and confidence.",
    source: "Family Program Participant",
  },
  {
    quote:
      "Patient, encouraging, and highly organized. My student felt supported while still being challenged to grow.",
    source: "Parent, Pasadena",
  },
];

const FULLSCREEN_GALLERY_IMAGES = [
  // { src: "/img/1.jpg", alt: "Coding lesson with students focused on laptops" },
  // { src: "/img/2.jpg", alt: "Students in coding class" },
  { src: "/img/3.jpg", alt: "Hands-on project work" },
  { src: "/img/4.jpg", alt: "Project showcase" },
  { src: "/img/5.jpg", alt: "Collaborative build session" },
  { src: "/img/6.jpg", alt: "Instructor guiding students during class" },
  { src: "/img/7.jpg", alt: "Classroom collaboration" },
  { src: "/img/8.jpg", alt: "Student presentation" },
  { src: "/img/9.jpg", alt: "Students building interactive coding projects" },
  { src: "/img/10.jpg", alt: "Class demo and feedback moment" },
  { src: "/img/11.jpg", alt: "Pair programming activity" },
  { src: "/img/12.jpg", alt: "Classroom workspace during coding session" },
  { src: "/img/13.png", alt: "Student project collaboration" },
  { src: "/img/14.png", alt: "Hands-on learning in classroom environment" },
  { src: "/img/15.png", alt: "Hands-on learning in classroom environment" },
];

export default function InstructorProfile({ colors }: InstructorProfileProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const theme = useTheme();

  const lightboxSlides = FULLSCREEN_GALLERY_IMAGES.map((image) => ({
    src: image.src,
    description: image.alt,
  }));

  return (
    <Box id="about" sx={{ pb: 7, pt: 2, bgcolor: colors.warm }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" textAlign="center" fontWeight={700} sx={{ mb: 4 }}>
        Learning in Action
        
        </Typography>
        <Box
          sx={{
            mb: 8,
            // p: { xs: 1.5, sm: 2 },
            // borderRadius: 2,
            // bgcolor: "background.paper",
            // boxShadow: 1,
          }}
        >
         

          <Box
            sx={{
              mb: 3,
              borderRadius: 4,
              overflow: "hidden",
              // bgcolor: "background.default",
              position: "relative",
            }}
          >
            <Marquee speed={34} pauseOnHover gradient={false}>
              {FULLSCREEN_GALLERY_IMAGES.map((image) => (
                <Box
                  key={`${image.src}-marquee`}
                  component="button"
                  type="button"
                  onClick={() => {
                    const selectedIndex = FULLSCREEN_GALLERY_IMAGES.findIndex((item) => item.src === image.src);
                    setSelectedImageIndex(selectedIndex >= 0 ? selectedIndex : 0);
                  }}
                  sx={{
                    p: 0,
                    border: 0,
                    bgcolor: "transparent",
                    cursor: "pointer",
                    mx: 1,
                    my: 0.6,
                    borderRadius: 2,
                    overflow: "hidden",
                    width: { xs: 170, sm: 210, md: 250 },
                    height: { xs: 112, sm: 138, md: 164 },
                    flexShrink: 0,
                    outline: "none",
                    transition: "transform 160ms ease, box-shadow 160ms ease",
                    "&:hover": {
                      transform: { md: "translateY(-2px)" },
                      boxShadow: 2,
                    },
                    "&:focus-visible": {
                      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
                    },
                  }}
                  aria-label={`Open ${image.alt}`}
                >
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </Box>
              ))}
            </Marquee>
            {/* <Box
              sx={{
                pointerEvents: "none",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: { xs: 32, sm: 44, md: 56 },
                background: `linear-gradient(90deg, ${theme.palette.background.default} 0%, transparent 100%)`,
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                pointerEvents: "none",
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                width: { xs: 32, sm: 44, md: 56 },
                background: `linear-gradient(270deg, ${theme.palette.background.default} 0%, transparent 100%)`,
                zIndex: 1,
              }}
            /> */}
          </Box>
 
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          <Grid size={{ xs: 13, md: 7 }}>
            <Card elevation={2} sx={{ height: "100%" }}>
              <CardContent sx={{ px: 3, pb: 3, pt: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Avatar src="/img/6.jpg" alt="Instructor" sx={{ width: 96, height: 96 }} />
                  <Box>
                    <Typography variant="overline" fontWeight={700} display="block">
                      Lead Instructor
                    </Typography>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      Michael Romero
                    </Typography>
                  </Box>
                </Box>
                <Typography color="text.secondary" sx={{ mb: 2 }}>

Michael Romero is a programmer and educator with over 15 years of experience in web development, game development, and technology instruction across Los Angeles and the Inland Empire.


                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
He specializes in helping students understand complex technical concepts through hands-on learning, emphasizing creation and exploration. By building their own games and interactive projects, students develop creativity, problem-solving skills, and confidence while gaining a deeper understanding of how technology works.
                </Typography>
              
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 11, md: 5 }}>
            <Grid container spacing={2}>
              {TESTIMONIALS.map((item) => (
                <Grid key={item.source} size={{ xs: 12 }}>
                  <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                    <Typography variant="body1" sx={{ fontStyle: "italic", mb: 1 }}>
                      "{item.quote}"
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      - {item.source}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Lightbox
          open={selectedImageIndex !== null}
          close={() => setSelectedImageIndex(null)}
          index={selectedImageIndex ?? 0}
          slides={lightboxSlides}
          plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
          captions={{
            descriptionTextAlign: "center",
          }}
          thumbnails={{
            position: "bottom",
            width: 108,
            height: 72,
            border: 0,
            borderRadius: 8,
            gap: 10,
          }}
          zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 2,
            scrollToZoom: true,
          }}
          controller={{
            closeOnBackdropClick: true,
          }}
          on={{
            view: ({ index }) => setSelectedImageIndex(index),
          }}
        />
      </Container>
    </Box>
  );
}
