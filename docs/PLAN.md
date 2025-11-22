# PJ's Auto Care & Gourmet Coffee - Website Project Plan

## Project Overview
**Project Name:** PJ's Auto Care & Gourmet Coffee Website
**Type:** Production-ready business website
**Target Launch:** Full deployment with all features tested and verified
**Unique Value Proposition:** Only auto shop in Moore County, NC combining premium automotive service with gourmet coffee experience

---

## Technology Stack

### Frontend Framework
- **React 18.2+** with **Vite 5.x**
  - **Rationale:** Fast development, excellent DX, instant HMR, optimized production builds
  - Modern bundling with automatic code splitting
  - Superior performance vs Create React App

### Routing
- **React Router DOM v6**
  - **Rationale:** Industry standard, excellent documentation, supports SPA routing
  - Nested routes for clean architecture
  - Programmatic navigation capabilities

### Styling
- **Tailwind CSS 3.x**
  - **Rationale:** Utility-first, zero runtime, tree-shakeable (removes unused styles)
  - Rapid prototyping with consistent design system
  - No external CSS dependencies (self-contained)
  - Built-in responsive design utilities

### Icons
- **Lucide React**
  - **Rationale:** Lightweight (tree-shakeable), modern icon set, React-optimized
  - Consistent design language
  - Better performance than Font Awesome

### Form Handling
- **Netlify Forms**
  - **Rationale:** No backend required, automatic spam filtering, email notifications
  - Zero server configuration
  - Built-in honeypot protection

