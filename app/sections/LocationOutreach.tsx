import React from "react";
import { Box, Button, Container, Grid, Link, Paper, Typography } from "@mui/material";

type LocationOutreachProps = {
  colors: {
    warm: string;
  };
};

export default function LocationOutreach({ colors }: LocationOutreachProps) {
  return (
    <Box sx={{ py: 7, bgcolor: colors.warm }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" textAlign="center" fontWeight={700} gutterBottom>
          Location Outreach
        </Typography>
        <Typography textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Reach out about summer tech programs, charter partnerships, and community locations.
        </Typography>
        <Grid container spacing={4} alignItems="stretch">
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={2}
              sx={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <Box
                component="video"
                controls
                sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              >
                <source src="/vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={2} sx={{ p: { xs: 3, sm: 4 }, height: "100%" }}>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Summer Tech and Location Partnerships
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                If you have a location where we can host a summer tech program, charter program,
                or similar coding initiative in LA, please reach out. We previously hosted in the
                San Bernardino area and are now actively seeking a new Los Angeles location partner.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Share your preferred dates, capacity, and age range. We will follow up quickly to
                confirm fit and propose a tailored plan.
              </Typography>
              <Button
                variant="contained"
                size="large"
                href="#contact"
                component={Link}
                sx={{ fontWeight: 700 }}
              >
                Contact for Partnerships
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
