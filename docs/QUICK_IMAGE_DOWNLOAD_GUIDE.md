# Quick Guide: Getting Images from Storyset & Blush.design

## Step-by-Step Instructions

### For Storyset (https://storyset.com)

1. **Go to Storyset.com** and create a free account
2. **Search for each illustration** using these exact terms:

#### Homepage Images:
- Search: `"home nursing"` or `"nurse visit home"`
- Look for: Medical Care category
- Download as: PNG (transparent background)

- Search: `"caregiver helping senior"` or `"elderly care home"`
- Look for: Home Care category
- Download as: PNG (transparent background)

#### Services Images:
- Search: `"nurse monitoring vitals"` or `"checking vital signs"`
- Search: `"daily living assistance"` or `"helping elderly"`
- Search: `"medication management"` or `"pills medicine"`

#### Admissions Images:
- Search: `"doctor referral"` or `"healthcare discussion"`
- Search: `"home assessment"` or `"nurse assessment"`
- Search: `"care plan"` or `"treatment plan"`
- Search: `"home visit"` or `"nurse visit"`

#### Contact Images:
- Search: `"phone consultation"` or `"nurse phone call"`
- Search: `"care coordinator"` or `"healthcare support"`

### For Blush.design (https://blush.design)

1. **Go to Blush.design** and create a free account
2. **Search for**:
   - `"healthcare team"` or `"medical team collaboration"`
   - Look for: Care & Support style
   - Customize colors to match your brand

---

## Manual Download Process

Since browser automation isn't available, here's the manual process:

### Option 1: Use the Python Script (Recommended)

1. **Find images** on Storyset/Blush.design
2. **Right-click** on the image → "Copy image address" or "Get image URL"
3. **Add URLs** to `scripts/download_images.py` in the `IMAGE_URLS` dictionary
4. **Run the script**:
   ```bash
   python3 scripts/download_images.py
   ```

### Option 2: Manual Download

1. **Find each image** on Storyset/Blush.design
2. **Click download** button
3. **Choose format**: PNG with transparent background
4. **Choose size**: 1200px - 1800px width
5. **Save to**: `public/images/[category]/[filename].png`

---

## Direct Search Links (Copy & Paste)

### Storyset Search URLs:
- Home nursing: https://storyset.com/search?q=home+nursing+visit
- Caregiver helping: https://storyset.com/search?q=caregiver+helping+senior
- Nurse vitals: https://storyset.com/search?q=nurse+monitoring+vitals
- Daily living: https://storyset.com/search?q=daily+living+assistance
- Medication: https://storyset.com/search?q=medication+management
- Referral: https://storyset.com/search?q=doctor+referral+discussion
- Assessment: https://storyset.com/search?q=home+assessment+visit
- Care plan: https://storyset.com/search?q=care+plan+discussion
- Phone consultation: https://storyset.com/search?q=phone+consultation+nurse

### Blush.design Search:
- Team collaboration: https://blush.design/search?q=healthcare+team

---

## Tips for Finding Images

1. **Use multiple search terms** - Try variations if first search doesn't work
2. **Check categories** - Filter by "Medical", "Healthcare", "Home Care"
3. **Customize colors** - Match your brand colors (#0f4c81, #2a9d8f, #e9c46a)
4. **Download high-res** - Choose 1200px+ width for web use
5. **Transparent background** - Essential for professional look

---

## After Downloading

1. **Optimize images** using TinyPNG.com (reduce file size)
2. **Verify file names** match the structure in `IMAGE_ASSETS_GUIDE.md`
3. **Test in browser** to ensure images load correctly
4. **Let me know** when ready, and I'll integrate them into components!

