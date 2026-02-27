"use client";

import React, { useState } from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  TextField,
  Snackbar,
  Alert,
  MenuItem,
  Paper,
  Link,
} from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import CheckIcon from "@mui/icons-material/Check";
import LinkIcon from "@mui/icons-material/Link";

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
