# YourTechClass Website - Development Plan

## PROJECT OBJECTIVE

Create a single-page website that presents an established local coding educator offering flexible youth programs, designed to convert local parents into inquiries quickly while keeping program logistics adaptable.

**Key Design Principles:**
- Build trust immediately through visuals and experience signals
- Avoid implying fixed locations or institutional partnerships
- Support multiple program formats (groups, 1-on-1, workshops)
- Capture leads efficiently
- Feel established but personal

**Primary Conversion Action:** Parent submits inquiry form

---

## FACEBOOK PAGE STRATEGY

✅ **USE** Facebook content indirectly  
❌ **DO NOT** link prominently in navigation  
❌ **DO NOT** send users away early  
❌ **DO NOT** rely on Facebook as primary proof

**Implementation:**
- Add credibility reference in About section or near bottom
- Example text: "Programs and workshops have been run with students across Los Angeles. Photos and past events available upon request."
- Optional subtle link: "View past workshops" → Facebook page (opens in new tab)
- Place ONLY in About section or near bottom

---

## DEVELOPMENT PHASES

### PHASE 1: PROJECT SETUP & FOUNDATION
**Status:** To Review

#### Step 1.1: Review Current Tech Stack
- [ ] Verify Next.js configuration
- [ ] Review current dependencies
- [ ] Check Tailwind CSS setup
- [ ] Verify project structure

#### Step 1.2: Install Required Dependencies
- [ ] Install UI component library (recommendation: shadcn/ui or Material-UI for forms/cards)
- [ ] Install form handling library (react-hook-form)
- [ ] Install form validation (zod)
- [ ] Install email service integration (Resend, SendGrid, or similar)
- [ ] Install icon library (lucide-react or @mui/icons-material)

#### Step 1.3: Create Asset Folders
- [ ] Create images folder structure in `/public/img/`
  - `/public/img/hero/`
  - `/public/img/classroom/`
  - `/public/img/students/`
  - `/public/img/instructor/`
- [ ] Prepare placeholder images or source real images

#### Step 1.4: Set Up Environment Variables
- [ ] Create `.env.local` file
- [ ] Add email service API keys
- [ ] Add any other required environment variables

---

### PHASE 2: LAYOUT & STYLING FOUNDATION

#### Step 2.1: Update Global Styles
- [ ] Define color palette in `globals.css` or Tailwind config
  - Primary brand color
  - Secondary colors
  - Text colors (dark, light variants)
  - Background colors
- [ ] Define typography scale
- [ ] Add custom animations if needed
- [ ] Set up responsive breakpoints

#### Step 2.2: Create Main Layout Structure
- [ ] Update `app/layout.tsx` with proper metadata
  - Title: "YourTechClass - Creative Coding Programs for Kids & Teens"
  - Description for SEO
  - Open Graph tags
- [ ] Add font families (Google Fonts or local)
- [ ] Ensure smooth scroll behavior for anchor navigation

#### Step 2.3: Create Reusable Component Structure
- [ ] Create `/app/components/` folder
- [ ] Create subfolder structure:
  - `/app/components/sections/` (for page sections)
  - `/app/components/ui/` (for reusable UI elements)
  - `/app/components/forms/` (for form components)

---

### PHASE 3: SECTION-BY-SECTION IMPLEMENTATION

#### Step 3.1: SECTION 1 — HERO
**Components to create:**
- [ ] `/app/components/sections/Hero.tsx`

**Implementation checklist:**
- [ ] Full-width background image with teaching photo
- [ ] Dark overlay (rgba or gradient) for readability
- [ ] Centered content container
- [ ] Headline: "Creative Coding Programs for Kids & Teens"
- [ ] Subheadline: "Students learn programming by building games and real interactive projects in small, supportive environments."
- [ ] Primary CTA button: "Request Program Info"
- [ ] Button scroll anchor to contact form section
- [ ] Responsive design (mobile-first)
- [ ] Typography: large, bold, readable

**Technical notes:**
- Use Next.js Image component for optimization
- Implement smooth scroll with `scroll-behavior: smooth` or library
- Add proper z-index layering for overlay and text

---

#### Step 3.2: SECTION 2 — VISUAL TRUST / EXPERIENCE
**Components to create:**
- [ ] `/app/components/sections/VisualTrust.tsx`

**Implementation checklist:**
- [ ] Grid layout (3-4 images, responsive)
- [ ] Images:
  - Large classroom teaching photo
  - Younger students on computers
  - Workshop environment
  - (Optional 4th image)
- [ ] Captions below each image:
  - "Workshops, camps, and small-group programs"
  - "Students ages 8–16"
  - "Project-based learning environments"
