import React from "react";
import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";

type Props = {
  showPricing: boolean;
};

const LEVELS = [
  {
    level: "Beginner",
    who: "Junior high, high school, adults",
    focus: ["Game design basics", "Web foundations", "Programming logic"],
    outcomes: ["Confidence with coding syntax", "First small project"],
  },
  {
    level: "Intermediate",
    who: "Students with prior coding exposure",
    focus: ["App workflows", "Backend intro", "Project architecture"],
    outcomes: ["Multi-file projects", "Debugging workflows"],
  },
  {
    level: "Advanced",
    who: "Experienced learners",
    focus: ["Technical depth", "Performance concepts", "Portfolio builds"],
    outcomes: ["Capstone-quality project", "Interview-ready fundamentals"],
  },
];

export default function LevelPathway({ showPricing }: Props) {
  return (
    <Box>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        Skill Pathway by Level
      </Typography>
      <Grid container spacing={2}>
        {LEVELS.map((entry) => (
          <Grid key={entry.level} size={{ xs: 12, md: 4 }}>
            <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
              <CardContent sx={{ p: 2.5 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {entry.level}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                  {entry.who}
                </Typography>
                <Typography variant="subtitle2" fontWeight={700}>
                  Focus Areas
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1, mb: 1.5 }}>
                  {entry.focus.map((item) => (
                    <Chip key={item} label={item} size="small" />
                  ))}
                </Box>
                <Typography variant="subtitle2" fontWeight={700}>
                  Outcomes
                </Typography>
                <Box component="ul" sx={{ pl: 2, mt: 1, mb: 0 }}>
                  {entry.outcomes.map((item) => (
                    <li key={item}>
                      <Typography variant="body2" color="text.secondary">
                        {item}
                      </Typography>
                    </li>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {[
          "After-school one-on-one and small groups",
          "Los Angeles in-person and online/Zoom",
          "In-home option available for approved areas",
        ].map((item) => (
          <Grid key={item} size={{ xs: 12, md: 4 }}>
            <Card elevation={1} sx={{ borderRadius: 2 }}>
              <CardContent sx={{ p: 2.5 }}>
                <Typography variant="body2" color="text.secondary">
                  {item}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {showPricing && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
          Pricing: $25/hour for groups, $40/hour for one-on-one. Workshops and custom programs by inquiry.
        </Typography>
      )}
    </Box>
  );
}
