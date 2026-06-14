# Supportology Landing Page — Implementation Kickstart

**Project Scope:** Frontend prototype only. Premium, minimal landing page for paperwork support service.

**Status:** Planning Phase — Awaiting BUILD approval

---

## 1. CORE OBJECTIVE & MESSAGING

### Brand Positioning
Supportology helps people overwhelmed by paperwork, forms, correspondence, complaints, appeals, and evidence.

The website should feel:
- Calm, trustworthy, human, organised, reassuring, professional, accessible

NOT:
- Corporate, luxury, flashy, overdesigned, generic SaaS, crypto-style

**Target User Profile:** Stressed, overwhelmed, confused, unsure where to start. Often unable to access legal aid. Needs plain English, no jargon.

### Hero Headlines
- **Primary:** "Overwhelmed by paperwork?"
- **Subheadline:** "Turning paperwork problems into clear next steps."

### Primary CTA
- **Button Text:** "Get Help With My Paperwork"
- **Alternative:** "Help Me With My Documents"
- **Tone:** Plain English, accessible, reassuring (not corporate or legalistic)

---

---

## 2. ARCHITECTURE OVERVIEW

### Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 with design tokens
- **Fonts:** Single font (Geist or Inter) across all components
- **Icons:** lucide-react (lightweight, accessible)
- **Animations:** CSS transitions + Tailwind utilities
- **Modal:** Custom React component with Radix UI patterns
- **Dark Mode:** next-themes with system preference detection
- **SEO:** Next.js metadata + semantic HTML

### Design System
- **Color Palette:** 3–5 total colors (light mode primary + accents, dark mode variants)
- **Typography:** Single font family, 2–3 weights
- **Spacing:** Tailwind scale (consistent gaps, padding, margins)
- **Shadows:** Minimal, used for depth only
- **Border Radius:** Consistent throughout (likely 8–12px)
- **Glass Effects:** Applied only to navbar, hero accent card, optional CTA section
- **Animations:** Subtle, premium, non-distracting

---

## 3. PAGE STRUCTURE

### Full-Width Single-Page Layout
```
├── Sticky Navbar (with dark mode toggle + CTA button)
├── Hero Section (intro + accent card + visual)
├── How It Works (3-step process)
├── Services Overview (3 service cards)
├── How We Have Helped (4 anonymised real-life examples)
├── FAQ Section (5–7 questions)
├── Primary CTA Section (reinforces "Get Help With My Paperwork")
├── Footer (branding + trust + links)
└── Modal (hidden until CTA triggered)
```

### Section Priority (Conversion-Focused)
1. Hero → Establish trust + value proposition ("Overwhelmed by paperwork?" + "Turning paperwork problems into clear next steps")
2. How It Works → Reduce friction/anxiety
3. Services → Show what's covered
4. How We Have Helped → Build confidence (use four anonymised real-life examples)
5. FAQ → Address objections (cost, confidentiality, legal vs. support)
6. CTA Section → Final conversion push
7. Footer → Trust signals + legal compliance

---

## 4. COMPONENT STRUCTURE

### Target: ~600 lines maximum per file

**Root Layout & Pages:**
```
app/
├── layout.tsx (root with navbar, footer, providers)
├── page.tsx (main page orchestration)
└── globals.css (design tokens + Tailwind v4 theme)
```

**Components:**
```
components/
├── Navbar.tsx (sticky, dark toggle, CTA button)
├── Hero.tsx (headline + accent card + visual)
├── HowItWorks.tsx (3-step timeline or cards)
├── Services.tsx (3-column service overview)
├── Outcomes.tsx (before/after examples)
├── FAQ.tsx (accordion or card-based)
├── CTASection.tsx (reinforcement + button trigger)
├── Footer.tsx (branding + links + disclaimer)
├── EnquiryModal.tsx (form modal with submission handling)
├── ThemeProvider.tsx (next-themes wrapper)
└── ui/ (if using shadcn)
    ├── button.tsx
    ├── input.tsx
    ├── textarea.tsx
    ├── select.tsx
    ├── dialog.tsx (for modal foundation)
    └── [other reusables as needed]
```

### Component Responsibilities

| Component | Lines | Purpose |
|-----------|-------|---------|
| Navbar | 80–120 | Navigation, logo, dark toggle, CTA |
| Hero | 120–180 | Headline, value prop, accent visual |
| HowItWorks | 100–150 | Process steps, reassurance |
| Services | 100–140 | Service cards, icons |
| Outcomes | 160–200 | Four anonymised real-life examples of support provided |
| FAQ | 150–200 | Accordion or card-based Q&A |
| CTASection | 80–120 | Reinforcement + button |
| Footer | 100–150 | Branding, links, disclaimer |
| EnquiryModal | 180–250 | Form, validation, submission |
| layout.tsx | 100–150 | Root structure, providers |