### Deployment
- **Netlify**
  - **Rationale:**
    - Auto-deploy on git push (continuous deployment)
    - Free SSL certificates (Let's Encrypt)
    - CDN-based global distribution
    - Form handling built-in
    - Zero manual server management
    - Perfect for static/SPA sites

### Testing
- **Jest + React Testing Library** (Unit/Integration)
  - **Rationale:** React ecosystem standard, excellent React component testing
- **Playwright** (E2E)
  - **Rationale:** Cross-browser support, reliable selectors, better debugging than Cypress
- **Lighthouse CI** (Performance)
  - **Rationale:** Automated performance monitoring in CI/CD

### Version Control
- **Git + GitHub**
  - **Rationale:** Industry standard, integrates with Netlify, enables collaboration

### Additional Tools
- **ESLint** - Code quality
- **Prettier** - Code formatting
- **PostCSS** - CSS processing (required for Tailwind)

---

## File Structure

```
pjs-auto-care-website/
├── public/
│   ├── _redirects              # Netlify SPA routing
│   ├── robots.txt              # SEO: Search engine directives
│   ├── sitemap.xml             # SEO: Site structure
│   └── favicon.ico             # Browser tab icon
│
├── src/
│   ├── components/
│   │   ├── common/             # Reusable UI components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navigation.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── StickyScheduleButton.jsx
│   │   │
│   │   ├── forms/              # Form components (Netlify integration)
│   │   │   ├── ContactForm.jsx
│   │   │   ├── ServiceRequestForm.jsx
│   │   │   ├── AppointmentForm.jsx
│   │   │   ├── NewsletterForm.jsx
│   │   │   └── FormField.jsx
│   │   │
│   │   ├── sections/           # Page section components
│   │   │   ├── Hero.jsx
│   │   │   ├── ServicesGrid.jsx
│   │   │   ├── TestimonialsCarousel.jsx
│   │   │   ├── TrustBar.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── CoffeeShowcase.jsx
│   │   │   ├── GoogleMap.jsx
│   │   │   └── CTASection.jsx
│   │   │
│   │   └── ui/                 # Interactive UI elements
│   │       ├── Accordion.jsx
│   │       ├── Modal.jsx
│   │       ├── Toast.jsx
│   │       ├── Carousel.jsx
│   │       ├── Lightbox.jsx
│   │       └── Tabs.jsx
│   │
│   ├── pages/                  # Route-level components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Tires.jsx
│   │   ├── CoffeeAmenities.jsx
│   │   ├── About.jsx
│   │   ├── Reviews.jsx
│   │   ├── Coupons.jsx
│   │   ├── Contact.jsx
│   │   ├── Schedule.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data/                   # Static data (JSON/JS)
│   │   ├── services.js         # Complete service catalog
│   │   ├── testimonials.js     # Customer reviews
│   │   ├── faqs.js            # Frequently asked questions
│   │   ├── tires.js           # Tire brands & info
│   │   ├── coupons.js         # Special offers
│   │   └── businessInfo.js    # Contact, hours, address
│   │
│   ├── utils/                  # Helper functions
│   │   ├── validation.js       # Form validation logic
│   │   ├── analytics.js        # GA4 event tracking
│   │   ├── helpers.js          # General utilities
│   │   └── seo.js             # SEO metadata helpers
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useForm.js
│   │   ├── useIntersectionObserver.js
│   │   ├── useMediaQuery.js
│   │   └── useScrollPosition.js
│   │
│   ├── styles/
│   │   └── index.css           # Tailwind imports + custom styles
│   │
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── router.jsx              # Route configuration
│
├── tests/
│   ├── unit/                   # Component tests
│   │   ├── components/
│   │   │   ├── Header.test.jsx
│   │   │   ├── Footer.test.jsx
│   │   │   ├── ContactForm.test.jsx
│   │   │   └── ...
│   │   └── utils/
│   │       └── validation.test.js
│   │
│   ├── e2e/                    # End-to-end tests
│   │   ├── homepage.spec.js
│   │   ├── navigation.spec.js
│   │   ├── forms.spec.js
│   │   ├── responsive.spec.js
│   │   └── ...
│   │
│   └── setup.js                # Test configuration
│
├── .github/
│   └── workflows/
│       ├── test.yml            # CI: Run tests on PR
│       └── lighthouse.yml      # CI: Performance checks
│
├── docs/
│   ├── PLAN.md                 # This file
│   ├── PHOTO_GUIDE.md          # Photo replacement guide
│   ├── TESTING_CHECKLIST.md    # Manual testing checklist
│   ├── DEPLOYMENT_CHECKLIST.md # Deployment verification
│   └── MAINTENANCE_GUIDE.md    # Content update guide
│
├── .gitignore
├── netlify.toml                # Netlify configuration
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS config (for Tailwind)
├── playwright.config.js        # Playwright E2E config
├── jest.config.js              # Jest unit test config
├── README.md                   # Project documentation
└── LICENSE                     # MIT License
```

---

## Component Architecture

### Component Hierarchy

```
App
├── Header (global)
│   ├── Navigation
│   └── MobileMenu
│
├── Router
│   ├── Home
│   │   ├── Hero
│   │   ├── ServiceRequestForm (sticky)
│   │   ├── TrustBar
│   │   ├── ServicesGrid
│   │   ├── WhyChooseUs
│   │   ├── TestimonialsCarousel
│   │   ├── CoffeeShowcase
│   │   ├── GoogleMap
│   │   └── CTASection
│   │
│   ├── Services
│   │   ├── Hero
│   │   ├── Accordion (service categories)
│   │   └── CTASection
│   │
│   ├── Tires
│   │   ├── Hero
│   │   ├── Tabs (shop by brand/vehicle/size)
│   │   ├── TireSelector (interactive)
│   │   └── CTASection
│   │
│   ├── CoffeeAmenities
│   │   ├── Hero
│   │   ├── Lightbox (photo gallery)
│   │   ├── AmenitiesList
│   │   └── TestimonialsCarousel
│   │
│   ├── About
│   │   ├── Hero
│   │   ├── Timeline (company history)
│   │   ├── TeamGrid
│   │   └── CertificationsBadges
│   │
│   ├── Reviews
│   │   ├── RatingsSummary
│   │   ├── Filters
│   │   └── ReviewsList
│   │
│   ├── Coupons
│   │   ├── Hero
│   │   ├── CouponsGrid
│   │   └── NewsletterForm
│   │
│   ├── Contact
│   │   ├── ContactForm
│   │   ├── ContactInfoCards
│   │   ├── GoogleMap
│   │   └── FAQ (accordion)
│   │
│   ├── Schedule
│   │   ├── AppointmentForm
│   │   ├── AvailabilityCalendar
│   │   └── WhatToExpect
│   │
│   └── NotFound (404)
│
├── Footer (global)
│   ├── QuickLinks
│   ├── ContactInfo
│   ├── NewsletterForm
│   └── SocialLinks
│
└── StickyScheduleButton (global)
```

### Reusable Component Design Patterns

**Button Component:**
- Variants: primary, secondary, outline, ghost
- Sizes: sm, md, lg
- States: default, hover, active, disabled, loading
- Props: onClick, href, type, children, icon, fullWidth

**Card Component:**
- Variants: elevated, outlined, flat
- Props: title, image, content, footer, onClick, href

**FormField Component:**
- Types: text, email, tel, textarea, select, checkbox, radio
- Built-in validation
- Error message display
- Label + input combination

**Accordion Component:**
- Single or multiple item expansion
- Animated transitions
- Icon indicators
- Keyboard accessible

**Carousel Component:**
- Auto-play with pause on hover
- Manual navigation (prev/next)
- Dot indicators
- Touch/swipe support
- Accessibility (ARIA roles)

---

## Data Structure

### services.js
```javascript
{
  categories: [
    {
      id: 'routine-maintenance',
      name: 'Routine Maintenance',
      icon: 'Wrench',
      services: [
        {
          id: 'oil-change',
          name: 'Oil Changes & Lube Services',
          description: '...',
          benefits: ['...'],
          estimatedTime: '30-45 minutes'
        },
        // ...more services
      ]
    },
    // ...more categories
  ]
}
```

### testimonials.js
```javascript
[
  {
    id: 1,
    name: 'John Smith',
    service: 'Oil Change',
    rating: 5,
    date: '2024-01-15',
    text: '...',
    source: 'Google',
    verified: true
  },
  // ...more testimonials
]
```

### businessInfo.js
```javascript
{
  name: "PJ's Auto Care & Gourmet Coffee",
  address: {
    street: '185 Partner Circle',
    city: 'Southern Pines',
    state: 'NC',
    zip: '28387',
    mapUrl: '...'
  },
  contact: {
    mainPhone: '(910) 692-3944',
    servicePhone: '(910) 692-0744',
    fax: '(910) 692-3362',
    email: 'info@pjsautocare.net'
  },
  hours: {
    weekday: '7:30 AM - 5:00 PM',
    saturday: '7:30 AM - 4:00 PM',
    sunday: 'Closed'
  },
  social: {
    facebook: '...',
    google: '...',
    yelp: '...'
  },
  stats: {
    established: 2003,
    yearsInBusiness: 21,
    reviewCount: 468,
    rating: 4.8,
    bbbRating: 'A+'
  }
}
```

---

## Feature Implementation Order

### Phase 1: Foundation (Day 1)
1. ✅ Project initialization (Vite + React)
2. ✅ Install dependencies (React Router, Tailwind, Lucide)
3. ✅ Configure Tailwind, PostCSS
4. ✅ Set up file structure
5. ✅ Create data files with complete business info
6. ✅ Git initialization

### Phase 2: Core Components (Day 1-2)
7. ✅ Button component (all variants)
8. ✅ Card component
9. ✅ FormField component (with validation)
10. ✅ Header component
11. ✅ Footer component
12. ✅ Navigation (desktop + mobile)
13. ✅ Loading states
14. ✅ Router setup (all routes)

### Phase 3: Form Infrastructure (Day 2)
15. ✅ Form validation utilities
16. ✅ useForm custom hook
17. ✅ ContactForm component (Netlify integration)
18. ✅ ServiceRequestForm component
19. ✅ AppointmentForm component
20. ✅ NewsletterForm component
21. ✅ Toast notification system

### Phase 4: Interactive UI Elements (Day 2-3)
22. ✅ Accordion component
23. ✅ Carousel component (testimonials)
24. ✅ Modal component
25. ✅ Tabs component (for Tires page)
26. ✅ Lightbox component (photo gallery)

### Phase 5: Section Components (Day 3)
27. ✅ Hero component (reusable for all pages)
28. ✅ TrustBar component (BBB, reviews, certifications)
29. ✅ ServicesGrid component
30. ✅ WhyChooseUs component
31. ✅ TestimonialsCarousel component
32. ✅ CoffeeShowcase component
33. ✅ GoogleMap component
34. ✅ CTASection component

### Phase 6: Page Development (Day 3-4)
35. ✅ Home page (complete with all sections)
36. ✅ Services page (with accordions)
37. ✅ Tires page (with selector tool)
38. ✅ Coffee & Amenities page (with gallery)
39. ✅ About page (company history, team)
40. ✅ Reviews page (filterable testimonials)
41. ✅ Coupons page (printable offers)
42. ✅ Contact page (form + map)
43. ✅ Schedule page (appointment form)
44. ✅ 404 page (custom design)

### Phase 7: SEO & Metadata (Day 4)
45. ✅ Meta tags (title, description per page)
46. ✅ Open Graph tags (social sharing)
47. ✅ Structured data (LocalBusiness JSON-LD)
48. ✅ Sitemap.xml generation
49. ✅ Robots.txt configuration
50. ✅ Alt text for all images

### Phase 8: Analytics & Tracking (Day 4)
51. ✅ Google Analytics 4 setup (placeholder)
52. ✅ Event tracking (form submissions, phone clicks, CTAs)
53. ✅ Conversion tracking setup

### Phase 9: Accessibility (Day 4)
54. ✅ Semantic HTML review
55. ✅ ARIA labels (where needed)
56. ✅ Keyboard navigation (all interactive elements)
57. ✅ Focus states (visible and styled)
58. ✅ Color contrast verification (4.5:1 minimum)
59. ✅ Screen reader testing

### Phase 10: Performance Optimization (Day 5)
60. ✅ Lazy loading (images + routes)
61. ✅ Code splitting verification
62. ✅ Bundle size analysis
63. ✅ Image optimization (WebP with fallbacks)
64. ✅ Preload critical resources
65. ✅ Lighthouse audit (fix issues)

### Phase 11: Testing (Day 5-6)
66. ✅ Write unit tests (all components)
67. ✅ Run unit tests (fix failures)
68. ✅ Write E2E tests (10+ scenarios)
69. ✅ Run E2E tests (fix failures)
70. ✅ Cross-browser testing (Chrome, Firefox, Safari, Edge)
71. ✅ Mobile responsiveness testing (3 breakpoints)
72. ✅ Form submission testing (verify Netlify notifications)
73. ✅ Manual testing checklist completion

### Phase 12: Documentation (Day 6)
74. ✅ README.md (installation, development, deployment)
75. ✅ PHOTO_GUIDE.md (photo requirements)
76. ✅ MAINTENANCE_GUIDE.md (content updates)
77. ✅ TESTING_CHECKLIST.md (manual testing)
78. ✅ DEPLOYMENT_CHECKLIST.md (deployment verification)
79. ✅ Inline code comments (complex logic)

### Phase 13: Git & GitHub (Day 6)
80. ✅ Create .gitignore
81. ✅ Initial commit
82. ✅ Create GitHub repository
83. ✅ Push to GitHub
84. ✅ Set up branch protection (optional)

### Phase 14: Deployment (Day 6-7)
85. ✅ Create netlify.toml
86. ✅ Install Netlify CLI
87. ✅ Initialize Netlify project
88. ✅ Link to GitHub repository
89. ✅ Configure build settings
90. ✅ Deploy to production
91. ✅ Verify deployment
92. ✅ Configure Netlify Forms
93. ✅ Set up email notifications
94. ✅ Enable HTTPS
95. ✅ Configure custom domain (instructions)

### Phase 15: Post-Deployment Verification (Day 7)
96. ✅ Test all pages (live site)
97. ✅ Test all forms (verify notifications)
98. ✅ Verify all links (no 404s)
99. ✅ Mobile responsiveness (live)
100. ✅ Lighthouse audit (live site, all pages)
101. ✅ Cross-browser testing (live)
102. ✅ SSL certificate verification
103. ✅ Sitemap submission (Google Search Console)
104. ✅ Complete deployment checklist
105. ✅ Generate final report

---

## Testing Strategy

### Unit Tests (Jest + React Testing Library)
**Coverage Target:** >80%

**Component Tests:**
- Header: Navigation links render, mobile menu toggles
- Footer: All links present, newsletter form renders
- Button: All variants render, onClick handlers work
- Card: Props render correctly
- FormField: Validation works, error messages display
- Accordion: Expands/collapses, multiple items work
- Carousel: Navigation works, auto-play functions
- Modal: Opens/closes, traps focus
- All forms: Validation logic, submission handling

**Utility Tests:**
- Validation: Email, phone, required fields
- Helpers: Date formatting, string manipulation
- Analytics: Event tracking functions

**Test Structure:**
```javascript
describe('ContactForm', () => {
  test('renders all form fields', () => { ... });
  test('validates email format', () => { ... });
  test('shows error for required fields', () => { ... });
  test('submits successfully with valid data', () => { ... });
  test('displays success message after submission', () => { ... });
});
```

### E2E Tests (Playwright)
**Test Scenarios:**

1. **Homepage Navigation**
   - Homepage loads without errors
   - All hero CTAs clickable
   - Sticky schedule button appears on scroll
   - Service request form submits

2. **Full Site Navigation**
   - All nav links navigate to correct pages
   - Mobile menu opens/closes
   - All pages load without 404s
   - Breadcrumbs work on subpages

3. **Form Submissions**
   - Contact form: Fill + submit + verify success
   - Service request: Fill + submit
   - Appointment form: Fill + submit
   - Newsletter: Email validation + submit

4. **Interactive Elements**
   - Service accordions expand/collapse
   - Testimonials carousel auto-advances
   - Testimonials manual navigation works
   - Modal opens/closes
   - Tire selector filters results

5. **Mobile Responsiveness**
   - Test on mobile viewport (375px)
   - Test on tablet viewport (768px)
   - Test on desktop viewport (1280px)
   - Hamburger menu functions

6. **External Integrations**
   - Google Maps embed loads
   - Phone links work (tel:)
   - Email links work (mailto:)
   - External review links open

7. **SEO & Metadata**
   - All pages have unique titles
   - Meta descriptions present
   - Structured data validates

8. **Performance**
   - Images lazy load
   - No console errors
   - Fast page transitions

9. **Accessibility**
   - Keyboard navigation works
   - Focus states visible
   - ARIA labels present

10. **Error Handling**
    - 404 page displays for invalid routes
    - Form validation errors display
    - Graceful handling of failed submissions

**Test Structure:**
```javascript
test('contact form submission', async ({ page }) => {
  await page.goto('/contact');
  await page.fill('[name="name"]', 'John Doe');
  await page.fill('[name="email"]', 'john@example.com');
  await page.fill('[name="message"]', 'Test message');
  await page.click('button[type="submit"]');
  await expect(page.locator('.success-message')).toBeVisible();
});
```

### Lighthouse CI
**Thresholds:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

**Audit Pages:**
- / (Home)
- /services
- /tires
- /coffee-amenities
- /about
- /reviews
- /coupons
- /contact
- /schedule

**GitHub Action:**
```yaml
name: Lighthouse CI
on: [push, pull_request]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install && npm run build
      - run: npx lighthouse-ci autorun
```

### Manual Testing Checklist
See TESTING_CHECKLIST.md (to be created)

---

## Deployment Approach

### Netlify Configuration

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

**_redirects (in public/):**
```
/*    /index.html   200
```

### Deployment Steps

1. **Initial Setup:**
   ```bash
   npm install -g netlify-cli
   netlify login
   ```

2. **Link to GitHub:**
   ```bash
   netlify init
   # Select: Create & configure a new site
   # Select: Link to GitHub repository
   # Select: Build command: npm run build
   # Select: Publish directory: dist
   ```

3. **Configure Netlify Forms:**
   - Add `data-netlify="true"` to all forms
   - Add hidden input: `<input type="hidden" name="form-name" value="contact" />`
   - Configure email notifications in Netlify dashboard

4. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

5. **Custom Domain Setup (optional):**
   - Add custom domain in Netlify dashboard
   - Update DNS records (A record or CNAME)
   - Enable HTTPS (automatic via Let's Encrypt)

### Continuous Deployment
- Push to main branch → Auto-deploy to production
- Pull requests → Deploy preview
- Build logs available in Netlify dashboard

### Environment Variables
- `VITE_GA_TRACKING_ID` (Google Analytics - if needed)
- `VITE_GOOGLE_MAPS_API_KEY` (if using Maps API instead of embed)

Set in Netlify dashboard: Site settings → Build & deploy → Environment

---

## SEO Strategy

### On-Page SEO

**Meta Tags (per page):**
```html
<title>PJ's Auto Care & Gourmet Coffee | Southern Pines, NC</title>
<meta name="description" content="Premium auto service with a gourmet coffee bar in Southern Pines, NC. BBB A+, 21+ years, 4.8/5 stars. Experience the difference." />
<meta name="keywords" content="auto repair, car service, Southern Pines, Moore County, oil change, tires, coffee bar" />
```

**Open Graph (Social Sharing):**
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />
<meta property="og:type" content="website" />
```

**Structured Data (JSON-LD):**
```json
{
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "PJ's Auto Care & Gourmet Coffee",
  "image": "...",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "185 Partner Circle",
    "addressLocality": "Southern Pines",
    "addressRegion": "NC",
    "postalCode": "28387"
  },
  "telephone": "(910) 692-3944",
  "openingHours": "Mo-Fr 07:30-17:00, Sa 07:30-16:00",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "468"
  }
}
```

### Technical SEO
- ✅ Semantic HTML (header, nav, main, section, article, footer)
- ✅ Heading hierarchy (single H1 per page)
- ✅ Alt text for all images
- ✅ Fast load times (<3s)
- ✅ Mobile-friendly (responsive design)
- ✅ HTTPS enabled
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Clean URLs (no parameters)
- ✅ Internal linking structure

### Local SEO
- Google My Business optimization (external)
- NAP consistency (Name, Address, Phone)
- Local keywords: "Southern Pines auto repair", "Moore County car service"
- Location pages (if expanding)
- Local citations (Yelp, BBB, CARFAX)

---

## Accessibility Compliance (WCAG 2.1 AA)

### Requirements Checklist

**Perceivable:**
- ✅ All images have alt text
- ✅ Color contrast ratios ≥4.5:1 (text), ≥3:1 (UI components)
- ✅ Text can be resized up to 200% without loss of functionality
- ✅ Content is readable without color alone conveying information

**Operable:**
- ✅ All functionality available via keyboard
- ✅ No keyboard traps
- ✅ Skip to main content link
- ✅ Focus indicators visible
- ✅ No time limits on interactions (or can be extended)

**Understandable:**
- ✅ Page language declared (lang="en")
- ✅ Consistent navigation across pages
- ✅ Form labels clear and descriptive
- ✅ Error messages specific and helpful

**Robust:**
- ✅ Valid HTML (no critical errors)
- ✅ ARIA landmarks used appropriately
- ✅ Compatible with assistive technologies

### Testing Tools
- **axe DevTools** (browser extension)
- **WAVE** (web accessibility evaluation)
- **Lighthouse** (accessibility score)
- **Screen reader testing** (NVDA/JAWS on Windows, VoiceOver on macOS)

---

## Performance Optimization

### Image Optimization
- Use WebP format with PNG/JPG fallbacks
- Lazy loading (native loading="lazy")
- Responsive images (srcset for different sizes)
- Compress images (TinyPNG or similar)
- Use appropriate dimensions (no oversized images)

### Code Optimization
- Code splitting (React.lazy for routes)
- Tree shaking (Vite handles automatically)
- Minification (Vite production build)
- Remove unused CSS (Tailwind purge)
- Bundle analysis (vite-bundle-visualizer)

### Network Optimization
- CDN delivery (Netlify CDN)
- HTTPS/2 (Netlify default)
- Gzip/Brotli compression (Netlify automatic)
- Browser caching (cache headers)
- Preload critical resources

### Runtime Optimization
- Memoization (React.memo for expensive components)
- useCallback/useMemo where appropriate
- Debounce form inputs (search/filter)
- Virtual scrolling for long lists (if needed)
- Avoid unnecessary re-renders

**Performance Budget:**
- First Contentful Paint: <1.8s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.8s
- Cumulative Layout Shift: <0.1
- Total Bundle Size: <500kb (gzipped)

---

## Design System

### Color Palette
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Deep blue
          light: '#3B82F6',
          dark: '#1E40AF'
        },
        secondary: {
          DEFAULT: '#78350F', // Rich brown
          light: '#92400E',
          dark: '#451A03'
        },
        accent: {
          DEFAULT: '#F59E0B', // Warm gold
          light: '#FBBF24',
          dark: '#D97706'
        },
        neutral: {
          dark: '#1F2937',
          light: '#F3F4F6'
        }
      }
    }
  }
}
```

