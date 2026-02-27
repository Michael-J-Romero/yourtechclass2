import React from "react";
import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";

type Props = {
  showPricing: boolean;
};

const FORMATS = [
  {
    title: "One-on-One Coaching",
    audience: "Junior high, high school, adults",
    topics: ["Web", "Apps", "Backend", "Game projects"],
    where: ["Los Angeles in-person", "Online / Zoom", "In client's home"],
    rate: "$40/hour",
  },
  {
    title: "Small Group Sessions",
    audience: "Peer-based beginner to intermediate learners",
    topics: ["Game design", "Web basics", "Collaborative projects"],
    where: ["Los Angeles groups", "Nearby cities for larger cohorts"],
    rate: "$25/hour per student",
  },
  {
    title: "Workshops & Programs",
    audience: "Schools, community orgs, charter/summer programs",
    topics: ["Theme-based builds", "Technical intensives", "Showcase events"],
    where: ["On-site by request", "LA and nearby cities"],
    rate: "Custom quote",
  },
];

export default function FormatFirst({ showPricing }: Props) {
  return (
    <Box>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        Format-First Program Structure
      </Typography>
      <Grid container spacing={2}>
        {FORMATS.map((format) => (
          <Grid key={format.title} size={{ xs: 12, md: 4 }}>
            <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
              <CardContent sx={{ p: 2.5 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {format.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {format.audience}
                </Typography>

                <Typography variant="subtitle2" fontWeight={700}>
                  Topics
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1, mb: 1.5 }}>
                  {format.topics.map((topic) => (
                    <Chip key={topic} label={topic} size="small" />
                  ))}
                </Box>

                <Typography variant="subtitle2" fontWeight={700}>
                  When / Where
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                  {format.where.map((location) => (
                    <Chip key={location} label={location} size="small" color="primary" variant="outlined" />
                  ))}
                </Box>

                {showPricing && (
                  <Typography variant="body2" sx={{ mt: 1.5, fontWeight: 700 }}>
                    Rate: {format.rate}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