---

## 5. THEME STRATEGY

### Design Tokens (CSS Variables in globals.css)

**Light Mode (Default)**
```css
--bg-background: #ffffff
--bg-secondary: #f9f9f9
--bg-tertiary: #f0f0f0
--text-foreground: #1a1a1a
--text-muted: #6b7280
--border-color: #e5e7eb
--accent-primary: [TBD - single accent colour]
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
--shadow-md: 0 4px 6px rgba(0,0,0,0.1)
--glass-bg: rgba(255,255,255,0.7)
--glass-backdrop: blur(8px)
```

**Dark Mode**
```css
--bg-background: #0f0f0f
--bg-secondary: #1a1a1a
--bg-tertiary: #2d2d2d
--text-foreground: #ffffff
--text-muted: #a0a0a0
--border-color: #333333
--accent-primary: [same as light]
--shadow-sm: 0 1px 2px rgba(0,0,0,0.3)
--shadow-md: 0 4px 6px rgba(0,0,0,0.5)
--glass-bg: rgba(15,15,15,0.6)
--glass-backdrop: blur(8px)
```

### Dark Mode
- **Default:** Light mode (primary experience)
- **Toggle:** Dark mode toggle in navbar
- **Implementation:** next-themes + CSS variables for both themes
- **Consistency:** All components, cards, forms, modals, CTAs support both themes

### Dynamic Background
Premium paper-inspired depth with subtle layered effect.

**Preferred Approach:**
- Subtle layered paper-inspired depth
- Abstract document structure
- Soft architectural grid elements
- Gentle light movement

**Avoid:**
- Floating blobs
- Particle effects
- Crypto/SaaS visual styles
- Excessive gradients
- Flying documents

**Effect Goal:** Create sense of organisation, clarity, calm. User should notice professionalism, not the animation. Background supports content, does not compete.

### Glass/Frosted Effects
Use sparingly, only on:
- Navbar background
- Hero accent card
- Key CTA section if appropriate

Do NOT apply to:
- All feature cards
- All service cards
- Every section

### Typography
- **Font:** Geist (or Inter as fallback)
- **Weight Distribution:**
  - Headings: 600–700 (bold, authoritative)
  - Body: 400 (readable, calm)
  - Small text: 400 (secondary info)
- **Scale:** Maintain consistent hierarchy (h1 > h2 > h3 > p)

---

## 6. MODAL STRATEGY

### EnquiryModal Component

**Trigger:**
- Primary CTA button ("Get Help With My Paperwork") in navbar, hero, and CTA section
- Click opens modal overlay

**Form Fields:**
```
- Name (required, text)
- Email (required, email validation)
- Type of Paperwork (required, select dropdown)
- Deadline (optional, date picker)
- Short Message (optional, textarea)
- Checkbox: "I understand this is document support, not legal advice"
```

**Submission Flow:**
```
1. User fills form
2. Client-side validation
3. Show loading state
4. Display confirmation message (no actual backend)
5. Auto-close modal after 2–3 seconds
6. Smooth scroll to top
7. Optional: Toast notification "Thank you, we'll be in touch"
```

**Placeholder Handling:**
- Form submission can log to console or show success state
- No actual email sending yet
- State management: React hooks (useState for form, modal open/close)

**Accessibility:**
- Focus trap within modal
- Escape key closes modal
- ARIA labels on form inputs
- Semantic form structure

---

## 7. NAVIGATION STRATEGY

### Desktop Navigation
- Sticky navbar (top)
- Logo on left (clickable → top)
- Nav links (How It Works, Services, FAQ, CTA)
- Dark mode toggle (icon button)
- Primary CTA button (right side)

### Mobile Navigation
- Logo left, hamburger right
- Hamburger opens slide menu
- Dark mode toggle in menu
- CTA button accessible in menu
- Touch-friendly tap targets (48px minimum)

