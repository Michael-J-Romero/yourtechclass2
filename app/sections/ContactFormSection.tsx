import React, { useEffect, useState } from "react";
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  MenuItem,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

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

const INQUIRY_TYPE_OPTIONS = [
  "One-on-One Coaching",
  "Programming Groups",
  "Afterschool Groups",
  "Hosting a Class or Program",
];

export default function ContactFormSection({ colors }: ContactFormSectionProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    studentAge: "",
    message: "",
    inquiryType: "",
  });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    if (!form.studentAge.trim()) newErrors.studentAge = "Student age is required.";
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          interests: selectedInterests,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Unable to send message.");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", studentAge: "", message: "", inquiryType: "" });
      setSelectedInterests([]);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to send message.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    const handleProgramSelection = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail) {
        setForm((prev) => ({ ...prev, inquiryType: customEvent.detail }));
      }
    };

    window.addEventListener("programInquirySelect", handleProgramSelection as EventListener);
    return () => {
      window.removeEventListener("programInquirySelect", handleProgramSelection as EventListener);
    };
  }, []);

  return (
    <Box id="contact" sx={{ py: 8, bgcolor: colors.cool }}>
      <Container maxWidth="sm">
        <Typography variant="h3" component="h2" textAlign="center" fontWeight={700} gutterBottom>
          Request Program Information
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Tell us a little about yourself or your student and we’ll recommend the best starting option.
          You can also use this
          form to inquire about hosting partnerships.
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
                  select
                  fullWidth
                  label="Program format"
                  name="inquiryType"
                  value={form.inquiryType}
                  onChange={handleChange}
                  helperText="Select a format if you already have one in mind."
                >
                  <MenuItem value="">
                    No preference
                  </MenuItem>
                  {INQUIRY_TYPE_OPTIONS.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Name"
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
                  label="Message"
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mt: 3 }}>
          <PhoneIcon fontSize="small" color="primary" />
          <Typography variant="h6" textAlign="center" fontWeight={700}>
            You can also call us at (909) 206-4546‬
          </Typography>
        </Box>
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
      <Snackbar
        open={!!submitError}
        autoHideDuration={6000}
        onClose={() => setSubmitError(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="error" onClose={() => setSubmitError(null)} variant="filled">
          {submitError}
        </Alert>
      </Snackbar>
    </Box>
  );
}