- [ ] Image optimization with Next.js Image
- [ ] Grid responsive: 2x2 on tablet, single column on mobile
- [ ] Subtle hover effects (optional)
- [ ] Section padding and spacing
- [ ] Background color variation (light gray or white)

**Technical notes:**
- Use CSS Grid or Tailwind grid utilities
- Ensure images have proper aspect ratios
- Add loading="lazy" for performance

---

#### Step 3.3: SECTION 3 — WHAT STUDENTS LEARN
**Components to create:**
- [ ] `/app/components/sections/WhatStudentsLearn.tsx`
- [ ] `/app/components/ui/FeatureCard.tsx` (reusable)

**Implementation checklist:**
- [ ] Section heading: "What Students Learn"
- [ ] 4-column layout (responsive: 2x2 on tablet, 1 column mobile)
- [ ] Four cards:
  1. **Build Games & Interactive Projects**
     - Icon (game controller or similar)
     - Short description
  2. **Learn Programming Logic**
     - Icon (brain or circuit)
     - Short description
  3. **Develop Problem-Solving Skills**
     - Icon (puzzle piece)
     - Short description
  4. **Create with Technology**
     - Icon (code or tools)
     - Short description
- [ ] Card styling: clean, modern, with icons
- [ ] No mention of specific languages/tools
- [ ] Consistent spacing and alignment

**Technical notes:**
- Use icon library (Lucide React or MUI Icons)
- Keep descriptions concise (2-3 lines max)
- Cards should have subtle shadow or border

---

#### Step 3.4: SECTION 4 — PROGRAM TYPES
**Components to create:**
- [ ] `/app/components/sections/ProgramTypes.tsx`
- [ ] `/app/components/ui/ProgramCard.tsx` (reusable)

**Implementation checklist:**
- [ ] Section heading: "Program Options"
- [ ] Three cards in row (responsive: stack on mobile)
- [ ] Card 1: **Small Group Programs**
  - Short description emphasizing collaboration and creativity
  - Icon or illustration
- [ ] Card 2: **One-on-One Coaching**
  - Description: Personalized pacing and focused guidance
  - Icon or illustration
- [ ] Card 3: **Workshops & Special Sessions**
  - Description: Flexible short-term offerings
  - Icon or illustration
- [ ] NO location commitments mentioned
- [ ] Consistent card styling
- [ ] Optional: "Learn More" micro-interaction

**Technical notes:**
- Cards should be visually distinct from Section 3
- Use contrasting background (if Section 3 is white, use light gray)
- Keep descriptions short (3-4 lines max)

---

#### Step 3.5: SECTION 5 — VIDEO SECTION
**Components to create:**
- [ ] `/app/components/sections/VideoSection.tsx`

**Implementation checklist:**
- [ ] Section heading: "See Students Learning in Action"
- [ ] Video embed container
- [ ] YouTube/Vimeo embed (responsive 16:9 ratio)
- [ ] Large play button overlay (if not using autoplay)
- [ ] Optional: Autoplay muted with controls
- [ ] Centered layout
- [ ] Proper iframe attributes (allow, title, etc.)
- [ ] Mobile responsive sizing

**Technical notes:**
- Use aspect-ratio CSS or padding-bottom trick for responsive
- Use lite-youtube-embed for performance (optional)
- Ensure accessibility with proper titles
- Test on mobile devices

---

#### Step 3.6: SECTION 6 — ABOUT INSTRUCTOR
**Components to create:**
- [ ] `/app/components/sections/AboutInstructor.tsx`

**Implementation checklist:**
- [ ] Two-column layout (image left, text right)
- [ ] Left side: Portrait or teaching image
  - Professional photo
  - Rounded corners or subtle styling
- [ ] Right side: Text content
  - Section heading: "About Your Instructor" or "Meet [Name]"
  - Short paragraph:
    - 15+ years programming experience
    - Teaching workshops, camps, K–12 programs
    - Curriculum development experience
    - Focus on creativity and confidence
  - Bullet highlights format preferred
- [ ] Responsive: Stack vertically on mobile (image on top)
- [ ] Professional but warm tone

**Technical notes:**
- Use Next.js Image for optimization
- Text should be scannable (bullets work well)
- Keep paragraph concise (4-6 lines max)

---

#### Step 3.7: SECTION 7 — HOW PROGRAMS WORK
**Components to create:**
- [ ] `/app/components/sections/HowItWorks.tsx`