### Typography Scale
```
Display: 4xl (56px), 3xl (48px)
Heading: 2xl (32px), xl (24px), lg (20px)
Body: base (16px), sm (14px)
Small: xs (12px)
```

### Spacing Scale
```
Tailwind defaults: 0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64
```

### Component Variants

**Buttons:**
- Primary: bg-accent, text-white, hover:bg-accent-dark
- Secondary: bg-primary, text-white, hover:bg-primary-dark
- Outline: border-2 border-primary, text-primary, hover:bg-primary hover:text-white
- Ghost: text-primary, hover:bg-primary/10

**Cards:**
- Elevated: shadow-lg, rounded-lg, bg-white
- Outlined: border-2, rounded-lg, bg-white
- Flat: bg-neutral-light, rounded-lg

---

## Content Strategy

### Copywriting Principles
1. **Trust-first:** Lead with credibility (BBB A+, 21+ years, reviews)
2. **Benefit-focused:** Emphasize what customer gains (comfort, honesty, quality)
3. **Conversational:** Warm, approachable, not corporate
4. **Specific:** Use numbers (4.8/5 stars, 468+ reviews, 21+ years)
5. **Differentiation:** Always mention coffee bar (unique selling point)

### Key Messages (Repeat Throughout)
- "Where Quality Auto Care Meets Premium Coffee"
- "21+ Years of Honest, Expert Service"
- "BBB A+ Rated - 4.8/5 Stars from 468+ Reviews"
- "The Only Auto Shop in Moore County with a Gourmet Coffee Bar"
- "Relax in Comfort While We Care For Your Vehicle"
- "Family-Owned, Customer-Focused Since 2003"

