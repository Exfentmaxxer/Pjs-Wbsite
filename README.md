# PJ's Auto Care & Gourmet Coffee - Official Website

> **Production-ready website for PJ's Auto Care & Gourmet Coffee**
> Where Quality Auto Care Meets Premium Coffee • Southern Pines, NC

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

---

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment
This site auto-deploys to Netlify on every push to the main branch.

---

## 📋 Project Overview

This is a modern, fully-responsive website for **PJ's Auto Care & Gourmet Coffee**, a family-owned automotive service center with a unique gourmet coffee bar experience in Southern Pines, NC.

### Key Features
- ✅ **9 Complete Pages** (Home, Services, Tires, Coffee & Amenities, About, Reviews, Coupons, Contact, Schedule)
- ✅ **Netlify Forms Integration** (Contact, Service Request, Appointments, Newsletter)
- ✅ **SEO Optimized** (Meta tags, Open Graph, Structured Data/JSON-LD)
- ✅ **Fully Responsive** (Mobile-first design)
- ✅ **Accessible** (WCAG 2.1 AA compliant)
- ✅ **Performance Optimized** (Lazy loading, code splitting, optimized images)
- ✅ **Interactive UI** (Carousels, accordions, modals, lightbox)
- ✅ **Google Analytics Ready** (GA4 placeholder integration)

---

## 🏗️ Technology Stack

- **Framework:** React 18.2
- **Build Tool:** Vite 5.x
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS 3.x
- **Icons:** Lucide React
- **Forms:** Netlify Forms (no backend required)
- **Hosting:** Netlify
- **Analytics:** Google Analytics 4 (placeholder)

---

## 📁 Project Structure

```
pjs-auto-care-website/
├── public/
│   ├── _redirects              # Netlify SPA routing
│   ├── robots.txt              # Search engine directives
│   ├── sitemap.xml             # SEO sitemap
│   └── favicon.ico             # Browser icon
│
├── src/
│   ├── components/
│   │   ├── common/             # Header, Footer, Navigation, Button, Card
│   │   ├── forms/              # ContactForm, ServiceRequestForm, AppointmentForm
│   │   ├── sections/           # Hero, ServicesGrid, TestimonialsCarousel
│   │   └── ui/                 # Accordion, Carousel, Modal, Tabs, Toast
│   │
│   ├── pages/                  # 10 pages (Home, Services, Tires, etc.)
│   │
│   ├── data/                   # Static data (services, testimonials, FAQs)
│   │   ├── businessInfo.js     # Contact, hours, address
│   │   ├── services.js         # Service catalog
│   │   ├── testimonials.js     # Customer reviews
│   │   ├── faqs.js            # FAQ content
│   │   ├── tires.js           # Tire data
│   │   └── coupons.js         # Special offers
│   │
│   ├── utils/                  # Helper functions
│   │   ├── validation.js       # Form validation
│   │   ├── analytics.js        # GA4 tracking
│   │   ├── helpers.js          # General utilities
│   │   └── seo.js             # SEO meta tags
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useForm.js
│   │   ├── useIntersectionObserver.js
│   │   ├── useMediaQuery.js
│   │   └── useScrollPosition.js
│   │
│   ├── styles/
│   │   └── index.css           # Global styles + Tailwind
│   │
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── router.jsx              # Route configuration
│
├── docs/                       # Documentation
│   ├── PLAN.md                 # Project plan
│   ├── PHOTO_GUIDE.md          # Photo replacement guide
│   └── MAINTENANCE_GUIDE.md    # Content update instructions
│
├── netlify.toml                # Netlify configuration
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── README.md                   # This file
```

---

## 🎨 Design System

### Color Palette
```css
/* Primary (Automotive Blue) */
--primary: #1E3A8A
--primary-light: #3B82F6
--primary-dark: #1E40AF

/* Secondary (Coffee Brown) */
--secondary: #78350F
--secondary-light: #92400E
--secondary-dark: #451A03

/* Accent (Trust Gold) */
--accent: #F59E0B
--accent-light: #FBBF24
--accent-dark: #D97706

/* Neutrals */
--neutral-dark: #1F2937
--neutral-light: #F3F4F6
```

### Typography
- **Headings:** Poppins (bold, 700-900)
- **Body:** Inter (regular, 400-600)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 📝 Content Management

### Updating Business Information
Edit `/src/data/businessInfo.js` to update:
- Contact information (phone, email, address)
- Business hours
- Social media links
- Stats (years in business, reviews, rating)

### Updating Services
Edit `/src/data/services.js` to:
- Add/remove service categories
- Update service descriptions
- Modify pricing
- Change estimated service times

### Updating Testimonials
Edit `/src/data/testimonials.js` to:
- Add new customer reviews
- Update review statistics
- Feature specific reviews

### Updating Coupons
Edit `/src/data/coupons.js` to:
- Add new promotional offers
- Update expiration dates
- Modify discount amounts

### Updating FAQs
Edit `/src/data/faqs.js` to:
- Add new frequently asked questions
- Update existing answers
- Organize by category

---

## 🖼️ Replacing Placeholder Images

All images currently use https://placehold.co placeholders. See `/docs/PHOTO_GUIDE.md` for:
- Required image dimensions
- Recommended file formats (WebP with JPG/PNG fallbacks)
- Naming conventions
- Optimization guidelines

