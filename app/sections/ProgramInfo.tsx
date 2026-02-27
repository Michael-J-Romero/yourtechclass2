import React, { useState } from "react";
import { Box, Button, Card, CardContent, Chip, Container, Grid, Paper, Typography } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TwoCategory from "./variants/TwoCategory";
import GenericUnified from "./variants/GenericUnified";
import FilterableGrid from "./variants/FilterableGrid";
import WhoWhatWhenWhere from "./variants/WhoWhatWhenWhere";
import LevelPathway from "./variants/LevelPathway";
import FormatFirst from "./variants/FormatFirst";

type ProgramInfoProps = {
	colors: {
		cool: string;
		warm: string;
	};
};

const LEARNING_ITEMS = [
	{
		icon: <SportsEsportsIcon fontSize="large" color="primary" />,
		title: "Build Games & Projects",
		desc: "Students create interactive projects that make coding fun and practical.",
	},
	{
		icon: <PsychologyIcon fontSize="large" color="primary" />,
		title: "Learn Programming Logic",
		desc: "Kids and teens build strong problem-solving and computational thinking skills.",
	},
	{
		icon: <LightbulbIcon fontSize="large" color="primary" />,
		title: "Creative Confidence",
		desc: "Project-based learning helps students think independently and share their ideas.",
	},
];

const PROGRAM_OPTIONS = [
	{
		icon: <SportsEsportsIcon fontSize="large" color="primary" />,
		title: "Small Group Programs",
		desc: "Collaborative classes where students learn together in supportive environments.",
		format: "Group - 4-10 students",
		timeline: "4-8 week tracks",
		goals: [
			"Ship a portfolio-ready project",
			"Build collaboration and presentation skills",
		],
		outcomes: ["Portfolio project", "Improved problem solving", "Peer collaboration"],
		pathways: ["Intro to web", "Game jams", "App projects"],
	},
	{
		icon: <PsychologyIcon fontSize="large" color="primary" />,
		title: "One-on-One Coaching",
		desc: "Personalized lessons tailored to each student's pace, interests, and goals.",
		format: "Private 1-on-1",
		timeline: "Flexible weekly schedule",
		goals: ["Personalized roadmap", "Skill acceleration", "Mentored project work"],
		outcomes: ["Custom portfolio pieces", "Faster progress on core skills"],
		pathways: ["Foundations -> Intermediate -> Advanced", "Competition prep"],
	},
	{
		icon: <LightbulbIcon fontSize="large" color="primary" />,
		title: "Workshops",
		desc: "Focused sessions and special events for specific skills, themes, and projects.",
		format: "Single-day or short series",
		timeline: "1 day to 2 weeks",
		goals: ["Learn a focused skill", "Complete a small project"],
		outcomes: ["Completed mini project", "Hands-on experience"],
		pathways: ["Skill sampler -> deeper course", "Project showcases"],
	},
];

const TECH_STACK = [
	{ name: "HTML/CSS" },
	{ name: "JavaScript" },
	{ name: "Python" },
	{ name: "React" },
	{ name: "Unity" },
	{ name: "Scratch" },
];

const FORMAT_ITEMS = [
	{
		title: "Los Angeles In-Person",
		desc: "Based in LA with flexible locations. Travel radius available upon request.",
	},
	{
		title: "Online Options",
		desc: "Virtual lessons available for students who prefer remote sessions.",
	},
	{
		title: "Program Timelines",
		desc: "Most tracks run 4-8 weeks. Custom pacing available for 1-on-1 plans.",
	},
];

export default function ProgramInfo({ colors }: ProgramInfoProps) {
	const [variant, setVariant] = useState<
		"two" | "generic" | "filter" | "whoWhatWhen" | "levelPathway" | "formatFirst"
	>("whoWhatWhen");
	const showPricing = true;

	const data = {
		techStack: TECH_STACK,
		learningItems: LEARNING_ITEMS,
		programOptions: PROGRAM_OPTIONS,
		formatItems: FORMAT_ITEMS,
	};

	return (
		<>
			<Box id="programs" sx={{ py: 7, bgcolor: colors.cool }}>
				<Container maxWidth="lg">
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							justifyContent: "space-between",
							alignItems: { xs: "flex-start", md: "center" },
							gap: 2,
							mb: 3,
						}}
					>
						<Box sx={{ maxWidth: 760 }}>
							<Typography variant="h3" component="h2" fontWeight={700} gutterBottom>
								Programs, Learning & Format
							</Typography>
							<Typography textAlign="left" color="text.secondary">
								Flexible one-on-one and group lessons in web, app, and game development,
								tailored to each student's goals, pace, and experience level.
							</Typography>
						</Box>
					</Box>

					<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
						<Button onClick={() => setVariant("whoWhatWhen")} variant={variant === "whoWhatWhen" ? "contained" : "outlined"} size="small">Who/What/When</Button>
						<Button onClick={() => setVariant("levelPathway")} variant={variant === "levelPathway" ? "contained" : "outlined"} size="small">Level Pathway</Button>
						<Button onClick={() => setVariant("formatFirst")} variant={variant === "formatFirst" ? "contained" : "outlined"} size="small">Format First</Button>
						<Button onClick={() => setVariant("two")} variant={variant === "two" ? "contained" : "outlined"} size="small">Two-category</Button>
						<Button onClick={() => setVariant("generic")} variant={variant === "generic" ? "contained" : "outlined"} size="small">Generic</Button>
						<Button onClick={() => setVariant("filter")} variant={variant === "filter" ? "contained" : "outlined"} size="small">Filterable</Button>
					</Box>

						{variant === "whoWhatWhen" && <WhoWhatWhenWhere {...data} showPricing={showPricing} />}
						{variant === "levelPathway" && <LevelPathway showPricing={showPricing} />}
						{variant === "formatFirst" && <FormatFirst showPricing={showPricing} />}
					{variant === "two" && <TwoCategory {...data} showPricing={showPricing} />}
					{variant === "generic" && <GenericUnified {...data} showPricing={showPricing} />}
					{variant === "filter" && <FilterableGrid {...data} showPricing={showPricing} />}

					<Typography variant="overline" sx={{ display: "block", mt: 5, mb: 1, color: "text.secondary" }}>
						Format & Availability
					</Typography>
					<Grid container spacing={2}>
						{FORMAT_ITEMS.map((item) => (
							<Grid key={item.title} size={{ xs: 12, md: 4 }}>
								<Paper elevation={1} sx={{ p: 3, height: "100%", borderRadius: 2 }}>
									<Typography variant="h6" fontWeight={700} gutterBottom>
										{item.title}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{item.desc}
									</Typography>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</>
	);
}

