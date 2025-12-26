# Image Download Scripts

## Quick Start

### Option 1: Get Search URLs (Recommended First Step)
```bash
python3 scripts/generate_search_urls.py
```
This will print all the search URLs you need. Copy and paste them into your browser.

### Option 2: Interactive Downloader
```bash
python3 scripts/download_images.py
```
This will:
1. Show you all search URLs
2. Prompt you to paste image URLs one by one
3. Download and organize images automatically
4. Save URLs to `public/image_urls.json` for next time

### Option 3: Batch Download (After URLs are saved)
```bash
python3 scripts/download_images.py --batch
```
Downloads all images from saved URLs in `public/image_urls.json`

---

## How to Use

### Step 1: Get Search URLs
Run `generate_search_urls.py` to see all the Storyset and Blush.design search links.

### Step 2: Find Images
1. Open each URL in your browser
2. Find the illustration that matches
3. Click on it
4. Click "Download"
5. Choose: PNG, Transparent, 1200-1800px

### Step 3: Download Images

**Method A - Manual:**
- Save images to `public/images/[category]/[filename].png`

**Method B - Automated:**
- Right-click image → "Copy image address" to get direct URL
- Run `python3 scripts/download_images.py`
- Paste URLs when prompted
- Script downloads and organizes everything

---

## File Structure Created

```
public/
└── images/
    ├── home/
    ├── services/
    ├── admissions/
    ├── about/
    └── contact/
```

---

## Requirements

- Python 3.6+
- `requests` library (install with: `pip install requests`)

---

## Notes

- URLs are saved in `public/image_urls.json` for reuse
- Script skips images that already exist
- All images are optimized for web use

