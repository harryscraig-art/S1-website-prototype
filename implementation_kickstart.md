# Supportology Landing Page — Implementation Kickstart

**Project Scope:** Frontend prototype only. Premium, minimal landing page for paperwork support service.

**Status:** Planning Phase — Awaiting BUILD approval

---

## 1. ARCHITECTURE OVERVIEW

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

## 2. PAGE STRUCTURE

### Full-Width Single-Page Layout
```
├── Sticky Navbar (with dark mode toggle + CTA button)
├── Hero Section (intro + accent card + visual)
├── How It Works (3-step process)
├── Services Overview (3 service cards)
├── Example Outcomes / Before & After (3 realistic scenarios)
├── FAQ Section (5–7 questions)
├── Primary CTA Section (reinforces "Get Help With My Paperwork")
├── Footer (branding + trust + links)
└── Modal (hidden until CTA triggered)
```

### Section Priority (Conversion-Focused)
1. Hero → Establish trust + value proposition
2. How It Works → Reduce friction/anxiety
3. Services → Show what's covered
4. Outcomes → Build confidence
5. FAQ → Address objections (cost, confidentiality, legal vs. support)
6. CTA Section → Final conversion push
7. Footer → Trust signals + legal compliance

---

## 3. COMPONENT STRUCTURE

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
| Outcomes | 120–160 | Example scenarios, before/after |
| FAQ | 150–200 | Accordion or card-based Q&A |
| CTASection | 80–120 | Reinforcement + button |
| Footer | 100–150 | Branding, links, disclaimer |
| EnquiryModal | 180–250 | Form, validation, submission |
| layout.tsx | 100–150 | Root structure, providers |

---

## 4. THEME STRATEGY

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

### Accent Colour Selection
**Question:** What is your preferred accent colour?
- Options: Teal, Blue, Green, Warm Coral, Slate
- This will be applied to buttons, links, highlights, focus states

**Recommendation:** Calm, trustworthy tone suggests teal or cool blue.

### Typography
- **Font:** Geist (or Inter as fallback)
- **Weight Distribution:**
  - Headings: 600–700 (bold, authoritative)
  - Body: 400 (readable, calm)
  - Small text: 400 (secondary info)
- **Scale:** Maintain consistent hierarchy (h1 > h2 > h3 > p)

---

## 5. MODAL STRATEGY

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

## 6. NAVIGATION STRATEGY

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

## 7. MOBILE STRATEGY

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

## 8. SEO STRATEGY

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

## 9. ANIMATION STRATEGY

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

## 10. ACCESSIBILITY STRATEGY

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

## 11. ASSUMPTIONS & CONSTRAINTS

### Assumptions
1. **No Backend Required:** Form submission is placeholder; no actual email or database storage.
2. **Placeholder Logo:** Logo area left for user to add final branding asset later.
3. **Placeholder Accent Colour:** Awaiting user input on primary accent colour.
4. **No Real File Uploads:** Upload references are placeholder text only.
5. **Example Scenarios:** Case studies are fictional but realistic; no real client data.
6. **Single Font:** All text uses Geist or Inter; no secondary fonts.
7. **Light Mode Default:** Dark mode is optional enhancement; light mode is primary.
8. **Mobile-First Built:** Desktop experience enhanced from mobile baseline.
9. **Minimal Motion:** No parallax, floating elements, or excessive animation.
10. **No External Tools:** No Calendly, Typeform, payment gateways, or 3rd-party integrations.

### Constraints
- **No Backend:** Frontend prototype only; no server actions or APIs.
- **No Database:** All content is hardcoded or component state.
- **No Auth:** No user accounts or protected pages.
- **Single Page:** No multi-page navigation; all content on one scrollable page.
- **Max Component Size:** ~600 lines per file to avoid refactoring burden.
- **Minimal Dependencies:** Use built-in Next.js, Tailwind, lucide-react, next-themes only.

---

## 12. RISKS & TRADE-OFFS

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

## 13. RECOMMENDED IMPLEMENTATION ORDER

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

## 14. BUILD CHECKLIST (Before Writing Code)

### Missing Information — Please Confirm:

1. **Accent Colour:** Which colour for primary buttons, links, and highlights?
   - Options: Teal, Blue, Green, Warm Coral, Slate, or other?

2. **Logo Placeholder:** Should I include a text-based "Supportology" logo or a simple geometric shape as placeholder?

3. **Visual Assets:** Should I generate abstract minimal visuals (document layers, checklists, etc.) using GenerateImage tool or use placeholder blocks?

4. **Footer Email:** Placeholder text "help@supportology.co.uk" — correct?

5. **Example Scenarios:** Use the three examples you provided?
   - Unsorted emails → organized evidence pack
   - Council correspondence → clear response
   - Appeal papers → structured submission

---

## 15. SUCCESS CRITERIA

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

## 16. NEXT STEPS

1. **Confirm missing information** (Section 14 above)
2. **Approve this plan**
3. **Reply with "BUILD"** to trigger implementation
4. Implementation will proceed in order: Foundation → Components → Interactivity → Polish

---

**Status:** ⏸️ Awaiting approval and missing information answers.
