import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type FaqSectionProps = {
  colors: {
    cool: string;
  };
};

const FAQ_ITEMS = [
  {
    question: "Who are lessons for?",
    answer:
      "Programs are available for K-12 students and adults, from complete beginners to advanced learners.",
  },
  {
    question: "What subjects can students focus on?",
    answer:
      "Students can focus on web development, app development, and game development with project-based learning in each track.",
  },
  {
    question: "Do you offer both group and private lessons?",
    answer:
      "Yes. You can choose one-on-one coaching or small group sessions based on your goals, schedule, and preferred learning style.",
  },
  {
    question: "Can I contact you about hosting a summer or charter program?",
    answer:
      "Yes. Please use the contact form for hosting inquiries if you have an LA location for summer tech, charter, or similar programs.",
  },
];

export default function FaqSection({ colors }: FaqSectionProps) {
  return (
    <Box id="faq" sx={{ py: 7, bgcolor: colors.cool }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" textAlign="center" fontWeight={700} gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Box sx={{ mt: 2 }}>
          {FAQ_ITEMS.map((item) => (
            <Accordion
              key={item.question}
              elevation={1}
              disableGutters
              sx={{ mb: 1.25, borderRadius: 1 }}
            >
              <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
                <Typography fontWeight={600}>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