**Implementation checklist:**
- [ ] Section heading: "How Programs Work"
- [ ] Bullet list or icon list layout
- [ ] Content points:
  - ✅ Beginner friendly — no experience required
  - ✅ Small group sizes for personalized attention
  - ✅ Project-based learning approach
  - ✅ Flexible meeting formats (libraries, community spaces, online)
- [ ] Clean, scannable layout
- [ ] Icons next to each point (checkmarks or relevant icons)
- [ ] Mention libraries casually (not as primary location)
- [ ] Light background or alternating section color

**Technical notes:**
- Keep points concise
- Use visual hierarchy (larger text for points, smaller for details)
- Mobile-friendly spacing

---

#### Step 3.8: SECTION 8 — CREDIBILITY SIGNAL
**Components to create:**
- [ ] `/app/components/sections/CredibilitySection.tsx`

**Implementation checklist:**
- [ ] Small, subtle section
- [ ] Text example:
  - "Programs have included classroom workshops, camps, and ongoing student groups throughout Los Angeles."
- [ ] Optional small Facebook link:
  - Text: "View past workshops" or "See past events"
  - Opens in new tab (target="_blank" rel="noopener noreferrer")
  - Subtle styling (not prominent)
  - Icon (external link or Facebook icon)
- [ ] Minimal design (smaller text, centered or left-aligned)
- [ ] Place near bottom of page

**Technical notes:**
- Keep this section understated
- Don't make Facebook link too prominent
- Use muted colors for link

---

#### Step 3.9: SECTION 9 — CONTACT / LEAD FORM
**Components to create:**
- [ ] `/app/components/sections/ContactForm.tsx`
- [ ] `/app/components/forms/InquiryForm.tsx`
- [ ] `/app/api/submit-inquiry/route.ts` (API route)

**Implementation checklist:**

**Form UI:**
- [ ] Section heading: "Request Program Information"
- [ ] Subheading: "Tell us about your student and we'll get back to you within 24 hours"
- [ ] Form fields:
  - **Parent Name** (required, text input)
  - **Email** (required, email input with validation)
  - **Student Age** (required, number or select dropdown)
  - **Experience Level** (optional, radio or select: None / Beginner / Some experience)
  - **Preferred Program** (optional, select: Small Group / One-on-One / Workshop / Unsure)
  - **Neighborhood or School** (optional, text input)
  - **Message** (optional, textarea)
- [ ] Submit button: "Send Inquiry" or "Request Information"
- [ ] Loading state during submission
- [ ] Success message on submission
- [ ] Error handling and validation messages
- [ ] Mobile-responsive layout (single column)

**Form Validation:**
- [ ] Client-side validation with Zod schema
- [ ] Real-time field validation
- [ ] Clear error messages
- [ ] Prevent duplicate submissions

**Backend API:**
- [ ] Create Next.js API route: `/app/api/submit-inquiry/route.ts`
- [ ] Validate form data server-side
- [ ] Integrate email service (Resend, SendGrid, etc.)
- [ ] Send inquiry to instructor email
- [ ] Send auto-response to parent email
- [ ] Return success/error response
- [ ] Add rate limiting (optional but recommended)

**Email Templates:**
- [ ] Admin notification email (to instructor)
  - Include all form data
  - Subject: "New Program Inquiry from [Parent Name]"
- [ ] Auto-response email (to parent)
  - Thank you message
  - Set expectations (response within 24 hours)
  - Include brief program overview
  - Contact information

**Success State:**
- [ ] Show success message: "Thank you! We'll be in touch within 24 hours."
- [ ] Hide form after submission
- [ ] Option to submit another inquiry (reset form)

**Technical notes:**
- Use react-hook-form for form state management
- Use Zod for schema validation
- Store submissions in database (optional for MVP)
- Test email delivery thoroughly
- Add honeypot field for spam prevention (optional)
- Consider GDPR/privacy compliance if applicable

---

### PHASE 4: NAVIGATION & UX POLISH

#### Step 4.1: Add Navigation (Optional Sticky Header)
- [ ] Decide on navigation approach:
  - Option A: No fixed nav (pure scroll page)
  - Option B: Minimal sticky nav with smooth scroll links
- [ ] If adding nav:
  - Logo/brand name on left
  - Links: About | Programs | Contact (scroll anchors)
  - Mobile hamburger menu
  - Transparent header with scroll effect

#### Step 4.2: Add Scroll Animations
- [ ] Install animation library (framer-motion or similar)
- [ ] Add fade-in animations for sections
- [ ] Add smooth scroll behavior
- [ ] Test performance on mobile

#### Step 4.3: Add Footer
- [ ] Simple footer with:
  - YourTechClass branding
  - Copyright notice
  - Optional: Email link
  - Optional: Facebook link (subtle)
  - Optional: Privacy policy link