### Quick Image Replacement Checklist:
1. **Hero Images** (1920x1080) - Homepage, Services, Tires, etc.
2. **Service Icons** (400x400) - Service category visuals
3. **Team Photos** (600x600) - Jerry & Paula Ullman
4. **Facility Photos** (800x600) - Waiting area, coffee bar, shop
5. **Logo** - SVG format recommended
6. **Favicon** - 32x32 and 192x192 PNG

---

## 📧 Form Configuration

### Netlify Forms Setup
Forms are automatically detected by Netlify when deployed. To receive form submissions:

1. **Deploy site to Netlify**
2. **Configure email notifications:**
   - Go to Netlify dashboard → Site settings → Forms
   - Add notification email addresses
   - Set up Slack/Discord webhooks (optional)

3. **Forms included:**
   - Contact Form (Contact page)
   - Service Request Form (Homepage - sticky)
   - Appointment Form (Schedule page)
   - Newsletter Signup (Footer + Coupons page)

4. **Spam Protection:**
   - Netlify honeypot enabled on all forms
   - No CAPTCHA required

---

## 🔍 SEO Configuration

### Meta Tags
Each page has unique meta tags configured in the page component:
- Title (60 chars max)
- Description (155 chars max)
- Keywords
- Open Graph tags (Facebook, Twitter)
- Canonical URLs

### Structured Data (JSON-LD)
- LocalBusiness schema (all pages)
- BreadcrumbList schema (navigation)
- Service schema (Services page)

### Sitemap
Located at `/public/sitemap.xml` - Update URLs when deploying to custom domain.

### Robots.txt
Located at `/public/robots.txt` - Allows all search engines by default.

---

## 📊 Analytics Setup

### Google Analytics 4
1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (G-XXXXXXXXXX)
3. Update `/src/utils/analytics.js`:
   ```js
   export const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with your ID
   ```
4. Add GA4 script to `/index.html`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Tracked Events
- Form submissions
- Phone clicks
- Email clicks
- CTA button clicks
- Service views
- Coupon views/downloads
- Directions clicks
- Social media clicks
- Review platform clicks

---

## 🚀 Deployment

### Automatic Deployment (Recommended)

1. **Connect to Netlify:**
   ```bash
   # Install Netlify CLI (if not installed)
   npm install -g netlify-cli

   # Login to Netlify
   netlify login

   # Initialize site
   netlify init
   ```

2. **Follow prompts:**
   - Create new site or link existing
   - Connect to Git repository
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Auto-deploy on push:**
   - Every push to main branch triggers deployment
   - Pull request previews automatically generated

### Manual Deployment

```bash
# Build production version
npm run build

# Deploy to Netlify
netlify deploy --prod
```

### Custom Domain Setup

1. **Add custom domain in Netlify:**
   - Netlify dashboard → Domain settings → Add custom domain

2. **Update DNS:**
   - Add Netlify nameservers or A record
   - Wait for DNS propagation (up to 24 hours)

3. **Enable HTTPS:**
   - Automatic with Let's Encrypt
   - Force HTTPS redirect enabled by default

4. **Update sitemap & robots.txt:**
   - Replace `www.pjsautocare.net` with your domain
   - Located in `/public/sitemap.xml` and `/public/robots.txt`

---

## ♿ Accessibility

### WCAG 2.1 AA Compliance
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states (outline on focus)
- Color contrast ratios ≥ 4.5:1
- Skip-to-main-content link
- Alt text on all images
- Form labels and error messages

### Testing
Use browser tools:
- **Chrome DevTools:** Lighthouse (Accessibility audit)
- **axe DevTools:** Browser extension for accessibility testing
- **WAVE:** Web accessibility evaluation tool

---

## 🧪 Testing

### Development Testing
```bash
# Lint code
npm run lint

# Format code
npm run format
```

### Browser Testing
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing
Use Lighthouse in Chrome DevTools:
- Performance: Target >90
- Accessibility: Target >95
- Best Practices: Target >90
- SEO: Target >95

---

## 📞 Support & Maintenance

### Updating Content
See `/docs/MAINTENANCE_GUIDE.md` for detailed instructions on:
- Updating business hours
- Adding new services
- Updating prices
- Managing testimonials
- Creating new coupons
- Updating FAQs

### Common Issues

**Issue:** Form submissions not sending emails
**Solution:** Check Netlify dashboard → Forms → Notification settings

**Issue:** Images not loading
**Solution:** Check file paths and ensure images are in `/public` folder

**Issue:** Site not updating after deploy
**Solution:** Clear browser cache or use hard refresh (Ctrl+Shift+R)

**Issue:** Build failing
**Solution:** Check Netlify deploy logs for errors, verify Node version is 18+

---

## 📄 License

Copyright © 2024 PJ's Auto Care & Gourmet Coffee. All rights reserved.

---

## 👤 Contact

**PJ's Auto Care & Gourmet Coffee**
185 Partner Circle
Southern Pines, NC 28387

- **Phone:** (910) 692-3944
- **Service:** (910) 692-0744
- **Email:** info@pjsautocare.net
- **Web:** www.pjsautocare.net

**Business Hours:**
- Monday - Friday: 7:30 AM - 5:00 PM
- Saturday: 7:30 AM - 4:00 PM
- Sunday: Closed

---

## 🏆 Credits

**Built with:**
- React + Vite
- Tailwind CSS
- Lucide React Icons
- Netlify Platform

**Developed:** 2024
**Version:** 1.0.0

---

*For technical support or website updates, contact the development team or refer to the documentation in `/docs/`.*
