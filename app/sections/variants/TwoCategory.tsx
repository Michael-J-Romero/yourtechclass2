import React from "react";
import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";

type Props = {
  techStack: { name: string }[];
  programOptions: Array<{
    title: string;
    desc: string;
    goals: string[];
  }>;
  showPricing: boolean;
};

export default function TwoCategory({ techStack, programOptions, showPricing }: Props) {
  // Simple assignment: first program = K-8, others = HS/Adults (for demo)
  const k8 = programOptions[0] ? [programOptions[0]] : [];
  const hs = programOptions.slice(1);

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", justifyContent: "center", mb: 3 }}>
        {techStack.map((t: any) => (
          <Chip key={t.name} label={t.name} color="primary" variant="outlined" sx={{ fontWeight: 600 }} />
        ))}
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            K–8 — Game Design & Foundations
          </Typography>
          {k8.map((p: any) => (
            <Card key={p.title} elevation={2} sx={{ mb: 2, borderRadius: 2 }}>
              <CardContent sx={{ p: 2.5 }}>
                <Typography variant="h6" fontWeight={700}>{p.title}</Typography>
                <Typography color="text.secondary" sx={{ mb: 1 }}>{p.desc}</Typography>
                <Typography variant="subtitle2" fontWeight={700}>Goals</Typography>
                <Box component="ul" sx={{ pl: 2, mt: 0 }}>
                  {p.goals.map((g: string) => <li key={g}><Typography variant="body2" color="text.secondary">{g}</Typography></li>)}
                </Box>
                {showPricing && <Typography sx={{ mt: 1, fontWeight: 700 }}>Pricing: $25/hr (groups)</Typography>}
              </CardContent>
            </Card>
          ))}
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            High School & Adults — Web/App & Advanced Topics
          </Typography>
          {hs.map((p: any) => (
            <Card key={p.title} elevation={2} sx={{ mb: 2, borderRadius: 2 }}>
              <CardContent sx={{ p: 2.5 }}>
                <Typography variant="h6" fontWeight={700}>{p.title}</Typography>
                <Typography color="text.secondary" sx={{ mb: 1 }}>{p.desc}</Typography>
                <Typography variant="subtitle2" fontWeight={700}>Goals</Typography>
                <Box component="ul" sx={{ pl: 2, mt: 0 }}>
                  {p.goals.map((g: string) => <li key={g}><Typography variant="body2" color="text.secondary">{g}</Typography></li>)}
                </Box>
                {showPricing && <Typography sx={{ mt: 1, fontWeight: 700 }}>Pricing: $40/hr (1-on-1)</Typography>}
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
