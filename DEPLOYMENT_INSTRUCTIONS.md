# 🚀 Deployment Instructions

## Quick Deploy to Netlify

### Option 1: Netlify CLI (Recommended for First Deploy)

```bash
# 1. Install Netlify CLI globally
npm install -g netlify-cli

# 2. Login to Netlify (opens browser)
netlify login

# 3. Initialize and deploy
netlify init

# Follow prompts:
# - Create & configure a new site
# - Team: Select your team
# - Site name: pjs-auto-care (or your choice)
# - Build command: npm run build
# - Publish directory: dist
# - Link to GitHub repo: Yes

# 4. Deploy to production
netlify deploy --prod

# Your site will be live at: https://pjs-auto-care.netlify.app
```

### Option 2: Netlify Dashboard (Easiest)

1. **Go to:** https://app.netlify.com
2. **Click:** "Add new site" → "Import an existing project"
3. **Connect:** GitHub repository
4. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18
5. **Click:** "Deploy site"
6. **Wait 2-3 minutes** for build to complete

### Option 3: Drag & Drop (Manual)

```bash
# 1. Build locally
npm run build

# 2. Go to: https://app.netlify.com/drop
# 3. Drag the entire "dist" folder onto the page
# 4. Site is live immediately!
```

---

## Post-Deployment Configuration

### 1. Custom Domain Setup (Optional)

**If you have pjsautocare.net domain:**

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter: `www.pjsautocare.net`
4. Update DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: [your-site-name].netlify.app
   ```
5. Enable HTTPS (automatic via Let's Encrypt)

### 2. Configure Netlify Forms

**Enable form notifications:**

1. Go to Site settings → Forms
2. Click "Form notifications"
3. Add email notification:
   - Email to notify: info@pjsautocare.net
   - Event: New form submission
4. Test each form:
   - Contact Form
   - Service Request Form
   - Appointment Form
   - Newsletter Signup

### 3. Set Up Environment Variables (Optional)

If you add Google Analytics:

1. Go to Site settings → Environment variables
2. Add variable:
   - Key: `VITE_GA_TRACKING_ID`
   - Value: `G-XXXXXXXXXX` (your GA4 ID)
3. Redeploy site

### 4. Update Sitemap & URLs

After deploying to custom domain:

1. **Update sitemap.xml:**
   - File: `/public/sitemap.xml`
   - Replace `www.pjsautocare.net` with your actual domain
   - Redeploy

2. **Update robots.txt:**
   - File: `/public/robots.txt`
   - Update sitemap URL
   - Redeploy

3. **Submit to Google:**
   - Google Search Console: https://search.google.com/search-console
   - Add property (your domain)
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

---

## Verification Checklist

After deployment, verify:

- [ ] **Homepage loads** correctly
- [ ] **All 9 pages accessible:**
  - [ ] Home (/)
  - [ ] Services (/services)
  - [ ] Tires (/tires)
  - [ ] Coffee & Amenities (/coffee-amenities)
  - [ ] About (/about)
  - [ ] Reviews (/reviews)
  - [ ] Coupons (/coupons)
  - [ ] Contact (/contact)
  - [ ] Schedule (/schedule)
- [ ] **Navigation works** (desktop & mobile)
- [ ] **Mobile menu** opens/closes
- [ ] **All forms submit:**
  - [ ] Contact form
  - [ ] Service request form
  - [ ] Appointment form
  - [ ] Newsletter signup
- [ ] **Form notification emails received**
- [ ] **Phone numbers clickable** on mobile
- [ ] **Email links work**
- [ ] **Google Maps loads** on Contact page
- [ ] **Testimonials carousel** auto-plays
- [ ] **Accordions expand/collapse** (Services page)
- [ ] **Images load** (even placeholders)
- [ ] **No console errors** (F12 Developer Tools)
- [ ] **SSL certificate active** (HTTPS)
- [ ] **Responsive on mobile** (test multiple screen sizes)

---

## Performance Testing

### Run Lighthouse Audit

1. Open site in Chrome
2. Press F12 (Developer Tools)
3. Go to "Lighthouse" tab
4. Select: Performance, Accessibility, Best Practices, SEO
5. Click "Analyze page load"

**Target Scores:**
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >95

### Test on Multiple Devices

- [ ] Desktop (Chrome, Firefox, Edge, Safari)
- [ ] Tablet (iPad, Android tablet)
- [ ] Mobile (iPhone, Android phone)
- [ ] Different screen sizes

---

## Continuous Deployment

**Auto-deploy is already configured!**

Every time you push to the main branch:
1. Netlify detects the push
2. Runs `npm run build`
3. Deploys new version
4. Site updates in 2-3 minutes

**To make updates:**
```bash
# 1. Make changes to files
# 2. Test locally
npm run dev

