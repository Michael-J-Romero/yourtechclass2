import React, { useState } from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Chip,
	Container,
	Grid,
	Typography,
	useMediaQuery,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProgramCard from "./ProgramCard";
import { useTheme } from "@mui/material/styles";

type ProgramInfoProps = {
	colors: {
		cool: string;
		warm: string;
	};
};

function renderDescription(desc: string) {
	// Split paragraphs by double newline, preserve single newlines as <br />
	return desc.split('\n\n').map((para, i) => (
		<Typography key={i} variant="body2" color="text.secondary" sx={{ mb: 1 }}>
			{para.split('\n').map((line, j) => (
				<React.Fragment key={j}>
					{j > 0 && <br />}
					{line}
				</React.Fragment>
			))}
		</Typography>
	));
}

function getDescriptionParagraphs(desc: string) {
	return desc.split("\n\n");
}

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
			"Personalized sessions for junior high students, high schoolers, and adults. Tailored to each student’s pace and interests — ideal for beginners or students ready to go deeper.\n\nAll ages and experience levels are welcome, including students with special learning needs and ambitious learners aiming for advanced coding outcomes.",
		where: ["Los Angeles in-person", "Online / Zoom", "Client's home"],
		price: "$40/hour",
	},
	{
		iconPath: "M16 11c1.66 0 2.99-1.79 2.99-4S17.66 3 16 3s-3 1.79-3 4 1.34 4 3 4Zm-8 0c1.66 0 3-1.79 3-4S9.66 3 8 3 5 4.79 5 7s1.34 4 3 4Zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.98 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5Z",
		title: "Afterschool Groups",
		description:
			"Collaborative small-group sessions where students learn coding by building games and creative projects together. Designed to encourage problem-solving, confidence, and creativity.\n\nThese sessions are strategically planned to fit into after-school schedules at nearby community facilities.",
		where: ["Los Angeles Libraries","Community centers", "Nearby cities for larger cohorts"],
		price: "$25/hour per student",
	},
	{
		iconPath: "M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 15H5V10h14v9Zm-9-7h4v4h-4v-4Z",
		title: "Workshops & Programs",
		description:
			"Custom workshops for schools, community organizations, and seasonal programs with hands-on builds, structured pacing, and clear learning outcomes.\n\nI have an established curriculum and program structure ready for summer tech camps and charter classes for K-12, adaptable to your schedule and student needs.",
		where: ["On-site by request", "LA and nearby cities"],
		price: "Custom quote",
	},
];

