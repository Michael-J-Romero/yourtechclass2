"use client";

import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
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

const STATS = [
  { value: "15+", label: "Years Programming Exp." },
  { value: "4+", label: "Years Teaching Exp." },
  { value: "Hundreds", label: "of Students Taught" },
  { value: "Dozens", label: "of Workshops Hosted" },
  { kind: "location", value: "Serving", city: "Los Angeles", region: "Inland Empire" },
];

const FULLSCREEN_GALLERY_IMAGES = [
  // { src: "/img/1.jpg", alt: "Coding lesson with students focused on laptops" },
  // { src: "/img/2.jpg", alt: "Students in coding class" },
  { src: "/img/3.jpg", alt: "Free Code Camp session" },
  { src: "/img/4.jpg", alt: "Coding workshop" },
  { src: "/img/5.jpg", alt: "Yourtechclass adult group" },
  { src: "/img/13.png", alt: "Summer Tech Camp -with Empowering Success Now" },
  { src: "/img/14.png", alt: "Building games with visual programming (Summer Tech Camp -with Empowering Success Now)" },
  { src: "/img/15.png", alt: "Student project collaboration (Summer Tech Camp -with Empowering Success Now)" },
  { src: "/img/12.jpg", alt: "Creating a 'Breakout' game" },
  { src: "/img/10.jpg", alt: "Whiteboard challenges in a small group" },
  { src: "/img/11.jpg", alt: "Walking through a coding exercise" },
  { src: "/img/6.jpg", alt: "Instructor guiding students during class" },
  { src: "/img/7.jpg", alt: "Classroom following a coding lesson" },
  { src: "/img/8.jpg", alt: "Building a game with visual programming" },
  { src: "/img/9.jpg", alt: "Students learning about procedural drawing" },
];  

const PROFILE_CARD_VARIANT: "polished" | "standard" | "minimal" = "minimal";

export default function InstructorProfile({ colors }: InstructorProfileProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const theme = useTheme();
  const isPolished = PROFILE_CARD_VARIANT === "polished";
  const isStandard = PROFILE_CARD_VARIANT === "standard";
  const isMinimal = PROFILE_CARD_VARIANT === "minimal";

  const cardElevation = isMinimal ? 0 : 2;
  const cardOuterSx = {
    height: "100%",
    ...(isPolished
      ? {
          borderRadius: 3,
          p: 0.2,
          backgroundImage: `linear-gradient(130deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
        }
      : {}),
    ...(isStandard ? { borderRadius: 2 } : {}),
    ...(isMinimal ? { bgcolor: "transparent", boxShadow: "none", borderRadius: 0 } : {}),
  };

  const bioContentSx = isPolished
    ? {
        px: 3,
        pb: 3,
        pt: 3,
        height: "100%",
        borderRadius: 2.5,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.6)",
      }
    : {
        p: isMinimal ? 1.5 : 3,
        height: "100%",
        ...(isMinimal ? { bgcolor: "transparent" } : {}),
      };

  const statsContentSx = isPolished
    ? {
        p: 3,
        height: "100%",
        textAlign: "center",
      }
    : {
        p: isMinimal ? 1.5 : 3,
        height: "100%",
        textAlign: "center",
        ...(isMinimal ? { bgcolor: "transparent" } : {}),
      };

  const statsListSx = {
    mt: 1.5,
    display: "flex",
    flexDirection: "column",
    ...(isPolished
      ? {
          borderRadius: 2.5,
          overflow: "hidden",
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.6)",
        }
      : {}),
  };

  const statsItemPaddingSx = isPolished
    ? { px: 2, py: 1.75 }
    : isStandard
      ? { px: 1, py: 1.5 }
      : { px: 0, py: 1.1 };


  const lightboxSlides = FULLSCREEN_GALLERY_IMAGES.map((image) => ({
    src: image.src,
    description: image.alt,
  }));

  return (
    <Box id="about" sx={{ pb: 7, pt: 2, bgcolor: colors.warm }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h3" textAlign="center" fontWeight={700} sx={{ mb: 1 }} >
          {/* should be a veryshort title */}
          Hands-on programming 
          {/* Hands-on programming for all ages */}
          {/* tech education f */}
          
       
        </Typography>
        <Typography variant="h5" component="h3" textAlign="center" fontWeight={300} sx={{ mb: 4 }}>
          learning by developing real projects with an experienced instructor
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
          <Grid size={{ xs: 13, md: 9 }}>
            <Card elevation={cardElevation} sx={cardOuterSx}>
              <CardContent sx={bioContentSx}>
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
                                <Typography color="text.secondary" sx={{ mb: 2 }}>
                                    Michael also has experience working with students with diverse learning styles, including students on the autism spectrum, and focuses on creating patient, adaptable learning environments where each student can progress at their own pace. He has helped hundreds of students build real games, websites, and technical confidence that carries into college and careers.
                                </Typography>
                                <Box sx={{ mt: 1.5 }}>
                                  <Button
                                  color = "primary"
                                    variant="contained" //|| "contained" || "text"
                                    size="medium"
                                    component="a"
                                    href="https://michaelromero.me"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    View My Portfolio
                                  </Button>
                                </Box>
              
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 11, md: 3 }}>
            <Card elevation={cardElevation} sx={cardOuterSx}>
              <CardContent sx={statsContentSx}>

                <Box sx={statsListSx}>
                  {STATS.map((item, index) => (
                    <Box
                      key={item.kind === "location" ? "location" : item.label}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 0.35,
                        ...statsItemPaddingSx,
                        ...(index > 0
                          ? {
                              borderTop: "1px solid",
                              borderColor: "divider",
                            }
                          : {}),
                      }}
                    >
                      {item.kind === "location" ? (
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0.25 }}>
                          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                            {item.value}
                          </Typography>
                          <Typography variant="h5" fontWeight={800} sx={{ color: "primary.main" }}>
                            {item.city},
                          </Typography>
                          <Typography variant="h5" fontWeight={800} sx={{ color: "primary.main" }}>
                            {item.region}
                          </Typography>
                        </Box>
                      ) : (
                        <>
                          <Typography
                            variant="h4"
                            fontWeight={600}
                            sx={{ color: "primary.main", lineHeight: 1.05, letterSpacing: "-0.02em" }}
                          >
                            {item.value}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                            {item.label}
                          </Typography>
                        </>
                      )}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
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