### Calls-to-Action (CTAs)
**Primary:**
- "Schedule Service Now"
- "Book Your Appointment"
- "Get Started Today"

**Secondary:**
- "Call Us: (910) 692-3944"
- "Learn More About Our Services"
- "See What Customers Say"
- "View Our Amenities"

**Urgency:**
- "Same-Day Service Available - Call Now"
- "Schedule Today - Limited Slots"

---

## Risk Mitigation

### Potential Issues & Solutions

**Issue:** Forms not submitting on Netlify
**Solution:** Test Netlify Forms in preview deployment before production, ensure form-name attribute matches

**Issue:** Google Maps embed not loading
**Solution:** Use direct embed URL (no API key required), fallback to static map image

**Issue:** Performance scores drop on production
**Solution:** Run Lighthouse CI in GitHub Actions, set minimum thresholds, block merge if failing

**Issue:** Images not optimized
**Solution:** Use next-gen formats (WebP) with fallbacks, implement lazy loading, compress all images

**Issue:** Accessibility violations
**Solution:** Run axe DevTools during development, add to testing checklist, fix before deployment

**Issue:** Mobile menu not working on iOS
**Solution:** Test on real devices (BrowserStack), use touch events instead of click where needed

**Issue:** Build fails on Netlify
**Solution:** Test build locally (`npm run build`), ensure Node version matches (18+), check Netlify logs

