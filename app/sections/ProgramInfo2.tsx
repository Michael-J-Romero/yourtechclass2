import React from "react";
import { Box, Card, CardContent, Chip, Container, Grid, Typography } from "@mui/material";

type ProgramInfoProps = {
	colors: {
		cool: string;
		warm: string;
	};
};

const FORMAT_ITEMS = [
	{
		title: "One-on-One Coaching",
		description:
			"Personalized sessions for junior high students, high schoolers, and adults, with a custom roadmap that adapts to each learner’s pace and long-term goals.",
		where: ["Los Angeles in-person", "Online / Zoom", "In client's home"],
		price: "$40/hour",
	},
	{
		title: "Small Group Sessions",
		description:
			"Collaborative small-group lessons for beginner to intermediate learners, designed to build confidence, teamwork, and practical project experience together.",
		where: ["Los Angeles groups", "Nearby cities for larger cohorts"],
		price: "$25/hour per student",
	},
	{
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
								<Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
									<CardContent sx={{ p: 2.5 }}>
										<Typography variant="h6" fontWeight={700} gutterBottom>
											{item.title}
										</Typography>
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

