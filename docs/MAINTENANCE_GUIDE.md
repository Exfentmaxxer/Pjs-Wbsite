# 🔧 Website Maintenance Guide

Complete guide for updating and maintaining the PJ's Auto Care & Gourmet Coffee website.

---

## 📞 Quick Reference

### Business Information Files
- **Contact & Hours:** `/src/data/businessInfo.js`
- **Services:** `/src/data/services.js`
- **Testimonials:** `/src/data/testimonials.js`
- **Coupons:** `/src/data/coupons.js`
- **FAQs:** `/src/data/faqs.js`
- **Tires:** `/src/data/tires.js`

### After Making Changes
```bash
# Test locally
npm run dev

# Build for production
npm run build

# Deploy
git add .
git commit -m "Description of changes"
git push
```

---

## 📋 Common Updates

### 1. Updating Business Hours

**File:** `/src/data/businessInfo.js`

**Location:** Line 28-36

```javascript
hours: {
  monday: { open: '7:30 AM', close: '5:00 PM', isOpen: true },
  tuesday: { open: '7:30 AM', close: '5:00 PM', isOpen: true },
  // ... update as needed
  sunday: { open: 'Closed', close: 'Closed', isOpen: false }
}
```

**Example: Adding holiday hours**
```javascript
// Add after hours object
holidays: {
  thanksgiving: { date: '2024-11-28', status: 'Closed' },
  christmas: { date: '2024-12-25', status: 'Closed' },
}
```

---

### 2. Updating Contact Information

**File:** `/src/data/businessInfo.js`

**Phone Numbers** (Line 21-26):
```javascript
contact: {
  mainPhone: '(910) 692-3944',      // Main customer line
  servicePhone: '(910) 692-0744',    // Service appointments
  fax: '(910) 692-3362',             // Fax number
  email: 'info@pjsautocare.net'      // Contact email
}
```

**Social Media** (Line 48-53):
```javascript
social: {
  facebook: 'https://www.facebook.com/pjsautocare',
  google: 'https://www.google.com/maps/place/pjsautocare',
  yelp: 'https://www.yelp.com/biz/pjs-auto-care',
  // Add new platforms as needed
}
```

---

### 3. Adding a New Service

**File:** `/src/data/services.js`

**Step 1:** Find the appropriate category (Line 1-330)

**Step 2:** Add service object to category's `services` array:

```javascript
{
  id: 'new-service',                    // Unique ID (lowercase, hyphenated)
  name: 'New Service Name',             // Display name
  description: 'Service description',    // What this service does
  benefits: [                            // Bullet points (3-5)
    'First benefit',
    'Second benefit',
    'Third benefit'
  ],
  estimatedTime: '1-2 hours'            // How long it takes
}
```

**Example: Adding "Window Tinting"**
```javascript
// In 'routine-maintenance' category, add to services array:
{
  id: 'window-tinting',
  name: 'Window Tinting',
  description: 'Professional automotive window tinting for heat reduction and privacy',
  benefits: [
    'Reduces interior heat by up to 60%',
    'UV protection for you and interior',
    'Enhanced privacy and security',
    'Lifetime warranty on film'
  ],
  estimatedTime: '2-3 hours'
}
```

---

### 4. Removing a Service

**File:** `/src/data/services.js`

**Step 1:** Find the service in the appropriate category

**Step 2:** Delete the entire service object (including curly braces and comma)

**Before:**
```javascript
services: [
  { id: 'oil-change', name: 'Oil Change', ... },
  { id: 'old-service', name: 'Old Service', ... },  // ← Remove this
  { id: 'tire-rotation', name: 'Tire Rotation', ... }
]
```

**After:**
```javascript
services: [
  { id: 'oil-change', name: 'Oil Change', ... },
  { id: 'tire-rotation', name: 'Tire Rotation', ... }
]
```

---

### 5. Updating Service Prices

**File:** `/src/data/services.js`

**Featured Services** (Line 333-376):