**Issue:** SSL certificate not provisioning
**Solution:** Wait up to 24 hours, check DNS propagation, verify domain ownership in Netlify

---

## Success Metrics

### Launch Criteria (All Must Pass)
- ✅ Website live at public Netlify URL
- ✅ All 9 pages render without errors
- ✅ All forms submit and send notifications
- ✅ All navigation links work (no 404s)
- ✅ Mobile responsive (tested on 3 breakpoints)
- ✅ All interactive elements function (accordions, carousels, modals)
- ✅ Google Maps embed loads
- ✅ Phone/email links work
- ✅ SSL certificate active (HTTPS)
- ✅ Unit tests pass (>80% coverage)
- ✅ E2E tests pass (10+ scenarios)
- ✅ Lighthouse scores meet thresholds (all pages)
- ✅ Accessibility audit passes (WCAG AA)
- ✅ No console errors
- ✅ Git repository on GitHub
- ✅ Documentation complete
- ✅ Deployment checklist verified

### Post-Launch KPIs (To Monitor)
- Google PageSpeed Insights scores
- Form submission rate
- Phone click-through rate
- Bounce rate
- Average session duration
- Mobile vs desktop traffic
- Top landing pages
- Most viewed services
- Conversion rate (estimate)

---

## Timeline Estimate

