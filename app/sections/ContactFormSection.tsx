import React, { useState } from "react";
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

type ContactFormSectionProps = {
  colors: {
    cool: string;
  };
};

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

export default function ContactFormSection({ colors }: ContactFormSectionProps) {
  const [form, setForm] = useState({ name: "", email: "", studentAge: "", message: "" });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Parent name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.studentAge.trim()) newErrors.studentAge = "Student age is required.";
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
    setForm({ name: "", email: "", studentAge: "", message: "" });
  }

  return (
    <Box id="contact" sx={{ py: 8, bgcolor: colors.cool }}>
      <Container maxWidth="sm">
        <Typography variant="h3" component="h2" textAlign="center" fontWeight={700} gutterBottom>
          Request Program Information
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Tell me a little about yourself or your student and I’ll recommend the best starting option.
          You can also use this
          form to contact us about hosting partnerships and new program locations.
        </Typography>


        <Paper elevation={3} sx={{ p: { xs: 3, sm: 4 }, borderRadius: 2 }}>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <Typography variant="subtitle2" color="text.primary" fontWeight={700} sx={{ mb: 1.25 }}>
                  What subjects and technologies are you interested in?
                </Typography>
                <Autocomplete
                  multiple
                  disableCloseOnSelect
                  options={INTEREST_OPTIONS}
                  value={INTEREST_OPTIONS.filter((option) => selectedInterests.includes(option.label))}
                  getOptionLabel={(option) => option.label}
                  onChange={(_, value) => setSelectedInterests(value.map((option) => option.label))}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        {...getTagProps({ index })}
                        key={option.label}
                        label={option.label}
                        color={option.color}
                        size="small"
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select all that apply"
                      placeholder={selectedInterests.length === 0 ? "Choose subjects or technologies" : ""}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Parent Name"
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
                  label="Email"
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
                  label="Student Age"
                  name="studentAge"
                  value={form.studentAge}
                  onChange={handleChange}
                  error={!!errors.studentAge}
                  helperText={errors.studentAge}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Message (optional)"
                  name="message"
                  multiline
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
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
                  Send Inquiry
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
      <Snackbar
        open={submitted}
        autoHideDuration={5000}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => setSubmitted(false)} variant="filled">
          Thank you! We'll be in touch soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}
