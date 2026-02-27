import React from "react";
import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";

type ProgramOption = {
  title: string;
  desc: string;
};

type Props = {
  techStack: { name: string }[];
  programOptions: ProgramOption[];
  showPricing: boolean;
};

export default function WhoWhatWhenWhere({ techStack, programOptions, showPricing }: Props) {
  return (
    <Box>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
            <CardContent sx={{ p: 2.5 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Who
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {[
                  "Junior High",
                  "High School",
                  "Adults",
                  "Beginner",
                  "Intermediate",
                  "Advanced",
                ].map((item) => (
                  <Chip key={item} label={item} size="small" color="primary" variant="outlined" />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
            <CardContent sx={{ p: 2.5 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                What
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {[
                  "Game Development",
                  "Web Development",
                  "App Development",
                  "Backend Basics",
                  "Robotics Projects",
                  "Data Structures & Computational Thinking",
                ].map((item) => (
                  <Chip key={item} label={item} size="small" />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
            <CardContent sx={{ p: 2.5 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                When / Where
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {[
                  "After School",
                  "One-on-One",
                  "Small Groups",
                  "Los Angeles In-Person",
                  "Online / Zoom",
                  "In Client's Home",
                ].map((item) => (
                  <Chip key={item} label={item} size="small" />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        Program Types
      </Typography>
      <Grid container spacing={2}>
        {programOptions.map((option) => (
          <Grid key={option.title} size={{ xs: 12, md: 4 }}>
            <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
              <CardContent sx={{ p: 2.5 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {option.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {option.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center", mt: 3 }}>
        {techStack.map((tech) => (
          <Chip key={tech.name} label={tech.name} color="primary" variant="outlined" />
        ))}
      </Box>

      {showPricing && (
        <Card elevation={1} sx={{ mt: 3, borderRadius: 2 }}>
          <CardContent sx={{ p: 2.5 }}>
            <Typography variant="subtitle1" fontWeight={700}>
              Pricing
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Groups: $25/hour • One-on-one: $40/hour • Workshops/programs: inquire for custom rates.
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}