**Total Duration:** 6-7 days (full-time work)

**Day 1:**
- Project setup, dependencies, configuration
- Data files creation
- Core components (Button, Card, FormField)
- Header, Footer, Navigation

**Day 2:**
- Form components (Netlify integration)
- Interactive UI (Accordion, Carousel, Modal)
- Section components (Hero, TrustBar, etc.)

**Day 3:**
- Page development (Home, Services, Tires)
- Routing setup
- Responsive design implementation

**Day 4:**
- Page development (Coffee, About, Reviews, Coupons, Contact, Schedule)
- SEO metadata (all pages)
- Analytics setup
- Accessibility review

**Day 5:**
- Performance optimization
- Unit tests (write & fix)
- E2E tests (write & fix)
- Manual testing

**Day 6:**
- Documentation (README, guides, checklists)
- Git/GitHub setup
- Netlify deployment
- Post-deployment testing

**Day 7:**
- Final verification (all checklists)
- Cross-browser testing
- Lighthouse audits (live site)
- Final report generation

---

## Dependencies & Assumptions

### Dependencies
- Node.js 18+ installed
- npm or yarn package manager
- Git installed
- GitHub account (for repository)
- Netlify account (free tier sufficient)
- Modern browser for testing
- Internet connection for deployment

### Assumptions
- Business information provided is accurate
- Placeholder images acceptable for launch (real photos to be added later)
- No custom backend required (static site sufficient)
- Forms will use Netlify Forms (no third-party form service)
- No payment processing required
- No online booking system integration (manual appointment confirmation)
- Google Maps embed URL acceptable (no custom map styling)
- No live chat widget (can be added later)
- No blog/CMS (static content)