# 3. Commit and push
git add .
git commit -m "Description of changes"
git push

# 4. Wait 2-3 minutes - site auto-updates!
```

---

## Troubleshooting

### Build Fails on Netlify

**Check deploy log for errors:**
1. Go to Netlify dashboard → Deploys
2. Click failed deploy
3. View build log

**Common fixes:**
- Missing dependencies: `npm install`
- Node version mismatch: Set Node 18 in environment
- Build command wrong: Should be `npm run build`
- Publish directory wrong: Should be `dist`

### Forms Not Working

**Ensure forms are detected:**
1. Check Netlify dashboard → Forms tab
2. Should see: contact, service-request, appointment, newsletter
3. If missing, check form has `data-netlify="true"`
4. Redeploy

**Email notifications not sending:**
1. Site settings → Forms → Notifications
2. Add email address
3. Test form submission
4. Check spam folder

### Site Not Updating

1. Hard refresh browser: Ctrl+Shift+R
2. Check deploy status in Netlify
3. Verify changes were committed: `git log`
4. Clear Netlify cache and redeploy

---

## Next Steps After Deployment

1. **Replace placeholder images**
   - See `/docs/PHOTO_GUIDE.md`
   - Upload professional photos

2. **Set up Google Analytics**
   - Create GA4 property
   - Add tracking code to `/index.html`
   - Update tracking ID in `/src/utils/analytics.js`

3. **Submit to Google**
   - Google Search Console
   - Google My Business
   - Bing Webmaster Tools

4. **Social Media**
   - Update Facebook page with website link
   - Update Google Business Profile
   - Add website to Yelp listing

5. **Monitor**
   - Check Netlify Analytics weekly
   - Review Google Analytics monthly
   - Test forms monthly
   - Update content quarterly

---

## Support Resources

- **Netlify Docs:** https://docs.netlify.com
- **Netlify Support:** https://answers.netlify.com
- **Project Documentation:** See `/README.md`
- **Maintenance Guide:** See `/docs/MAINTENANCE_GUIDE.md`
- **Photo Guide:** See `/docs/PHOTO_GUIDE.md`

---

## Deployment Checklist Summary

**Pre-Deployment:**
- [x] All code complete
- [x] Build tested locally
- [x] Documentation created
- [x] Netlify.toml configured
- [x] Forms ready
- [x] SEO metadata complete

**Deploy:**
- [ ] Choose deployment method (CLI, Dashboard, or Drop)
- [ ] Deploy to Netlify
- [ ] Verify site is live
- [ ] Test all functionality

**Post-Deployment:**
- [ ] Configure custom domain (if applicable)
- [ ] Set up form notifications
- [ ] Update sitemap URLs
- [ ] Run Lighthouse audit
- [ ] Test on multiple devices
- [ ] Submit sitemap to Google

**Ongoing:**
- [ ] Replace placeholder images
- [ ] Set up Google Analytics
- [ ] Monitor performance
- [ ] Update content regularly

---

*Your website is production-ready and waiting to be deployed!*

**Estimated deployment time:** 5-10 minutes
**Auto-deploy configured:** Yes (on git push)
**SSL/HTTPS:** Automatic
**Cost:** $0 (Netlify free tier)

🎉 **Congratulations! You're ready to launch!**