```javascript
{
  id: 'oil-change',
  name: 'Oil Changes',
  price: 'from $39.95',    // ← Update this
  // ...
}
```

**Note:** For detailed pricing, you can add a `price` field to individual services in their categories.

---

### 6. Adding Customer Testimonials

**File:** `/src/data/testimonials.js`

**Step 1:** Add to `testimonials` array (Line 1-150):

```javascript
{
  id: 16,                              // Next sequential number
  name: 'Customer Name',               // Full name
  service: 'Service Received',         // Which service
  rating: 5,                           // 1-5 stars
  date: '2024-12-15',                 // YYYY-MM-DD format
  text: 'Full review text here...',    // Customer's words
  source: 'Google',                    // Google, Yelp, CARFAX, BBB, Facebook
  verified: true,                      // Always true for real reviews
  featured: true                       // Show on homepage? true/false
}
```

**Step 2:** Update review statistics (Line 152-165):

```javascript
export const reviewStats = {
  totalReviews: 469,           // Increment this
  averageRating: 4.8,          // Update if average changes
  ratingBreakdown: {
    5: 421,                    // Increment appropriate rating
    4: 35,
    3: 8,
    2: 3,
    1: 2
  }
}
```

---

### 7. Creating New Coupons

**File:** `/src/data/coupons.js`

**Step 1:** Add to `coupons` array (Line 1-120):

```javascript
{
  id: 'coup-009',                      // Next sequential number
  title: 'Coupon Title',               // Short, descriptive
  description: 'Full description...',  // What customer gets
  discount: '$20 OFF',                 // Discount amount (or 'FREE')
  code: 'SAVE20',                      // Coupon code (uppercase)
  validUntil: '2025-06-30',           // Expiration date (YYYY-MM-DD)
  terms: [                             // Terms and conditions
    'First term',
    'Second term',
    'Must present coupon'
  ],
  image: 'https://placehold.co/...',  // Placeholder (update later)
  featured: true                       // Show prominently? true/false
}
```

**Example: Holiday Special**
```javascript
{
  id: 'coup-009',
  title: 'Holiday Oil Change Special',
  description: 'Give your car a gift this holiday season! $15 off any oil change.',
  discount: '$15 OFF',
  code: 'HOLIDAY15',
  validUntil: '2025-01-31',
  terms: [
    'Valid on full-service oil changes only',
    'One coupon per customer',
    'Cannot be combined with other offers',
    'Must present coupon at time of service'
  ],
  image: 'https://placehold.co/400x250/EF4444/FFFFFF?text=Holiday+Special',
  featured: true
}
```

---

### 8. Expiring Old Coupons

**Option 1: Remove completely**
**File:** `/src/data/coupons.js`

Delete the entire coupon object from the array.

**Option 2: Mark as expired (keep for reference)**

Add `expired: true` field:
```javascript
{
  id: 'coup-001',
  title: '$10 Off Oil Change',
  expired: true,                 // ← Add this
  // ... rest of coupon
}
```

Then update the Coupons page to filter out expired coupons.

---

### 9. Adding/Updating FAQs

**File:** `/src/data/faqs.js`

**Adding New FAQ** (Line 1-180):

```javascript
{
  id: 21,                              // Next sequential number
  category: 'General',                 // General, Services, Appointments, Pricing, Tires
  question: 'Your question here?',     // Clear, concise
  answer: 'Detailed answer...'         // Full, helpful response
}
```

**Example:**
```javascript
{
  id: 21,
  category: 'Services',
  question: 'Do you offer fleet services for businesses?',
  answer: 'Yes! We offer fleet maintenance services for businesses of all sizes. We accept national accounts and can provide regular maintenance schedules, priority service, and detailed reporting for your vehicles. Contact us at (910) 692-3944 to discuss your fleet needs.'
}
```

**Updating Existing FAQ:**

Find the FAQ by `id` or `question`, then update the `answer` field.

**Deleting FAQ:**

Remove the entire FAQ object from the array.

---

### 10. Updating Statistics

