"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Snackbar,
  Alert,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Link,
} from "@mui/material";
import {
  Code as CodeIcon,
  LocationOn as LocationOnIcon,
  School as SchoolIcon,
  Person as PersonIcon,
  CheckCircle as CheckCircleIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  AccessTime as AccessTimeIcon,
  Star as StarIcon,
} from "@mui/icons-material";

const LOCATIONS = [
  {
    name: "Central Library – LAPL",
    address: "630 W 5th St, Los Angeles, CA 90071",
    days: "Tuesdays & Thursdays",
    time: "3:30 PM – 5:30 PM",
    ages: "Ages 8–18",
    description:
      "Our flagship downtown location. Hands-on projects covering Scratch, Python, and web development in LAPL's Digital Gymnasium.",
  },
  {
    name: "Boyle Heights Branch Library",
    address: "2808 Cesar E Chavez Ave, Los Angeles, CA 90033",
    days: "Mondays & Wednesdays",
    time: "4:00 PM – 6:00 PM",
    ages: "Ages 10–18",
    description:
      "Serving East LA students with game design, app building, and coding fundamentals. Bilingual instructors available.",
  },
  {
    name: "Mar Vista Branch Library",
    address: "12006 Venice Blvd, Los Angeles, CA 90066",
    days: "Saturdays",
    time: "10:00 AM – 12:00 PM",
    ages: "Ages 7–14",
    description:
      "Weekend explorers learn coding through creative storytelling, animation, and beginner robotics.",
  },
  {
    name: "Leimert Park Branch Library",
    address: "4312 43rd Pl, Los Angeles, CA 90008",
    days: "Tuesdays & Fridays",
    time: "3:30 PM – 5:30 PM",
    ages: "Ages 8–18",
    description:
      "Coding meets community. Students collaborate on local-impact projects while mastering JavaScript and HTML/CSS.",
  },
  {
    name: "Sherman Oaks Branch Library",
    address: "14245 Moorpark St, Sherman Oaks, CA 91423",
    days: "Mondays & Thursdays",
    time: "4:00 PM – 6:00 PM",
    ages: "Ages 8–16",
    description:
      "San Fernando Valley students dive into Python, web development, and introduction to AI concepts.",
  },
  {
    name: "East Los Angeles Library",
    address: "4837 3rd St, Los Angeles, CA 90022",
    days: "Wednesdays & Fridays",
    time: "3:30 PM – 5:30 PM",
    ages: "Ages 10–18",
    description:
      "Advanced tracks available for returning students. Topics include data science, APIs, and version control with Git.",
  },
];

const ONE_ON_ONE_BENEFITS = [
  "Curriculum tailored to your child's learning pace and interests",
  "Flexible scheduling — weekdays or weekends, in-person or virtual",
  "Regular progress reports and goal-setting sessions",
  "Preparation for competitions like Hackathons, Science Fairs, and FIRST Robotics",
  "College application portfolio support for high-school students",
  "Expert instructors with backgrounds in industry and education",
];

