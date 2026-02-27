"use client";

import React, { useState } from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Snackbar,
  Alert,
  MenuItem,
  Paper,
  Link,
} from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CodeIcon from "@mui/icons-material/Code";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function HomePage() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    studentAge: "",
    experienceLevel: "",
    preferredProgram: "",
    neighborhood: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactScroll = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.parentName || !formData.email || !formData.studentAge) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields",
        severity: "error",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSnackbar({
        open: true,
        message: "Thank you! We'll be in touch within 24 hours.",
        severity: "success",
      });
      setIsSubmitting(false);
      setFormData({
        parentName: "",
        email: "",
        studentAge: "",
        experienceLevel: "",
        preferredProgram: "",
        neighborhood: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <Box sx={{ bgcolor: "#fafafa" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "70vh", md: "85vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(/img/1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 700,
              color: "white",
              mb: 3,
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Creative Coding Programs for Kids & Teens
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              color: "white",
              mb: 5,
              maxWidth: "800px",
              mx: "auto",
              textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            Students learn programming by building games and real interactive
            projects in small, supportive environments.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleContactScroll}
            sx={{
              px: 6,
              py: 2,
              fontSize: "1.2rem",
              fontWeight: 600,
              bgcolor: "#2196f3",
              color: "white",
              borderRadius: "30px",
              textTransform: "none",
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
              "&:hover": {
                bgcolor: "#1976d2",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 12px rgba(0,0,0,0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Request Program Info
          </Button>
        </Container>
      </Box>

      {/* VISUAL TRUST SECTION */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/img/2.jpg"
              alt="Classroom teaching"
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
            <Typography
              variant="body1"
              sx={{ mt: 2, textAlign: "center", color: "text.secondary" }}
            >
              Workshops, camps, and small-group programs
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/img/3.jpg"
              alt="Students learning"
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
            <Typography
              variant="body1"
              sx={{ mt: 2, textAlign: "center", color: "text.secondary" }}
            >
              Students ages 8–16
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/img/4.jpg"
              alt="Workshop environment"
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
            <Typography
              variant="body1"
              sx={{ mt: 2, textAlign: "center", color: "text.secondary" }}
            >
              Project-based learning environments
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/img/5.jpg"
              alt="Hands-on learning"
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
            <Typography
              variant="body1"
              sx={{ mt: 2, textAlign: "center", color: "text.secondary" }}
            >
              Building real projects students are proud of
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* WHAT STUDENTS LEARN */}
      <Box sx={{ bgcolor: "white", py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              mb: 6,
            }}
          >
            What Students Learn
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <SportsEsportsIcon sx={{ fontSize: 60 }} />,
                title: "Build Games & Interactive Projects",
                description:
                  "Create fun, engaging projects that bring ideas to life through code",
              },
              {
                icon: <PsychologyIcon sx={{ fontSize: 60 }} />,
                title: "Learn Programming Logic",
                description:
                  "Understand how to think computationally and solve problems systematically",
              },
              {
                icon: <EmojiObjectsIcon sx={{ fontSize: 60 }} />,
                title: "Develop Problem-Solving Skills",
                description:
                  "Build confidence tackling challenges and learning from mistakes",
              },
              {
                icon: <CodeIcon sx={{ fontSize: 60 }} />,
                title: "Create with Technology",
                description:
                  "Express creativity through interactive media and digital tools",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: 3,
                    boxShadow: 2,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box sx={{ color: "#2196f3", mb: 2 }}>{item.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 2 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PROGRAM TYPES */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 700,
            mb: 6,
          }}
        >
          Program Options
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              icon: <GroupsIcon sx={{ fontSize: 60 }} />,
              title: "Small Group Programs",
              description:
                "Collaborative learning environments where students work on projects together, share ideas, and build coding skills through peer interaction.",
            },
            {
              icon: <PersonIcon sx={{ fontSize: 60 }} />,
              title: "One-on-One Coaching",
              description:
                "Personalized pacing and focused guidance tailored to your student's interests, goals, and learning style.",
            },
            {
              icon: <EventIcon sx={{ fontSize: 60 }} />,
              title: "Workshops & Special Sessions",
              description:
                "Flexible short-term offerings including themed workshops, summer camps, and intensive project-based sessions.",
            },
          ].map((program, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  p: 4,
                  textAlign: "center",
                  boxShadow: 3,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 8,
                  },
                }}
              >
                <Box sx={{ color: "#2196f3", mb: 3 }}>{program.icon}</Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  {program.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {program.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* VIDEO SECTION */}
      <Box sx={{ bgcolor: "#1a1a1a", py: 10 }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              mb: 6,
              color: "white",
            }}
          >
            See Students Learning in Action
          </Typography>
          <Box
            sx={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              borderRadius: 2,
              boxShadow: 6,
            }}
          >
            <Box
              component="video"
              controls
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <source src="/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ABOUT INSTRUCTOR */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src="/img/6.jpg"
              alt="Instructor"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 4,
              }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 3,
              }}
            >
              About Your Instructor
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: "1.1rem" }}>
              With over 15 years of programming experience and extensive
              background in teaching workshops, camps, and K–12 programs, I
              focus on creating learning experiences that build both coding
              skills and creative confidence.
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {[
                "15+ years programming and software development experience",
                "Curriculum development for youth coding programs",
                "Taught workshops, camps, and ongoing student groups",
                "Focus on creativity, problem-solving, and building confidence",
                "Experience across ages 8–18 and all skill levels",
              ].map((item, index) => (
                <Box
                  component="li"
                  key={index}
                  sx={{
                    mb: 2,
                    fontSize: "1.05rem",
                    color: "text.secondary",
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* HOW PROGRAMS WORK */}
      <Box sx={{ bgcolor: "white", py: 10 }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              mb: 6,
            }}
          >
            How Programs Work
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                text: "Beginner friendly — no experience required",
              },
              {
                text: "Small group sizes for personalized attention",
              },
              {
                text: "Project-based learning approach",
              },
              {
                text: "Flexible meeting formats (libraries, community spaces, online)",
              },
            ].map((item, index) => (
              <Grid item xs={12} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "#f5f5f5",
                    borderLeft: "4px solid #2196f3",
                  }}
                >
                  <CheckCircleIcon
                    sx={{ fontSize: 40, color: "#2196f3", mr: 3 }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CREDIBILITY SECTION */}
      <Container maxWidth="md" sx={{ py: 6, textAlign: "center" }}>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.1rem", color: "text.secondary", mb: 2 }}
        >
          Programs have included classroom workshops, camps, and ongoing
          student groups throughout Los Angeles.
        </Typography>
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            color: "text.secondary",
            textDecoration: "none",
            fontSize: "0.95rem",
            "&:hover": { color: "#1976d2" },
          }}
        >
          <FacebookIcon sx={{ fontSize: 18, mr: 1 }} />
          View past workshops
        </Link>
      </Container>

      {/* CONTACT FORM */}
      <Box id="contact" sx={{ bgcolor: "#e3f2fd", py: 10 }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Request Program Information
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "1.1rem",
              color: "text.secondary",
              mb: 5,
            }}
          >
            Tell us about your student and we'll get back to you within 24
            hours
          </Typography>

          <Paper elevation={3} sx={{ p: { xs: 3, md: 5 } }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="Parent Name"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="Student Age"
                    name="studentAge"
                    value={formData.studentAge}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Experience Level (Optional)"
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">Select one</MenuItem>
                    <MenuItem value="none">No experience</MenuItem>
                    <MenuItem value="beginner">Beginner</MenuItem>
                    <MenuItem value="some">Some experience</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    select
                    label="Preferred Program (Optional)"
                    name="preferredProgram"
                    value={formData.preferredProgram}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">Select one</MenuItem>
                    <MenuItem value="group">Small Group</MenuItem>
                    <MenuItem value="oneOnOne">One-on-One</MenuItem>
                    <MenuItem value="workshop">Workshop</MenuItem>
                    <MenuItem value="unsure">Unsure</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Neighborhood or School (Optional)"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Message (Optional)"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{
                      py: 2,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      bgcolor: "#2196f3",
                      textTransform: "none",
                      "&:hover": { bgcolor: "#1976d2" },
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box sx={{ bgcolor: "#1a1a1a", color: "white", py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            © {new Date().getFullYear()} YourTechClass. Building creative
            confidence through code.
          </Typography>
        </Container>
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
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
          <TerminalIcon sx={{ mr: 1 }} />
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
          <TerminalIcon sx={{ fontSize: 64, mb: 2, opacity: 0.9 }} />
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
                        <TaskAltIcon sx={{ color: "white" }} />
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
                    startIcon={<MailIcon />}
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
            <TerminalIcon sx={{ color: "primary.light" }} />
            <Typography variant="h6" color="white" fontWeight={700}>
              YourTechClass
            </Typography>
          </Box>
          <Typography variant="body2" gutterBottom>
            Bringing free coding education to Los Angeles libraries.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 1, flexWrap: "wrap" }}>
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
