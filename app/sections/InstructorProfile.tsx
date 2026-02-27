"use client";

import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Dialog,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

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

const GALLERY_IMAGES = [
  { src: "/img/2.jpg", alt: "Students in coding class", colSpan: { xs: 2, sm: 3, md: 6 }, rowSpan: 2 },
  { src: "/img/3.jpg", alt: "Hands-on project work", colSpan: { xs: 1, sm: 3, md: 3 }, rowSpan: 1 },
  { src: "/img/4.jpg", alt: "Project showcase", colSpan: { xs: 1, sm: 3, md: 3 }, rowSpan: 1 },
  { src: "/img/5.jpg", alt: "Collaborative build session", colSpan: { xs: 1, sm: 3, md: 3 }, rowSpan: 1 },
  { src: "/img/7.jpg", alt: "Classroom collaboration", colSpan: { xs: 1, sm: 3, md: 3 }, rowSpan: 1 },
  { src: "/img/8.jpg", alt: "Student presentation", colSpan: { xs: 2, sm: 6, md: 6 }, rowSpan: 1 },
];

export default function InstructorProfile({ colors }: InstructorProfileProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const theme = useTheme();

  const selectedImage = selectedImageIndex !== null ? GALLERY_IMAGES[selectedImageIndex] : null;

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return 0;
      return prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1;
    });
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return 0;
      return prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <Box id="about" sx={{ py: 7, bgcolor: colors.warm }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            mb: 4,
            p: { xs: 1.5, sm: 2 },
            borderRadius: 2,
            bgcolor: "background.paper",
            boxShadow: 1,
          }}
        >
          <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
            Classroom Gallery
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Click any photo to view full-screen.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(6, 1fr)", md: "repeat(12, 1fr)" },
              gridAutoRows: { xs: 92, sm: 104, md: 112 },
              gap: { xs: 1, sm: 1.25 },
            }}
          >
            {GALLERY_IMAGES.map((image, index) => (
              <Box
                key={image.src}
                component="button"
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                sx={{
                  p: 0,
                  border: 0,
                  bgcolor: "transparent",
                  width: "100%",
                  cursor: "pointer",
                  borderRadius: 1,
                  overflow: "hidden",
                  position: "relative",
                  gridColumn: {
                    xs: `span ${image.colSpan.xs}`,
                    sm: `span ${image.colSpan.sm}`,
                    md: `span ${image.colSpan.md}`,
                  },
                  gridRow: `span ${image.rowSpan}`,
                  outline: "none",
                  transition: "transform 180ms ease, box-shadow 180ms ease",
                  boxShadow: 0,
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
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(180deg, ${alpha(theme.palette.common.black, 0)} 35%, ${alpha(theme.palette.common.black, 0.55)} 100%)`,
                    opacity: { xs: 1, md: 0 },
                    transition: "opacity 180ms ease",
                    display: "flex",
                    alignItems: "flex-end",
                    p: 1,
                    "button:hover &": {
                      opacity: 1,
                    },
                  }}
                >
                  <Typography variant="caption" sx={{ color: "common.white", fontWeight: 600 }}>
                    View
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={2} sx={{ height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  pt: 3,
                  pb: 2,
                }}
              >
                <Avatar src="/img/6.jpg" alt="Instructor" sx={{ width: 120, height: 120, mb: 2 }} />
              </Box>
              <CardContent sx={{ px: 3, pb: 3 }}>
                <Typography variant="overline" fontWeight={700} textAlign="center" display="block">
                  Lead Instructor
                </Typography>
                <Typography variant="h5" fontWeight={700} gutterBottom textAlign="center">
                  Michael Romero
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  [Add your short bio here - your background, teaching philosophy, and what families can expect.]
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  With experience teaching coding across workshops, ongoing programs, and special sessions,
                  I work with learners at many different levels - from complete beginners to advanced students.
                </Typography>

                <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1 }}>
                  Classroom Highlights
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Real student work, collaborative builds, and hands-on sessions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
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

        <Dialog
          open={selectedImageIndex !== null}
          onClose={() => setSelectedImageIndex(null)}
          fullScreen
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              bgcolor: "common.black",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 1,
                borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
              }}
            >
              <Typography variant="body2" sx={{ color: "common.white", px: 1 }}>
                {selectedImageIndex !== null ? `${selectedImageIndex + 1} / ${GALLERY_IMAGES.length}` : ""}
              </Typography>
              <IconButton onClick={() => setSelectedImageIndex(null)} sx={{ color: "common.white" }}>
                <Typography sx={{ fontSize: "1.5rem", lineHeight: 1 }}>✕</Typography>
              </IconButton>
            </Box>

            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
                gap: 2,
              }}
            >
              <IconButton
                onClick={handlePrevImage}
                sx={{
                  color: "common.white",
                  border: `1px solid ${alpha(theme.palette.common.white, 0.35)}`,
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                }}
                aria-label="Previous image"
              >
                <Typography sx={{ fontSize: "1.35rem", lineHeight: 1 }}>‹</Typography>
              </IconButton>

              {selectedImage && (
                <Box
                  component="img"
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
              )}

              <IconButton
                onClick={handleNextImage}
                sx={{
                  color: "common.white",
                  border: `1px solid ${alpha(theme.palette.common.white, 0.35)}`,
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                }}
                aria-label="Next image"
              >
                <Typography sx={{ fontSize: "1.35rem", lineHeight: 1 }}>›</Typography>
              </IconButton>
            </Box>

            {selectedImage && (
              <Typography
                variant="body2"
                sx={{ color: "common.white", textAlign: "center", px: 2, pb: 1.5, opacity: 0.9 }}
              >
                {selectedImage.alt}
              </Typography>
            )}

            <Box
              sx={{
                p: 1.5,
                display: "flex",
                gap: 1,
                overflowX: "auto",
                borderTop: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
              }}
            >
              {GALLERY_IMAGES.map((image, index) => (
                <Box
                  key={`${image.src}-thumb`}
                  component="button"
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  sx={{
                    p: 0,
                    border: selectedImageIndex === index ? 2 : 0,
                    borderColor: "common.white",
                    bgcolor: "transparent",
                    borderRadius: 1,
                    overflow: "hidden",
                    cursor: "pointer",
                    minWidth: { xs: 92, sm: 120 },
                    opacity: selectedImageIndex === index ? 1 : 0.72,
                    transition: "opacity 150ms ease",
                  }}
                  aria-label={`View ${image.alt}`}
                >
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{ width: "100%", height: 72, objectFit: "cover", display: "block" }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
}