**File:** `/src/data/businessInfo.js`

**Line 56-62:**

```javascript
stats: {
  established: 2003,                           // Founding year (don't change)
  establishedDate: 'November 19, 2003',        // Full date (don't change)
  yearsInBusiness: new Date().getFullYear() - 2003,  // Auto-calculates!
  reviewCount: 468,                            // ← Update this regularly
  rating: 4.8,                                 // ← Update if average changes
  bbbRating: 'A+',                            // BBB rating
  bbbAccredited: true                          // BBB accreditation status
}
```

**When to Update:**
- `reviewCount`: Monthly or when significant new reviews received
- `rating`: When average rating changes (calculate from all reviews)
- `bbbRating`: If BBB rating changes (rare)

---

### 11. Adding New Team Members

**File:** `/src/pages/About.jsx`

**Find the team section** (around line 80-100):

```javascript
const team = [
  {
    name: 'New Team Member',
    title: 'Position Title',
    image: '/images/team/name.webp',
    bio: 'Short biography (2-3 sentences).'
  },
  // ... existing team members
]
```

**Don't forget to add their photo!**
See `/docs/PHOTO_GUIDE.md` for specifications.

---

### 12. Seasonal Updates

#### Winter Preparation (October-November)

**Update homepage hero message:**
**File:** `/src/pages/Home.jsx`
```javascript
<Hero
  title="Prepare Your Vehicle for Winter"
  subtitle="Battery testing, heating system checks, and more!"
/>
```

**Add winter coupons:**
**File:** `/src/data/coupons.js`
```javascript
{
  title: 'Winter Prep Package',
  discount: '$50 OFF',
  // ... winter-specific services
}
```

#### Summer Preparation (April-May)

**Update homepage focus:**
```javascript
<Hero
  title="Beat the Heat This Summer"
  subtitle="AC service, coolant checks, and cooling system maintenance"
/>
```

**Add summer coupons:**
```javascript
{
  title: 'AC Service Special',
  discount: '$50 OFF',
  // ... summer services
}
```

---

### 13. Emergency Updates (Business Closures)

**For unexpected closures** (weather, emergency):

**Option 1: Quick Homepage Banner**

**File:** `/src/pages/Home.jsx`

Add at top of page:
```javascript
<div className="bg-red-600 text-white py-3 text-center font-semibold">
  ⚠️ CLOSED TODAY due to severe weather. We'll reopen tomorrow at 7:30 AM.
</div>
```

**Option 2: Update Hours**

**File:** `/src/data/businessInfo.js`

Temporarily set `isOpen: false` for affected days.

**Option 3: Social Media**

Post on Facebook, Google Business Profile with closure notice.

---

## 🚀 Deployment Process

### Automatic Deployment (Recommended)

**When connected to Netlify:**

1. Make changes to files
2. Test locally: `npm run dev`
3. Commit changes:
   ```bash
   git add .
   git commit -m "Updated business hours for holiday season"
   git push
   ```
4. Netlify automatically deploys in 2-3 minutes
5. Check live site to verify

### Manual Deployment

```bash
# Build production version
npm run build

# Deploy using Netlify CLI
netlify deploy --prod
```

---

## ✅ Pre-Deployment Checklist

Before pushing changes:

- [ ] Test locally (`npm run dev`)
- [ ] Check for typos/grammar
- [ ] Verify phone numbers/links work
- [ ] Review on mobile screen size
- [ ] Clear browser cache and test
- [ ] Check console for errors (F12 in browser)

---

## 🆘 Troubleshooting

### "Changes aren't showing on live site"

**Solution:**
1. Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Check Netlify deploy status: https://app.netlify.com
4. Verify changes were committed: `git log`

### "Build failed on Netlify"

**Solution:**
1. Check Netlify deploy logs for errors
2. Test build locally: `npm run build`
3. Fix any JavaScript syntax errors
4. Ensure all imports are correct
5. Push fix: `git add . && git commit -m "Fix build error" && git push`