### Out of Scope (Phase 2 Features)
- Online payment processing
- Real-time appointment booking system
- Customer portal/login
- Live chat integration
- Blog/news section with CMS
- E-commerce for parts/accessories
- Vehicle service history tracking
- SMS appointment reminders
- Multi-language support
- Advanced analytics dashboard

---

## Next Steps After Approval

1. Create project directory structure
2. Initialize Vite React project
3. Install all dependencies
4. Configure Tailwind CSS
5. Set up ESLint & Prettier
6. Initialize Git repository
7. Create all data files (services.js, testimonials.js, etc.)
8. Begin component development (Button, Card, FormField)
9. Continue following implementation order in Phase section

---

## Questions for Stakeholder (If Any)

Before proceeding, confirm:
1. ✅ Is the business information accurate (hours, phone, address)?
2. ✅ Are placeholder images acceptable for initial launch?
3. ✅ Is Netlify Forms sufficient for form handling (no custom backend)?
4. ✅ Are the proposed 9 pages comprehensive, or are additional pages needed?
5. ✅ Is same-day appointment confirmation acceptable (no real-time booking)?
6. ✅ Should we include a blog section (adds complexity)?
7. ✅ Are there existing brand assets (logo, images) or should we create placeholders?
8. ✅ Is Google Analytics 4 the preferred analytics platform?

