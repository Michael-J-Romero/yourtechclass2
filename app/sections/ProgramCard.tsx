import React from "react";
import { Box, Typography, Button, Collapse } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type Item = {
	iconPath: string;
	title: string;
	description: string;
	where: string[];
	price: string;
};

function renderDescription(desc: string) {
	return desc.split("\n\n").map((para, i) => (
		<Typography key={i} variant="body2" color="text.secondary" sx={{ mb: 1 }}>
			{para.split("\n").map((line, j) => (
				<React.Fragment key={j}>
					{j > 0 && <br />}
					{line}
				</React.Fragment>
			))}
		</Typography>
	));
}

export default function ProgramCard({
	item,
	index,
	isExpanded,
	mode,
	onHoverEnter,
	onHoverLeave,
	onRequestGlobalExpand,
	onRequestCollapseAll,
}: {
	item: Item;
	index: number;
	isExpanded: boolean;
	mode: "overlay" | "inline";
	onHoverEnter?: () => void;
	onHoverLeave?: () => void;
	onRequestGlobalExpand?: () => void;
	onRequestCollapseAll?: () => void;
}) {
	const descriptionParagraphs = item.description.split("\n\n");
	const firstParagraph = descriptionParagraphs[0] ?? "";


	return (
			<Box
				sx={{
					position: "relative",
					border: 1,
					borderColor: "divider",
					bgcolor: "background.paper",
					boxShadow: 2,
					overflow: "visible",
					borderTopLeftRadius: 8,
					borderTopRightRadius: 8,
					borderBottomLeftRadius: isExpanded && mode === "overlay" ? 0 : 8,
					borderBottomRightRadius: isExpanded && mode === "overlay" ? 0 : 8,
				}}
			>
			{/* Collapsed header + first paragraph */}
			<Box sx={{ p: 2.5 }} onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>
				<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1, color: "primary.main" }}>
					<Box component="svg" viewBox="0 0 24 24" sx={{ width: 20, height: 20, flexShrink: 0 }}>
						<path fill="currentColor" d={item.iconPath} />
					</Box>
					<Typography variant="h6" fontWeight={700} color="text.primary">
						{item.title}
					</Typography>
				</Box>
				<Typography variant="body2" color="text.secondary">
					{firstParagraph}
				</Typography>
			</Box>

			{mode === "overlay" && (
				<>
					{/* Expanded overlay (no reserved button space) */}
					<Box sx={{ position: "absolute", left: -1, right: -1, top: "100%", marginTop: 0, zIndex: 30, pointerEvents: isExpanded ? "auto" : "none" }}>
						<Collapse in={isExpanded} timeout={400} easing={{ enter: "cubic-bezier(0.4, 0, 0.2, 1)", exit: "cubic-bezier(0.4, 0, 0.2, 1)" }} unmountOnExit>
							<Box sx={{ border: 1, borderTop: 0, borderColor: "divider", bgcolor: "background.paper", borderBottomLeftRadius: 8, borderBottomRightRadius: 8, boxShadow: 2, px: 2.5, pt: 0.5, pb: 2.5 }} onClick={() => onRequestCollapseAll && onRequestCollapseAll()}>
								{descriptionParagraphs.length > 1 && <Box sx={{ mb: 1 }}>{renderDescription(descriptionParagraphs.slice(1).join("\n\n"))}</Box>}
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
									<Typography sx={{ fontSize: "1.35rem", fontWeight: 300, textAlign: "center", color: "secondary.main" }}>{item.price}</Typography>
								</Box>
							</Box>
						</Collapse>
					</Box>
				</>
			)}

			{mode === "inline" && (
				<Collapse in={isExpanded} timeout={400} easing={{ enter: "cubic-bezier(0.4, 0, 0.2, 1)", exit: "cubic-bezier(0.4, 0, 0.2, 1)" }} unmountOnExit>
					<Box sx={{ borderTop: 0, px: 2.5, pt: 0.5, pb: 2.5 }}>
						{descriptionParagraphs.length > 1 && <Box sx={{ mb: 1 }}>{renderDescription(descriptionParagraphs.slice(1).join("\n\n"))}</Box>}

						<Box sx={{ mt: 1 }}>
							<Typography component="span" variant="subtitle2" fontWeight={700} sx={{ mr: 0.5 }}>Available In:</Typography>
							{item.where.map((location, idx) => (
								<Typography key={location} component="span" variant="body2" color="text.secondary" sx={{ display: "inline" }}>{location}{idx < item.where.length - 1 ? ", " : ""}</Typography>
							))}
						</Box>
						<Box sx={{ mt: 1.5, display: "flex", justifyContent: "center" }}>
							<Typography sx={{ fontSize: "1.35rem", fontWeight: 300, textAlign: "center", color: "secondary.main" }}>{item.price}</Typography>
						</Box>
					</Box>
				</Collapse>
			)}
		</Box>
	);
}