### "Form submissions not working"

**Solution:**
1. Verify Netlify Forms are detected (check Netlify dashboard)
2. Ensure forms have `data-netlify="true"` attribute
3. Check spam folder for form notifications
4. Update notification email in Netlify dashboard

### "Images not loading"

**Solution:**
1. Check file path (case-sensitive!)
2. Verify image exists in `/public/images/`
3. Check file permissions
4. Clear browser cache

---

## 📝 Content Writing Tips

### Headlines
- Keep under 60 characters for SEO
- Start with action verbs
- Include location ("Southern Pines") when relevant
- Emphasize unique selling points (coffee bar!)

### Service Descriptions
- Start with benefit to customer
- Keep to 1-2 sentences
- Use simple language (avoid jargon)
- Include estimated time

### Testimonials
- Use customer's exact words (with permission)
- Include first name + last initial for privacy
- Specify which service they received
- Feature diverse services

### Coupons
- Clear, specific discount amount
- Simple terms (3-5 bullet points max)
- Realistic expiration dates (3-6 months)
- Include "must present coupon" in terms

---

## 🎯 SEO Best Practices

### When Adding New Content

**Always include:**
- Relevant keywords (auto repair, Southern Pines, Moore County, tire service, etc.)
- Location mentions (Southern Pines, Pinehurst, Aberdeen)
- Service-specific terms
- Natural language (don't stuff keywords)

**Page Titles:**
- 50-60 characters max
- Include primary keyword
- Include location
- Format: "Service | Business Name | Location"

**Meta Descriptions:**
- 150-160 characters
- Include call-to-action
- Mention unique selling points (coffee bar!)

---

## 📅 Maintenance Schedule

### Weekly
- [ ] Check for new reviews (Google, Yelp, Facebook)
- [ ] Add notable reviews to testimonials
- [ ] Update social media with promotions

### Monthly
- [ ] Review and update review count/rating
- [ ] Check for expired coupons
- [ ] Review Google Analytics for popular pages
- [ ] Update seasonal content if needed

### Quarterly
- [ ] Add new customer testimonials
- [ ] Create new seasonal coupons
- [ ] Review and update service prices
- [ ] Update FAQs based on common questions

### Annually
- [ ] Update "years in business" (auto-calculated!)
- [ ] Refresh team photos
- [ ] Update certifications/accreditations
- [ ] Review all content for accuracy
- [ ] Replace dated testimonials with recent ones

---

## 📞 Need Help?

### Technical Issues
- Check `/docs/` folder for guides
- Review `README.md` for setup instructions
- Contact web development team

### Content Questions
- Jerry & Paula Ullman (owners)
- Phone: (910) 692-3944

### Emergency Website Issues
- Check Netlify status: https://www.netlifystatus.com
- Roll back to previous version in Netlify dashboard

---

## 🔐 Important: Don't Edit These Files

Unless you know what you're doing, **don't modify:**

- `/src/components/` (UI components)
- `/src/utils/` (helper functions)
- `/src/hooks/` (custom React hooks)
- `/src/router.jsx` (routing configuration)
- `/vite.config.js` (build configuration)
- `/tailwind.config.js` (styling configuration)
- `/package.json` (dependencies)

**Safe to edit:**
- `/src/data/*.js` (all data files)
- `/public/images/` (add new images)
- `/docs/*.md` (documentation)

---

## 📊 Tracking Success

### Google Analytics (after setup)

**Monitor:**
- Page views (which pages are most popular?)
- Form submissions (how many appointments?)
- Phone clicks (are people calling?)
- Traffic sources (where do visitors come from?)

**Location:** https://analytics.google.com (after GA4 setup)

### Netlify Analytics

**Included:**
- Page views
- Unique visitors
- Top pages
- Top sources

**Location:** Netlify dashboard → Analytics tab

---

*Last updated: 2024 | Version 1.0*

For more guides, see:
- `/docs/PHOTO_GUIDE.md` - Photo specifications
- `/README.md` - Technical documentation
