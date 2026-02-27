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
  { src: "/img/2.jpg", alt: "Students in coding class" },
  { src: "/img/3.jpg", alt: "Hands-on project work" },
  { src: "/img/4.jpg", alt: "Project showcase" },
  { src: "/img/5.jpg", alt: "Collaborative build session" },
  { src: "/img/7.jpg", alt: "Classroom collaboration" },
  { src: "/img/8.jpg", alt: "Student presentation" },
];

export default function InstructorProfile({ colors }: InstructorProfileProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const selectedImage = selectedImageIndex !== null ? GALLERY_IMAGES[selectedImageIndex] : null;

  return (
    <Box id="about" sx={{ py: 7, bgcolor: colors.warm }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(6, 1fr)" },
              gap: 1.5,
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
                }}
                aria-label={`Open ${image.alt}`}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  sx={{ width: "100%", height: 96, objectFit: "cover", display: "block" }}
                />
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
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
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
              }}
            >
              {selectedImage && (
                <Box
                  component="img"
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
              )}
            </Box>

            <Box
              sx={{
                p: 2,
                display: "grid",
                gridTemplateColumns: { xs: "repeat(3, 1fr)", sm: "repeat(6, 1fr)" },
                gap: 1,
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
                  }}
                  aria-label={`View ${image.alt}`}
                >
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{ width: "100%", height: 72, objectFit: "cover", display: "block", opacity: 0.9 }}
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