### Smooth Scroll Behavior
- All anchor links (#how-it-works, #services, #faq)
- Smooth scroll-to-section (CSS scroll-behavior: smooth)
- Offset navbar height for anchor positioning

---

## 8. MOBILE STRATEGY

### Responsive Breakpoints
- **Mobile:** < 640px (stacked layout, full-width)
- **Tablet:** 640px–1024px (2-column grids where appropriate)
- **Desktop:** > 1024px (full layout)

### Mobile-First Approach
- Start with mobile design, enhance for larger screens
- Touch-friendly buttons (48px tap target minimum)
- Full-width sections with padding
- Readable font sizes (16px+ for body)
- Single-column card layouts on mobile

### Performance Considerations
- Lazy load images (if used)
- Minimal animations on lower-end devices
- Optimized font loading

---

## 9. SEO STRATEGY

### Metadata (Next.js Layout Metadata)
```
title: "Supportology | Expert Paperwork Support & Document Preparation"
description: "Overwhelmed by paperwork? We help you organize and prepare documents for council appeals, benefits claims, and more. Simple, confidential support."
```

### Open Graph
```
og:title, og:description, og:image (placeholder)
og:type: website
og:url: [production domain]
```

### Semantic HTML
- H1 (single, in hero)
- H2 (section headers)
- H3 (subsections)
- Semantic tags: main, nav, footer, article, section
- Alt text on all images/visuals

### Accessibility + SEO
- Proper heading hierarchy
- Image alt text
- Link descriptive text (not "click here")
- Mobile optimization (viewport meta)
- Fast page load (minimal JS, optimized CSS)

---

## 10. ANIMATION STRATEGY

### Enabled Animations
✓ **Scroll-in animations:** Fade + slight upward slide (50–100ms, Tailwind)
✓ **Button hover:** Scale, color shift, shadow increase
✓ **Card hover:** Shadow increase, subtle scale
✓ **Smooth scroll:** CSS scroll-behavior or Intersection Observer
✓ **Form focus:** Border color shift, subtle shadow
✓ **Modal open/close:** Fade + scale transition (200–300ms)
✓ **Navigation transitions:** Fade/slide for menu open/close

### Animation Implementation
- **CSS Transitions:** Default for hover states, simple effects
- **Tailwind Utilities:** transition, hover:*, focus:*
- **Intersection Observer:** Scroll-triggered animations for efficiency
- **Framer Motion:** Optional if complex orchestration needed (keep light)

### Performance Notes
- Use `transform` and `opacity` only (GPU-accelerated)
- Avoid animating layout properties (width, height)
- Reduce motion for users with `prefers-reduced-motion`
- Test on lower-end devices

---

## 11. ACCESSIBILITY STRATEGY

### Keyboard Navigation
- Tab through all interactive elements
- Visible focus states (outline or underline)
- Escape key closes modals
- Enter triggers buttons/forms
- Arrow keys in dropdowns/selects

### Screen Readers
- ARIA labels on icon buttons
- Form input labels associated with `<label>` tags
- Skip-to-main link (optional but recommended)
- Semantic HTML structure

### Colour Contrast
- WCAG AA minimum (4.5:1 for text)
- Test contrast in both light and dark modes
- Avoid colour-only indicators (use icons + text)

### Motion & Vestibular
- Respect `prefers-reduced-motion` media query
- Reduce or disable animations for users who prefer
- No auto-playing videos or distracting motion

### Mobile Accessibility
- 48px tap targets for buttons
- Readable font sizes (16px+ base)
- Sufficient padding around interactive elements
- Touch-friendly forms

---

## 12. HOW WE HAVE HELPED (Outcomes Section)

### Four Anonymised Real-Life Examples
Present as examples of the types of paperwork support provided. Do not describe as fictional, call them testimonials, imply guaranteed outcomes, or include identifying information.

**Example 1: Non-Molestation Order Paperwork**
Feeling overwhelmed after being unable to obtain legal aid and needing help preparing paperwork for an urgent non-molestation order application.

**Example 2: Benefits Mandatory Reconsideration**
Needing help understanding a benefits decision, organising medical evidence and preparing clear paperwork for a mandatory reconsideration.

**Example 3: School Admissions Appeal**
Feeling confused by long emails, appeal papers, guidance documents and supporting evidence received from the council, and needing help organising everything into a clear and manageable bundle.

**Example 4: Council Tax Arrears Correspondence**
Receiving multiple letters, notices and council correspondence relating to council tax arrears and needing help understanding the paperwork, organising documents and preparing a clear response.

**Supporting Text Below Examples:**
"And many other forms, complaints, applications, appeals and evidence packs."

**Section Goal:** Visitors should recognize situations similar to their own and understand that Supportology helps move from confusion/overwhelm towards clarity/action.

---

## 13. ASSUMPTIONS & CONSTRAINTS

### Assumptions
1. **No Backend Required:** Form submission is placeholder; no actual email or database storage.
2. **Placeholder Logo:** Use text-based "Supportology" logo; user will provide final brand assets later.
3. **Accent Colour Confirmed:** Professional teal (trust, calmness, clarity, support).
4. **No Real File Uploads:** Upload references are placeholder text only; no secure upload system.
5. **How We Have Helped:** Four anonymised real-life examples of support provided (no identifying information).
6. **Single Font:** Geist throughout; no secondary fonts.
7. **Light Mode Default:** Dark mode is optional enhancement; light mode is primary experience.
8. **Mobile-First Built:** Desktop experience enhanced from mobile baseline.
9. **Minimal Motion:** No parallax, floating elements, or excessive animation.
10. **No External Tools:** No Calendly, Typeform, payment gateways, or 3rd-party integrations.
11. **No Generated Visuals:** Use placeholder containers only; no AI-generated images, illustrations, or logos.
12. **Premium Minimal Aesthetic:** Paper-inspired depth background, calm, trustworthy, professional, not corporate or flashy.
13. **Modal on Homepage:** Contact form opens as overlay; no separate contact page.
14. **Footer Disclaimer:** Includes statement: "Supportology provides document support and preparation assistance. We do not provide regulated legal advice."
15. **Responsive Design:** Mobile, tablet, and desktop fully functional.

### Constraints
- **No Backend:** Frontend prototype only; no server actions or APIs.
- **No Database:** All content is hardcoded or component state.
- **No Auth:** No user accounts or protected pages.
- **Single Page:** No multi-page navigation; all content on one scrollable page.
- **Max Component Size:** ~600 lines per file to avoid refactoring burden.
- **Minimal Dependencies:** Next.js 16, Tailwind CSS v4, lucide-react, next-themes only.
- **No Generated Assets:** No AI images, illustrations, or logos; placeholder-only.
- **Premium Minimal:** No flashy effects, crypto-style visuals, or corporate aesthetics.

---

## 14. RISKS & TRADE-OFFS

### Risks

| Risk | Mitigation |
|------|-----------|
| **Placeholder content feels incomplete** | Use realistic but clearly fictional examples; add disclaimer notes |
| **Dark mode implementation complexity** | Use next-themes + CSS variables; design both modes simultaneously |
| **Modal accessibility issues** | Use Radix UI Dialog as foundation; test keyboard/screen reader |
| **Animation performance on mobile** | Limit animations to simple CSS transitions; test on real devices |
| **Form validation feels clunky** | Use built-in HTML5 validation + clear error messaging |
| **Glass effect doesn't render properly** | Test on Safari + Chrome; use backdrop-filter with fallback |

### Trade-Offs

| Choice | Trade-Off | Reason |
|--------|-----------|--------|
| **No Framer Motion** | Less advanced animation orchestration possible | Keeps bundle small, faster load |
| **Minimal glass effects** | Less "wow factor" visually | Matches brief (premium, calm, trustworthy) |
| **Single font** | Less design variety | Improves consistency, reduces complexity |
| **No backend** | Form is placeholder only | Aligns with prototype scope |
| **No image generation** | Rely on abstract, minimal placeholders | Avoids clichéd stock photos |

---

## 15. RECOMMENDED IMPLEMENTATION ORDER

### Phase 1: Foundation (Project Setup)
1. Initialize Next.js 16 project
2. Configure Tailwind CSS v4 with design tokens
3. Set up next-themes for dark mode
4. Create layout.tsx with navbar slot + provider wrappers
5. Configure SEO metadata in layout

### Phase 2: Core Components (No Logic Yet)
1. Build Navbar component (logo placeholder, nav links, theme toggle, CTA button)
2. Build Hero section (headline, value prop, accent card with visual placeholder)
3. Build HowItWorks section (3 steps with icons)
4. Build Services section (3 service cards)

### Phase 3: Supporting Sections
1. Build Outcomes section (3 before/after example cards)
2. Build FAQ section (accordion or card-based, 5–7 questions)
3. Build CTASection (reinforcement + trigger button)
4. Build Footer (branding, links, disclaimer)

### Phase 4: Interactivity & Modal
1. Build EnquiryModal component (form with basic validation)
2. Integrate modal into page.tsx (state management)
3. Wire up CTA buttons to open modal
4. Implement confirmation flow (submit → success → close)

### Phase 5: Polish & Accessibility
1. Add scroll-in animations (Intersection Observer pattern)
2. Add hover states to buttons, cards, links
3. Add focus states for keyboard navigation
4. Test dark mode across all components
5. Verify mobile responsiveness
6. Add ARIA labels, test screen reader
7. Validate colour contrast in both themes

### Phase 6: Final Review
1. Check SEO metadata and semantic HTML
2. Optimize performance (lighthouse audit)
3. Test on real mobile devices
4. Verify animation smoothness
5. Document component structure for future revisions

---

## 16. FOOTER REQUIREMENTS

Include all of the following:
- Supportology logo/brand name (text-based placeholder)
- Short trust statement
- Navigation links (anchor to main sections or pages)
- Email: help@supportology.co.uk
- Legal links:
  - Privacy Policy
  - Terms of Service
  - Complaints Procedure
- **Disclaimer:** "Supportology provides document support and preparation assistance. We do not provide regulated legal advice."

**Theme Support:** Light and dark mode consistent styling.

**Aesthetic:** Calm, minimal, trustworthy, professional.

---

## 17. BUILD CHECKLIST (FINAL CONFIRMATION)

## 17. BUILD CHECKLIST (FINAL CONFIRMATION)

### All Requirements Confirmed:

✅ **Core Messaging**
- Hero: "Overwhelmed by paperwork?" + "Turning paperwork problems into clear next steps."
- CTA: "Get Help With My Paperwork"
- Tone: Plain English, accessible, reassuring, not corporate

✅ **Modal & Form**
- Opens as overlay on homepage (no separate contact page)
- Fields: Name, Email, Type of paperwork, Deadline, Short message
- No file uploads or backend processing
- Confirmation state after submission
- Smooth scroll to top after close

✅ **Design System**
- Accent Colour: Professional teal
- Font: Geist (single font throughout)
- Theme: Light mode default + dark mode toggle
- Responsive: Mobile, tablet, desktop
- Glass effects: Navbar, hero accent card, optional CTA section only
- Animations: Subtle scroll-in, hover, focus, modal transitions (no parallax, floating, excessive motion)

✅ **Background**
- Premium paper-inspired depth
- Subtle layered, abstract document structure
- Soft architectural grid elements
- Gentle light movement
- NOT: floating blobs, particles, crypto effects, excessive gradients

✅ **Visual Assets**
- Placeholder containers only
- NO generated images, illustrations, or logos
- Text-based "Supportology" logo placeholder
- User will add final brand assets

✅ **Page Structure**
1. Sticky Navbar (logo, nav links, dark toggle, CTA)
2. Hero Section ("Overwhelmed by paperwork?" + accent card)
3. How It Works (3-step process)
4. Services Overview (3 service cards)
5. How We Have Helped (4 anonymised real-life examples + "many others" text)
6. FAQ (5–7 questions addressing objections)
7. Primary CTA Section (reinforcement + button)
8. Footer (branding, trust, links, email, legal, disclaimer)

✅ **Footer**
- Logo placeholder + trust statement
- Navigation links
- Email: help@supportology.co.uk
- Privacy Policy, Terms, Complaints links
- Disclaimer: "Supportology provides document support and preparation assistance. We do not provide regulated legal advice."

✅ **Component Architecture**
- 8 main components
- Max ~600 lines per file
- Semantic HTML, proper heading hierarchy
- SEO metadata included
- Accessibility best practices (keyboard nav, focus states, ARIA, colour contrast)

✅ **Prototype Constraints**
- Frontend only (no backend, auth, database, payments)
- No external integrations
- Placeholder form submission
- Clean, maintainable, scalable code

---

## 18. SUCCESS CRITERIA

✓ Pixel-perfect responsive design (mobile, tablet, desktop)
✓ All CTAs trigger modal correctly
✓ Modal form validation works
✓ Dark mode toggles smoothly across entire site
✓ Animations are smooth and non-distracting
✓ Keyboard navigation fully functional
✓ Focus states visible on all interactive elements
✓ Screen reader compatible
✓ SEO metadata in place
✓ Lighthouse score > 90
✓ Page load under 3 seconds
✓ Component files ≤ 600 lines each
✓ Single font family consistent throughout

---

## 19. NEXT STEPS

1. ✅ Implementation plan updated with all final requirements
2. ⏸️ **Awaiting BUILD approval**
3. Upon "BUILD" command: Implementation will proceed in order:
   - Phase 1: Foundation (Next.js, Tailwind, design tokens, layout)
   - Phase 2: Core Components (Navbar, Hero, HowItWorks, Services)
   - Phase 3: Supporting Sections (Outcomes, FAQ, CTASection, Footer)
   - Phase 4: Interactivity (Modal form, submission, scroll-to-top)
   - Phase 5: Polish (Animations, accessibility, dark mode refinement)
   - Phase 6: Final Review (SEO, performance, browser testing)

---

**Status:** ✅ Planning Complete — Ready for BUILD

**All requirements confirmed. Ready to implement on your approval.**

Reply with: **"BUILD"**