---

### PHASE 5: CONTENT & MEDIA INTEGRATION

#### Step 5.1: Replace Placeholder Content
- [ ] Source or create hero image (teaching photo)
- [ ] Source 3-4 classroom/student photos
- [ ] Source instructor photo
- [ ] Get promotional video link/file
- [ ] Write final copy for all sections
- [ ] Ensure all content is approved

#### Step 5.2: Image Optimization
- [ ] Optimize all images (compress, proper format)
- [ ] Add alt text for accessibility
- [ ] Ensure responsive images load correctly
- [ ] Test on various devices

---

### PHASE 6: TESTING & OPTIMIZATION

#### Step 6.1: Responsive Design Testing
- [ ] Test on mobile (iOS Safari, Android Chrome)
- [ ] Test on tablet
- [ ] Test on desktop (various browsers)
- [ ] Check all breakpoints
- [ ] Verify touch targets are large enough

#### Step 6.2: Form Testing
- [ ] Test all validation rules
- [ ] Test successful submission
- [ ] Test error handling
- [ ] Verify emails are sent correctly
- [ ] Test auto-response email
- [ ] Test on different email clients

#### Step 6.3: Performance Optimization
- [ ] Run Lighthouse audit
- [ ] Optimize images further if needed
- [ ] Check page load speed
- [ ] Minimize JavaScript bundle size
- [ ] Add meta tags for SEO

#### Step 6.4: Browser Compatibility
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge
- [ ] Fix any browser-specific issues

#### Step 6.5: Accessibility Testing
- [ ] Check keyboard navigation
- [ ] Test with screen reader
- [ ] Verify color contrast ratios
- [ ] Add ARIA labels where needed
- [ ] Ensure form labels are proper

---

### PHASE 7: DEPLOYMENT PREPARATION

#### Step 7.1: Environment Setup
- [ ] Set up production environment variables
- [ ] Configure email service for production
- [ ] Set up domain (if not already done)
- [ ] Configure DNS settings

#### Step 7.2: Final Checks
- [ ] Remove console.logs
- [ ] Remove test/debug code
- [ ] Update README with deployment info
- [ ] Create production build and test locally
- [ ] Review all content one final time

#### Step 7.3: Deploy
- [ ] Deploy to Vercel/Netlify/hosting platform
- [ ] Verify production build works correctly
- [ ] Test form submission on production
- [ ] Test all links and navigation
- [ ] Monitor for errors

#### Step 7.4: Post-Launch
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Set up form submission tracking
- [ ] Create system for monitoring inquiries
- [ ] Prepare response templates for inquiries

---

## TECHNICAL STACK SUMMARY

**Framework:** Next.js 14+ (App Router)  
**Styling:** Tailwind CSS  
**Language:** TypeScript  
**Form Handling:** react-hook-form + Zod validation  
**Email Service:** Resend / SendGrid / Nodemailer  
**Deployment:** Vercel (recommended) or similar  
**Icons:** Lucide React or MUI Icons  

---

## KEY DESIGN PRINCIPLES TO REMEMBER

1. **Trust over Tech:** Focus on experience signals, not technical jargon
2. **Flexibility:** Avoid location commitments, emphasize adaptable formats
3. **Conversion Focus:** Every section should guide toward the contact form
4. **Visual Priority:** Use images to establish credibility quickly
5. **Mobile-First:** Most parents will view on phones
6. **Speed:** Fast loading is critical for conversion
7. **Clarity:** Clear, scannable content with strong CTAs

---

## PRIORITY ORDER (RECOMMENDED)

1. **Phase 1:** Setup (Steps 1.1-1.4)
2. **Phase 2:** Layout Foundation (Steps 2.1-2.3)
3. **Hero Section** (Step 3.1) - Most important first impression
4. **Contact Form** (Step 3.9) - Primary conversion mechanism
5. **Program Types** (Step 3.4) - Core offering explanation
6. **About Instructor** (Step 3.6) - Trust building
7. **What Students Learn** (Step 3.3) - Value proposition
8. **Visual Trust** (Step 3.2) - Social proof
9. **How It Works** (Step 3.7) - Logistics clarity
10. **Video Section** (Step 3.5) - Engagement
11. **Credibility Section** (Step 3.8) - Final trust signal
12. **Phase 4-7:** Polish, content, testing, deployment

---

## NEXT STEPS

Once this plan is approved, we'll proceed with:
1. Review current tech stack and dependencies
2. Begin Phase 1: Project Setup
3. Work through sections systematically
4. Test and iterate
5. Deploy

Let's build something great! 🚀
