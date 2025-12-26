# Image Assets Guide: Storyset & Blush.design Illustrations

## Overview

Based on the Visual Sitemap PDF, you need illustrations from **Storyset** and **Blush.design** for various pages. This guide explains how to get them and where to place them.

---

## Where to Get the Images

### 1. Storyset (https://storyset.com)

**How to Access:**
1. Go to https://storyset.com
2. Create a free account (or use existing)
3. Search for the specific illustration names mentioned below
4. Customize colors if needed (to match your brand colors)
5. Download in **PNG** or **SVG** format
6. Recommended size: **1200px - 1800px width** for web use

**Free vs Premium:**
- Free account: Limited downloads, watermark on some illustrations
- Premium: No watermarks, unlimited downloads, more customization

### 2. Blush.design (https://blush.design)

**How to Access:**
1. Go to https://blush.design
2. Create a free account
3. Search for the illustration style mentioned
4. Customize colors and characters
5. Download in **PNG** or **SVG** format
6. Recommended size: **1200px - 1800px width**

**Free vs Premium:**
- Free: Limited customization, attribution required
- Premium: Full customization, no attribution needed

---

## Required Images by Page

### Homepage (`/`)

#### 1. Hero Section
- **Source**: Storyset – Medical Care
- **Search Term**: "Home nursing visit" or "nurse visiting home"
- **File Location**: `/public/images/home/hero-nursing-visit.png`
- **Component**: `src/components/home/Hero.tsx`
- **Current**: Using `/hero.png` (placeholder)

#### 2. Why Choose Us Section
- **Source**: Storyset – Home Care
- **Search Term**: "Caregiver helping senior at home"
- **File Location**: `/public/images/home/caregiver-helping.png`
- **Component**: `src/components/home/WhyChooseUs.tsx`
- **Current**: No image (icons only)

#### 3. Services Overview
- **Source**: Medical Line Icons (already using Lucide icons - may not need new images)
- **Note**: Current implementation uses icons, may not need illustration

---

### Services Page (`/services`)

#### 1. Skilled Nursing Section
- **Source**: Storyset – Nursing
- **Search Term**: "Nurse monitoring patient vitals"
- **File Location**: `/public/images/services/nurse-vitals.png`
- **Component**: `src/app/services/page.tsx`
- **Current**: Placeholder gradient box

#### 2. Personal Care Section
- **Source**: Storyset – Patient Support
- **Search Term**: "Daily living assistance"
- **File Location**: `/public/images/services/daily-living.png`
- **Component**: `src/app/services/page.tsx`
- **Current**: Placeholder gradient box

#### 3. Medication Management
- **Source**: Storyset – Medical Care
- **Search Term**: "Medication management at home"
- **File Location**: `/public/images/services/medication-management.png`
- **Component**: `src/app/services/page.tsx`
- **Current**: Placeholder gradient box

---

### Admissions Page (`/admissions`)

#### 1. Referral Discussion
- **Source**: Storyset – Healthcare Workers
- **Search Term**: "Doctor referral discussion"
- **File Location**: `/public/images/admissions/referral-discussion.png`
- **Component**: `src/app/admissions/page.tsx`
- **Current**: No images

#### 2. Home Assessment
- **Source**: Storyset – Medical Care
- **Search Term**: "Home assessment visit"
- **File Location**: `/public/images/admissions/home-assessment.png`
- **Component**: `src/app/admissions/page.tsx`
- **Current**: No images

#### 3. Care Plan Discussion
- **Source**: Storyset – Medical Care
- **Search Term**: "Care plan discussion"
- **File Location**: `/public/images/admissions/care-plan.png`
- **Component**: `src/app/admissions/page.tsx`
- **Current**: No images

#### 4. Ongoing Visits
- **Source**: Storyset – Medical Care
- **Search Term**: "Ongoing home visits"
- **File Location**: `/public/images/admissions/ongoing-visits.png`
- **Component**: `src/app/admissions/page.tsx`
- **Current**: No images

---

### About Page (`/about`)

#### 1. Team Collaboration
- **Source**: Blush.design – Care & Support
- **Search Term**: "Healthcare team collaboration"
- **File Location**: `/public/images/about/team-collaboration.png`
- **Component**: `src/app/about/page.tsx`
- **Current**: Placeholder gradient box

#### 2. Professional Discussion
- **Source**: Storyset – Medical Team
- **Search Term**: "Professional caregivers discussion"
- **File Location**: `/public/images/about/professional-discussion.png`
- **Component**: `src/app/about/page.tsx`
- **Current**: No images

---

### Contact Page (`/contact`)

#### 1. Phone Consultation
- **Source**: Storyset – Medical Care
- **Search Term**: "Phone consultation with nurse"
- **File Location**: `/public/images/contact/phone-consultation.png`
- **Component**: `src/app/contact/page.tsx`
- **Current**: No images

#### 2. Care Coordinator
- **Source**: Storyset – Medical Care
- **Search Term**: "Care coordinator support"
- **File Location**: `/public/images/contact/care-coordinator.png`
- **Component**: `src/app/contact/page.tsx`
- **Current**: No images