---

## Plan Summary

This plan outlines a comprehensive, production-ready website for PJ's Auto Care & Gourmet Coffee using modern web technologies (React, Vite, Tailwind CSS) deployed to Netlify for zero-cost hosting with automatic deployments.

**Key Strengths:**
- ✅ Modern, performant tech stack
- ✅ No manual server management required
- ✅ Auto-deploy on git push
- ✅ Built-in form handling (no backend code)
- ✅ Comprehensive testing strategy
- ✅ SEO & accessibility baked in
- ✅ Fully documented for maintenance
- ✅ Scalable architecture

**Deliverables:**
- Fully functional, live website
- Complete test suite (unit + E2E)
- Comprehensive documentation
- GitHub repository
- Automated deployment pipeline
- Performance optimization
- Accessibility compliance
- SEO implementation

**Total Cost:** $0 (using free tiers)
- Netlify: Free
- GitHub: Free
- Google Analytics: Free
- Testing tools: Free/open-source

---

## Approval Request

**This plan is ready for review and approval.**

Please review the above plan and confirm:
1. Technology stack is acceptable
2. Feature scope is complete
3. Timeline is reasonable
4. Approach is sound

**To proceed, please respond with:**
- ✅ "Approved" or "Proceed" to begin implementation
- ❓ Questions or requested changes

Once approved, I will begin systematic execution following the implementation order outlined above.

---

*Plan created: 2025-11-22*
*Plan version: 1.0*
*Estimated completion: 6-7 days from approval*
