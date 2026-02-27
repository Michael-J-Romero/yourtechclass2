import React from "react";
import { Box, Card, CardContent, Chip, Container, Grid, Typography } from "@mui/material";

type ProgramInfoProps = {
	colors: {
		cool: string;
		warm: string;
	};
};

// One-on-one icon variants. Set ONE_ON_ONE_ICON_INDEX to 0/1/2 to pick.
const ONE_ON_ONE_ICON_INDEX = 1;
const ONE_ON_ONE_ICONS = [
	// 0: person + guidance arrow
	"M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.3 0-6 1.7-6 3.8V20h12v-3.2C14 14.7 11.3 13 8 13Zm7-10h6v2h-2.6l-3.9 3.9-1.4-1.4L17 3.8V3Z",
	// 1: person + chat bubble
	"M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.3 0-6 1.7-6 3.8V20h12v-3.2C14 14.7 11.3 13 8 13Zm7-10h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2l-2.5 2V10H15a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z",
	// 2: person + target/goal
	"M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.3 0-6 1.7-6 3.8V20h12v-3.2C14 14.7 11.3 13 8 13Zm10-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1 1.2h2V8h1.8v2H19v1.8h-2V10h-1.8V8H17V6.2Z",
];

const FORMAT_ITEMS = [
	{
		iconPath: ONE_ON_ONE_ICONS[ONE_ON_ONE_ICON_INDEX],
		title: "One-on-One Coaching",
		description:
			"Personalized sessions for junior high students, high schoolers, and adults, with a custom roadmap that adapts to each learner’s pace and long-term goals.",
		where: ["Los Angeles in-person", "Online / Zoom", "In client's home"],
		price: "$40/hour",
	},
	{
		iconPath: "M16 11c1.66 0 2.99-1.79 2.99-4S17.66 3 16 3s-3 1.79-3 4 1.34 4 3 4Zm-8 0c1.66 0 3-1.79 3-4S9.66 3 8 3 5 4.79 5 7s1.34 4 3 4Zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.98 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5Z",
		title: "Small Group Sessions",
		description:
			"Collaborative small-group lessons for beginner to intermediate learners, designed to build confidence, teamwork, and practical project experience together.",
		where: ["Los Angeles groups", "Nearby cities for larger cohorts"],
		price: "$25/hour per student",
	},
	{
		iconPath: "M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 15H5V10h14v9Zm-9-7h4v4h-4v-4Z",
		title: "Workshops & Programs",
		description:
			"Custom workshops for schools, community organizations, and seasonal programs with hands-on builds, structured pacing, and clear learning outcomes.",
		where: ["On-site by request", "LA and nearby cities"],
		price: "Custom quote",
	},
];

export default function ProgramInfo({ colors }: ProgramInfoProps) {
	return (
		<>
			<Box id="programs" sx={{ py: 7, bgcolor: colors.cool }}>
				<Container maxWidth="lg">
					<Typography variant="h6" textAlign="left" color="text.secondary" sx={{ maxWidth: 860, mb: 4 }}>
						Flexible one-on-one and group lessons in web, app, and game development,
						tailored to each student's goals, pace, and experience level.
					</Typography>

					<Grid container spacing={2}>
						{FORMAT_ITEMS.map((item) => (
							<Grid key={item.title} size={{ xs: 12, md: 4 }}>
								<Card elevation={2} sx={{ height: "100%", borderRadius: 2, border: 1, borderColor: "divider" }}>
									<CardContent sx={{ p: 2.5, display: "flex", flexDirection: "column", gap: 1 }}>
										<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5, color: "primary.main" }}>
											<Box component="svg" viewBox="0 0 24 24" sx={{ width: 20, height: 20, flexShrink: 0 }}>
												<path fill="currentColor" d={item.iconPath} />
											</Box>
											<Typography variant="h6" fontWeight={700} color="text.primary">
												{item.title}
											</Typography>
										</Box>
										<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
											{item.description}
										</Typography>

										<Typography variant="subtitle2" fontWeight={700}>
											Available In
										</Typography>
										<Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
											{item.where.map((location) => (
												<Chip key={location} label={location} size="small" color="primary" variant="outlined" />
											))}
										</Box>
										<Typography variant="body2" fontWeight={700} sx={{ mt: 1.5 }}>
											{item.price}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>

					<Typography color="text.secondary" sx={{ maxWidth: 920, mt: 4 }}>
						All ages and experience levels are welcome, including students with special learning
						needs and ambitious learners aiming for advanced coding outcomes.
					</Typography>
				</Container>
			</Box>
		</>
	);
}