const NAV_LINKS = [
  { label: "Programs", href: "#programs" },
  { label: "Locations", href: "#locations" },
  { label: "One-on-One", href: "#one-on-one" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <>
      {/* Navigation */}
      <AppBar position="sticky" color="primary" elevation={2}>
        <Toolbar>
          <CodeIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            YourTechClass
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {NAV_LINKS.map((link) => (
              <Button key={link.label} color="inherit" href={link.href} component={Link}>
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1565c0 0%, #0d47a1 60%, #311b92 100%)",
          color: "white",
          py: { xs: 8, md: 14 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <CodeIcon sx={{ fontSize: 64, mb: 2, opacity: 0.9 }} />
          <Typography variant="h2" component="h1" fontWeight={800} gutterBottom>
            Learn to Code at Your Local Library
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, mb: 4, lineHeight: 1.6 }}>
            Free afterschool coding groups for youth across{" "}
            <strong>Los Angeles</strong>. Six library locations, experienced
            instructors, and a passion for empowering the next generation of
            tech creators.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              href="#locations"
              component={Link}
              sx={{
                bgcolor: "white",
                color: "primary.main",
                fontWeight: 700,
                px: 4,
                "&:hover": { bgcolor: "grey.100" },
              }}
            >
              Find a Location
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#contact"
              component={Link}
              sx={{ color: "white", borderColor: "white", px: 4, "&:hover": { borderColor: "grey.300" } }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Programs */}
      <Box id="programs" sx={{ py: 8, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" fontWeight={700} gutterBottom>
            Our Programs
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: "auto" }}
          >
            Whether joining an afterschool group or booking private sessions, every
            student gets hands-on experience writing real code from day one.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                icon: <SchoolIcon fontSize="large" color="primary" />,
                title: "Afterschool Groups",
                desc: "Small-group sessions held at LA libraries, open to all skill levels. Students work on projects together in a fun, collaborative environment.",
              },
              {
                icon: <PersonIcon fontSize="large" color="secondary" />,
                title: "One-on-One Lessons",
                desc: "Personalized instruction designed around your child's goals. Flexible scheduling and custom curricula for maximum progress.",
              },
              {
                icon: <StarIcon fontSize="large" sx={{ color: "warning.main" }} />,
                title: "Project Showcases",
                desc: "Students present their creations at end-of-semester showcases — building confidence and a real portfolio of work.",
              },
            ].map((item) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card elevation={2} sx={{ height: "100%", textAlign: "center", p: 2 }}>
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{item.icon}</Box>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Locations */}
      <Box id="locations" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" fontWeight={700} gutterBottom>
            Library Locations
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: "auto" }}
          >
            We partner with the Los Angeles Public Library system to bring free
            coding education to neighborhoods across LA County.
          </Typography>
          <Grid container spacing={3}>
            {LOCATIONS.map((loc) => (
              <Grid key={loc.name} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card elevation={3} sx={{ height: "100%" }}>
                  <CardHeader
                    avatar={<LocationOnIcon color="primary" />}
                    title={
                      <Typography variant="subtitle1" fontWeight={700}>
                        {loc.name}
                      </Typography>
                    }
                    subheader={loc.address}
                  />
                  <CardContent sx={{ pt: 0 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {loc.description}
                    </Typography>
                    <Divider sx={{ my: 1.5 }} />
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.5 }}>
                      <AccessTimeIcon fontSize="small" color="action" />
                      <Typography variant="body2">
                        {loc.days} · {loc.time}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <SchoolIcon fontSize="small" color="action" />
                      <Typography variant="body2">{loc.ages}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* One-on-One */}
      <Box id="one-on-one" sx={{ py: 8, bgcolor: "primary.main", color: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <PersonIcon sx={{ fontSize: 56, mb: 2, opacity: 0.9 }} />
              <Typography variant="h3" component="h2" fontWeight={700} gutterBottom>
                One-on-One Lessons
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                Some learners thrive with dedicated individual attention. Our private
                lessons pair your child with an expert instructor for a fully
                personalized coding journey — at their pace, on their schedule.
              </Typography>
              <Button
                variant="contained"
                size="large"
                href="#contact"
                component={Link}
                sx={{
                  mt: 3,
                  bgcolor: "white",
                  color: "primary.main",
                  fontWeight: 700,
                  "&:hover": { bgcolor: "grey.100" },
                }}
              >
                Book a Session
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 3, bgcolor: "rgba(255,255,255,0.1)", borderRadius: 2 }}>
                <List>
                  {ONE_ON_ONE_BENEFITS.map((benefit) => (
                    <ListItem key={benefit} disableGutters sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleIcon sx={{ color: "white" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={benefit}
                        primaryTypographyProps={{ sx: { color: "white" } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box id="contact" sx={{ py: 8, bgcolor: "grey.50" }}>
        <Container maxWidth="sm">
          <Typography variant="h3" component="h2" textAlign="center" fontWeight={700} gutterBottom>
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Interested in our programs or want to book a one-on-one lesson? Fill
            out the form below and we&apos;ll get back to you within one business day.
          </Typography>
          <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 }, borderRadius: 2 }}>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Phone Number (optional)"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={
                      errors.message ||
                      "Let us know which location or program you're interested in."
                    }
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5, fontWeight: 700 }}
                    startIcon={<EmailIcon />}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ bgcolor: "grey.900", color: "grey.400", py: 4, textAlign: "center" }}
      >
        <Container maxWidth="md">
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 1 }}>
            <CodeIcon sx={{ color: "primary.light" }} />
            <Typography variant="h6" color="white" fontWeight={700}>
              YourTechClass
            </Typography>
          </Box>
          <Typography variant="body2" gutterBottom>
            Bringing free coding education to Los Angeles libraries.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 1, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <EmailIcon fontSize="small" />
              <Link href="mailto:info@yourtechclass.org" color="inherit" underline="hover">
                info@yourtechclass.org
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">(213) 555-0100</Typography>
            </Box>
          </Box>
          <Typography variant="caption" sx={{ display: "block", mt: 2 }}>
            © {new Date().getFullYear()} YourTechClass. All rights reserved.
          </Typography>
        </Container>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={submitted}
        autoHideDuration={6000}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => setSubmitted(false)} variant="filled">
          Thank you! We&apos;ll be in touch soon.
        </Alert>
      </Snackbar>
    </>
  );
}
