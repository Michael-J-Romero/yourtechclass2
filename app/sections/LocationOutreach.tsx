"use client";

import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";

type LocationOutreachProps = {
	colors: {
		warm: string;
		cool?: string;
	};
};

export default function LocationOutreach({ colors }: LocationOutreachProps) {
	return (
		<Box id="location-outreach" sx={{ py: 2, bgcolor: colors.warm }}>
			<Container maxWidth="lg">
				<Grid 
                
                container spacing={4} alignItems="center">
					<Grid size={{ xs: 12, md: 7 }}>
						<Box
							component="video"
							src="/vid.mp4"
							controls
							autoPlay
							muted
							loop
							playsInline
							sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
						>
							{/* Fallback content if video not supported */}
						</Box>
					</Grid>

					<Grid size={{ xs: 12, md: 5 }}>
						<Typography variant="h6" 
                        fontSize={{ xs: "1.25rem", sm: "2rem" }}
                        fontWeight={700} sx={{ mb: 1 }}>
							Schools & Community Programs
						</Typography>

						<Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
							Coding workshops and enrichment programs are also available for schools, learning centers, and community organizations interested in bringing creative technology education to students.
						</Typography>

						<Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
							If you have a location where we can host a summer tech program, charter program, or similar coding initiative in LA, please reach out.
						</Typography>

						<Button href="#contact" variant="contained" size="large" sx={{ mt: 1 }}>
							Inquire About These Programs
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
