import React from "react";
import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";

type Props = {
  programOptions: Array<{
    title: string;
    desc: string;
    pathways: string[];
  }>;
  showPricing: boolean;
};

export default function GenericUnified({ programOptions, showPricing }: Props) {
  return (
    <Box>
      <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", justifyContent: "center", mb: 3 }}>
        <Chip label="Ages: junior high, high school, adults" />
        <Chip label="Levels: beginner, intermediate, advanced" />
        <Chip label="Formats: 1-on-1, small group, workshops" />
      </Box>

      <Grid container spacing={3}>
        {programOptions.map((p: any) => (
          <Grid size={{ xs: 12, md: 4 }} key={p.title}>
            <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
              <CardContent sx={{ p: 2.5 }}>
                <Typography variant="h6" fontWeight={700}>{p.title}</Typography>
                <Typography color="text.secondary" sx={{ mb: 1 }}>{p.desc}</Typography>
                <Typography variant="subtitle2" fontWeight={700}>Topics</Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                  {p.pathways.map((path: string) => <Chip key={path} label={path} size="small" />)}
                </Box>
                {showPricing && <Typography sx={{ mt: 1, fontWeight: 700 }}>From $25/hr — inquire for workshops</Typography>}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
