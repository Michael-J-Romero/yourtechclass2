import React, { useState } from "react";
import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";

type Props = {
  programOptions: Array<{
    title: string;
    desc: string;
    pathways: string[];
  }>;
  showPricing: boolean;
};

export default function FilterableGrid({ programOptions, showPricing }: Props) {
  const [filter, setFilter] = useState<string | null>(null);

  const allTags = Array.from(new Set(programOptions.flatMap((p: any) => p.pathways)));
  const filtered = filter ? programOptions.filter((p: any) => p.pathways.includes(filter)) : programOptions;

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center", mb: 2 }}>
        <Chip label="All" onClick={() => setFilter(null)} clickable color={filter === null ? "primary" : "default"} variant={filter === null ? "filled" : "outlined"} />
        {allTags.map((t) => (
          <Chip key={t} label={t} onClick={() => setFilter(t)} clickable color={filter === t ? "primary" : "default"} variant={filter === t ? "filled" : "outlined"} />
        ))}
      </Box>

      <Grid container spacing={3}>
        {filtered.map((p: any) => (
          <Grid size={{ xs: 12, md: 4 }} key={p.title}>
            <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
              <CardContent sx={{ p: 2.5 }}>
                <Typography variant="h6" fontWeight={700}>{p.title}</Typography>
                <Typography color="text.secondary" sx={{ mb: 1 }}>{p.desc}</Typography>
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
