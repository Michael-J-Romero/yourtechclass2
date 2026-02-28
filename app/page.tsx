"use client";

import React, { useState, useContext } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Link,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
// NOTE: Verify icon names in node_modules/@mui/icons-material/esm/index.js before adding new imports.
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./providers/ThemeProvider";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import ProgramInfo from "./sections/ProgramInfo2";
import LocationOutreach from "./sections/LocationOutreach";
import FaqSection from "./sections/FaqSection";
import ContactFormSection from "./sections/ContactFormSection";
import InstructorProfile from "./sections/InstructorProfile";

const NAV_LINKS = [
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

type SectionDividerProps = {
  height?: number;
  curve?: number;
  tilt?: number;
  flip?: boolean;
  color?: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function SectionDivider({
  height = 120,
  curve = 0,
  tilt = 0,
  flip = false,
  color = "#f5f5f5",
}: SectionDividerProps) {
  const baseY = height * 0.45;
  const leftY = clamp(baseY + tilt / 2, 0, height);
  const rightY = clamp(baseY - tilt / 2, 0, height);
  const controlY = clamp(baseY + curve, 0, height);

  return (
    <Box
      sx={{
        lineHeight: 0,
        m: 0,
        p: 0,
        overflow: "hidden",
        transform: flip ? "rotate(180deg)" : "none",
      }}
    >
      <svg
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        width="100%"
        height={height}
        style={{ display: "block", verticalAlign: "top" }}
      >
        <path
          fill={color}
          d={`M0,${leftY} Q720,${controlY} 1440,${rightY} L1440,${height} L0,${height} Z`}
        />
      </svg>
    </Box>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const heroParallaxY = useTransform(scrollY, [0, 700], [0, 140]);
  const heroScale = useTransform(scrollY, [0, 700], [1, 1.08]);
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const sectionColors =
    theme.palette.mode === "dark"
      ? { cool: theme.palette.background.default, warm: theme.palette.background.paper }
      : { cool: "#e9f1ff", warm: "#fff1e3" };

  return (
    <>
      <AppBar position="sticky" color="primary" elevation={2}>
        <Toolbar>
          <TerminalIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700, color: 'secondary.main' }}>
            YourTechClass
          </Typography>
          {/* Dark mode toggle */}
          <IconButton
            color="inherit"
            onClick={() => colorMode.toggleColorMode()}
            sx={{ ml: 1, display: { xs: "none", md: "inline-flex" } }}
            aria-label="Toggle dark mode"
          >
            <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>
              {theme.palette.mode === "light" ? "Dark" : "Light"}
            </Typography>
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {NAV_LINKS.map((link) => (
              <Button key={link.label} color="inherit" href={link.href} component={Link}>
                {link.label}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => setMobileMenuOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <Typography sx={{ fontSize: "1.5rem" }}>☰</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, pb: 1 }}>
            <IconButton onClick={() => setMobileMenuOpen(false)}>
              <Typography sx={{ fontSize: "1.5rem" }}>✕</Typography>
            </IconButton>
          </Box>
          <List>
            {NAV_LINKS.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          color: "white",
          py: { xs: 12, md: 18 },
          textAlign: "center",
          minHeight: { xs: 520, md: 680 },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component={motion.div}
          sx={{
            position: "absolute",
            inset: "-8% 0",
            backgroundImage: "url(/img/1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "transform",
            zIndex: 0,
          }}
          style={prefersReducedMotion ? undefined : { y: heroParallaxY, scale: heroScale }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.55) 100%)",
            zIndex: 0,
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h2" component="h1" fontWeight={800} gutterBottom>
            Creative Coding Programs for Kids & Teens
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95, mb: 4, lineHeight: 1.6 }}>
            Students learn by building games and interactive projects in small,
            supportive environments across Los Angeles.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="#contact"
            component={Link}
            sx={{
              bgcolor: theme.palette.mode === "dark" ? "secondary.main" : "white",
              color: theme.palette.mode === "dark" ? "grey.900" : "primary.main",
              fontWeight: 700,
              px: 4,
            }}
          >
            Request Program Info
          </Button>
        </Container>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -1,
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          {/* <SectionDivider r={0} color={SECTION_COLORS.cool} /> */}
        </Box>
      </Box>

    

      <ProgramInfo colors={sectionColors} />
      <SectionDivider
        color={sectionColors.warm}
        height={96}
        tilt={9}
        curve={-136}
      />
      <InstructorProfile colors={sectionColors} />
          <LocationOutreach colors={sectionColors} />
      <SectionDivider
        flip
        color={sectionColors.warm}
        height={84}
        tilt={-18}
        curve={-90}
      />
      <ContactFormSection colors={sectionColors} />
      <FaqSection colors={sectionColors} />

      <Box component="footer" sx={{ bgcolor: "grey.900", color: "grey.400", py: 5, textAlign: "center" }}>
        <Container maxWidth="md">
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 1 }}>
            <TerminalIcon sx={{ color: "primary.light" }} />
            <Typography variant="h6" color="white" fontWeight={700}>
              YourTechClass
            </Typography>
          </Box>
          <Typography variant="body2" gutterBottom>
            Flexible coding programs for students and adults: web, app, and game development.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <MailIcon fontSize="small" />
              <Link href="mailto:info@yourtechclass.org" color="inherit" underline="hover">
                info@yourtechclass.org
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">(213) 555-0100</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography variant="body2">📍 Los Angeles, CA</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="hover"
              >
                Facebook
              </Link>
            </Box>
          </Box>
          <Typography variant="caption" sx={{ display: "block", mt: 2 }}>
            Available for private lessons, small groups, summer programs, and charter collaborations.
          </Typography>
        </Container>
      </Box>

      <Box
        sx={{
          position: "fixed",
          right: 20,
          bottom: 20,
          zIndex: 1200,
          display: { xs: "none", md: "block" },
        }}
      >
        <Button variant="contained" size="large" href="#contact" component={Link} sx={{ px: 3, fontWeight: 700 }}>
          Book a Free Call
        </Button>
      </Box>

      <Box
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          p: 1,
          zIndex: 1200,
          bgcolor: "rgba(0,0,0,0.72)",
          display: { xs: "block", md: "none" },
        }}
      >
        <Button variant="contained" fullWidth href="#contact" component={Link} sx={{ fontWeight: 700 }}>
          Book a Free Call
        </Button>
      </Box>

    </>
  );
}