export default function ProgramInfo({ colors }: ProgramInfoProps) {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);
	const [showAll, setShowAll] = useState(false);
	const [expandedPanels, setExpandedPanels] = useState<Record<number, boolean>>(() =>
		FORMAT_ITEMS.reduce((acc, _item, index) => {
			acc[index] = true;
			return acc;
		}, {} as Record<number, boolean>)
	);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const TOPICS = [
		"Game Development",
		"Web Development",
		"App Development",
		"Backend Applications",
		"Robotics Projects",
		"Data Structures",
		"Computational Thinking",
	];

	const TECHNOLOGIES = [
		"HTML/CSS",
		"JavaScript",
		"Python",
		"React",
		"Unity",
		"Scratch",
		"Roblox (Lua)",
		"Minecraft Modding (Java Edition - Java)",
	];

	const INTEREST_OPTIONS = [
		...TOPICS.map((label) => ({ label, color: "primary" as const })),
		...TECHNOLOGIES.map((label) => ({ label, color: "secondary" as const })),
	];

	return (
		<>
			<Box id="programs" sx={{ py: 7, bgcolor: colors.cool }}>
				<Container maxWidth="lg">
					<Typography variant="h6" textAlign="left" color="text.secondary" sx={{  mb: 4 }}>
						Flexible one-on-one and group lessons in web, app, and game development,
						tailored to each student's goals, pace, and experience level.
						All ages and experience levels are welcome, including students with special learning
						needs and ambitious learners aiming for advanced coding outcomes.
					</Typography>

					{isMobile ? (
						<Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
							{FORMAT_ITEMS.map((item, index) => {
								const isExpanded = !!expandedPanels[index];

								return (
									<Accordion
										key={item.title}
										expanded={isExpanded}
										onChange={() =>
											setExpandedPanels((prev) => ({ ...prev, [index]: !prev[index] }))
										}
										sx={{ borderRadius: 2, boxShadow: 2 }}
									>
										<AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
											<Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "primary.main" }}>
												<Box component="svg" viewBox="0 0 24 24" sx={{ width: 20, height: 20, flexShrink: 0 }}>
													<path fill="currentColor" d={item.iconPath} />
												</Box>
												<Typography variant="h6" fontWeight={700} color="text.primary">
													{item.title}
												</Typography>
											</Box>
										</AccordionSummary>
										<AccordionDetails>
											{renderDescription(item.description)}
											<Box sx={{ mt: 1 }}>
												<Typography component="span" variant="subtitle2" fontWeight={700} sx={{ mr: 0.5 }}>
													Available In:
												</Typography>
												{item.where.map((location, idx) => (
													<Typography key={location} component="span" variant="body2" color="text.secondary" sx={{ display: "inline" }}>
														{location}{idx < item.where.length - 1 ? ", " : ""}
													</Typography>
												))}
											</Box>
											<Box sx={{ mt: 1.5, display: "flex", justifyContent: "center" }}>
												<Typography sx={{ fontSize: "1.35rem", fontWeight: 300, textAlign: "center", color: "secondary.main" }}>
													{item.price}
												</Typography>
											</Box>
										</AccordionDetails>
									</Accordion>
								);
							})}
						</Box>
					) : (
						<Grid container spacing={2}>
							{FORMAT_ITEMS.map((item, index) => {
								const isExpanded = showAll || hoveredCard === index;

								return (
									<Grid
										key={item.title}
										size={{ xs: 12, md: 4 }}
										sx={{ position: "relative", overflow: "visible", zIndex: isExpanded ? 20 : 1 }}
										onMouseEnter={() => !showAll && setHoveredCard(index)}
										onMouseLeave={() => !showAll && setHoveredCard(null)}
									>
										<ProgramCard
											item={item}
											index={index}
											isExpanded={isExpanded}
											mode={showAll ? "inline" : "overlay"}
											onHoverEnter={() => !showAll && setHoveredCard(index)}
											onHoverLeave={() => !showAll && setHoveredCard(null)}
											onRequestGlobalExpand={() => setShowAll(true)}
											onRequestCollapseAll={() => setShowAll(false)}
										/>
									</Grid>
								);
							})}
						</Grid>
					)}

					{isMobile && (
						<>
							<Box sx={{ textAlign: 'center', mt: 3, mb: 1 }}>
								<Typography variant="subtitle1" component="div" sx={{ color: 'text.primary' }}>
									Below are some of the <Box component="span" sx={{ fontWeight: 300 }}>subjects</Box> and <Box component="span" sx={{  fontWeight: 300 }}>technologies</Box> you can learn:
								</Typography>
							</Box>
							<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1, mb: 2, justifyContent: 'center' }}>
								{INTEREST_OPTIONS.map(opt => (
									<Chip key={opt.label} label={opt.label} color={opt.color} size="small" variant="outlined" />
								))}
							</Box>
						</>
					)}

					{!isMobile && showAll && (
						<>
							<Box sx={{ textAlign: 'center', mt: 2, mb: 1 }}>
								<Typography variant="subtitle1" component="div" sx={{ color: 'text.primary' }}>
									Below are some of the <Box component="span" sx={{ fontWeight: 300 }}>subjects</Box> and <Box component="span" sx={{  fontWeight: 300 }}>technologies</Box> you can learn:
								</Typography>
							</Box>
							<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1, mb: 2, justifyContent: 'center' }}>
								{INTEREST_OPTIONS.map(opt => (
									<Chip key={opt.label} label={opt.label} color={opt.color} size="small" variant="outlined" />
								))}
							</Box>
						</>
					)}

					{!isMobile && (
						<Box sx={{ textAlign: 'center', mt: 4 }}>
							<Button variant="contained" size="large" onClick={() => setShowAll(!showAll)}>
								{showAll ? "Show Less" : "More Info"}
							</Button>
						</Box>
					)}
				</Container>
			</Box>
		</>
	);
}