---

## File Structure to Create

```
sc-home-health/
└── public/
    └── images/
        ├── home/
        │   ├── hero-nursing-visit.png
        │   └── caregiver-helping.png
        ├── services/
        │   ├── nurse-vitals.png
        │   ├── daily-living.png
        │   └── medication-management.png
        ├── admissions/
        │   ├── referral-discussion.png
        │   ├── home-assessment.png
        │   ├── care-plan.png
        │   └── ongoing-visits.png
        ├── about/
        │   ├── team-collaboration.png
        │   └── professional-discussion.png
        └── contact/
            ├── phone-consultation.png
            └── care-coordinator.png
```

---

## Image Optimization Guidelines

### Before Adding Images:

1. **Optimize File Size:**
   - Use tools like TinyPNG (https://tinypng.com) or Squoosh (https://squoosh.app)
   - Target: Under 200KB per image when possible
   - For hero images: Under 500KB

2. **Format Recommendations:**
   - **PNG**: For illustrations with transparency
   - **WebP**: Best compression (convert PNG to WebP if possible)
   - **SVG**: For simple illustrations (scalable, small file size)

3. **Dimensions:**
   - **Hero images**: 1920px width (will be scaled down)
   - **Section images**: 1200px - 1500px width
   - **Small illustrations**: 800px - 1000px width

---

## How to Add Images to Components

### Example: Adding Hero Image

```tsx
// In src/components/home/Hero.tsx
import Image from "next/image";

// Replace the current hero.png with:
<Image
    src="/images/home/hero-nursing-visit.png"
    alt="Nurse providing home health care visit"
    fill
    className="object-cover object-center opacity-20"
    priority
/>
```

### Example: Adding Section Image

```tsx
// In src/app/services/page.tsx
import Image from "next/image";

// Add image to a section:
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
    <Image
        src="/images/services/nurse-vitals.png"
        alt="Nurse monitoring patient vital signs"
        fill
        className="object-cover"
    />
</div>
```

---

## Step-by-Step Process

### 1. Download Images
- [ ] Create accounts on Storyset and Blush.design
- [ ] Search and download each required illustration
- [ ] Customize colors to match brand (Primary: #0f4c81, Secondary: #2a9d8f, Accent: #e9c46a)
- [ ] Save with descriptive filenames

### 2. Optimize Images
- [ ] Compress images using TinyPNG or similar
- [ ] Convert to WebP format if possible (better compression)
- [ ] Verify file sizes are reasonable

### 3. Organize Files
- [ ] Create folder structure in `/public/images/`
- [ ] Place images in appropriate folders
- [ ] Use consistent naming convention

### 4. Update Components
- [ ] Replace placeholder images in components
- [ ] Add proper alt text for accessibility
- [ ] Test responsive behavior
- [ ] Verify images load correctly

### 5. Test & Build
- [ ] Run `npm run build` to ensure no errors
- [ ] Test on different screen sizes
- [ ] Verify image loading performance

---

## Brand Color Reference

When customizing illustrations, use these colors:
- **Primary Blue**: `#0f4c81`
- **Teal**: `#2a9d8f`
- **Soft Gold**: `#e9c46a`
- **Background**: `#f8f9fa`
- **Text**: `#1a202c`

---

## Cost Considerations

### Free Options:
- Storyset: Free account with limited downloads (watermarks on some)
- Blush.design: Free with attribution required

### Premium Options:
- Storyset Premium: ~$9-15/month (unlimited, no watermarks)
- Blush Premium: ~$10-20/month (full customization)

**Recommendation**: Start with free accounts to test, upgrade if needed for production.

---

## Alternative Sources (If Needed)

If you can't find exact matches:
- **Undraw.co**: Free illustrations (different style)
- **Freepik**: Free and premium illustrations
- **Pexels/Pixabay**: Free stock photos (real photos, not illustrations)

---

## Next Steps

1. **Download all required images** from Storyset/Blush
2. **Optimize and organize** them in the folder structure
3. **Contact me** when images are ready, and I'll help integrate them into the components
4. **Or** follow the component examples above to add them yourself

---

## Quick Reference: Image Checklist

- [ ] Homepage Hero: Home nursing visit
- [ ] Homepage Why Choose: Caregiver helping senior
- [ ] Services - Skilled Nursing: Nurse monitoring vitals
- [ ] Services - Personal Care: Daily living assistance
- [ ] Services - Medication: Medication management
- [ ] Admissions - Referral: Doctor referral discussion
- [ ] Admissions - Assessment: Home assessment visit
- [ ] Admissions - Care Plan: Care plan discussion
- [ ] Admissions - Ongoing: Ongoing home visits
- [ ] About - Team: Healthcare team collaboration
- [ ] About - Discussion: Professional caregivers discussion
- [ ] Contact - Phone: Phone consultation with nurse
- [ ] Contact - Coordinator: Care coordinator support

---

**Note**: Once you have the images downloaded and optimized, let me know and I can help integrate them into all the components!

