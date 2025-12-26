#!/usr/bin/env python3
"""
Automated Image Downloader for SC Home Health Care Website
Attempts to find and download images from Storyset and alternative sources
"""

import os
import sys
import requests
from pathlib import Path
from urllib.parse import urlparse, quote
import json

# Base directory for images
BASE_DIR = Path(__file__).parent.parent / "public" / "images"

# Image requirements with search terms
IMAGE_REQUIREMENTS = {
    # Homepage
    "home/hero-nursing-visit.png": {
        "search_terms": ["home nursing visit", "nurse visiting home", "home health care"],
        "category": "medical",
        "source": "storyset"
    },
    "home/caregiver-helping.png": {
        "search_terms": ["caregiver helping senior", "elderly care home", "home care assistance"],
        "category": "home care",
        "source": "storyset"
    },
    
    # Services
    "services/nurse-vitals.png": {
        "search_terms": ["nurse monitoring vitals", "checking vital signs", "nurse patient"],
        "category": "medical",
        "source": "storyset"
    },
    "services/daily-living.png": {
        "search_terms": ["daily living assistance", "helping elderly", "personal care"],
        "category": "home care",
        "source": "storyset"
    },
    "services/medication-management.png": {
        "search_terms": ["medication management", "pills medicine", "pharmacy home"],
        "category": "medical",
        "source": "storyset"
    },
    
    # Admissions
    "admissions/referral-discussion.png": {
        "search_terms": ["doctor referral", "healthcare discussion", "medical consultation"],
        "category": "medical",
        "source": "storyset"
    },
    "admissions/home-assessment.png": {
        "search_terms": ["home assessment", "nurse assessment", "home visit evaluation"],
        "category": "medical",
        "source": "storyset"
    },
    "admissions/care-plan.png": {
        "search_terms": ["care plan", "treatment plan", "healthcare planning"],
        "category": "medical",
        "source": "storyset"
    },
    "admissions/ongoing-visits.png": {
        "search_terms": ["home visit", "nurse visit", "ongoing care"],
        "category": "medical",
        "source": "storyset"
    },
    
    # About
    "about/team-collaboration.png": {
        "search_terms": ["healthcare team", "medical team collaboration", "healthcare professionals"],
        "category": "team",
        "source": "blush"
    },
    "about/professional-discussion.png": {
        "search_terms": ["professional caregivers", "medical team discussion", "healthcare meeting"],
        "category": "medical",
        "source": "storyset"
    },
    
    # Contact
    "contact/phone-consultation.png": {
        "search_terms": ["phone consultation", "nurse phone call", "telehealth"],
        "category": "medical",
        "source": "storyset"
    },
    "contact/care-coordinator.png": {
        "search_terms": ["care coordinator", "healthcare support", "patient coordinator"],
        "category": "medical",
        "source": "storyset"
    },
}

def create_directories():
    """Create necessary directory structure"""
    directories = ["home", "services", "admissions", "about", "contact"]
    for directory in directories:
        (BASE_DIR / directory).mkdir(parents=True, exist_ok=True)
    print("✓ Directory structure created")

def search_unsplash(keywords, count=1):
    """Search Unsplash for free healthcare images"""
    try:
        # Unsplash API (free tier - no key needed for basic search)
        query = "+".join(keywords[:2])  # Use first 2 keywords
        url = f"https://api.unsplash.com/search/photos?query={quote(query)}&per_page={count}&client_id=YOUR_KEY"
        # Note: Requires API key, but we can use direct search URLs instead
        search_url = f"https://unsplash.com/s/photos/{quote(query)}"
        return search_url
    except Exception as e:
        print(f"Error searching Unsplash: {e}")
        return None

def search_pexels(keywords):
    """Get Pexels search URL"""
    query = "+".join(keywords[:2])
    return f"https://www.pexels.com/search/{quote(query)}/"

def download_from_url(url, filepath):
    """Download an image from a direct URL"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        print(f"Downloading: {filepath.name}...")
        response = requests.get(url, headers=headers, stream=True, timeout=30)
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        size_kb = len(response.content) / 1024
        print(f"✓ Downloaded: {filepath.name} ({size_kb:.1f} KB)")
        return True
    except Exception as e:
        print(f"✗ Error downloading {filepath.name}: {str(e)}")
        return False

def generate_storyset_urls():
    """Generate Storyset search URLs for manual access"""
    urls = {}
    for filepath, info in IMAGE_REQUIREMENTS.items():
        if info["source"] == "storyset":
            query = quote("+".join(info["search_terms"][:2]))
            urls[filepath] = f"https://storyset.com/search?q={query}"
        elif info["source"] == "blush":
            query = quote("+".join(info["search_terms"][:2]))
            urls[filepath] = f"https://blush.design/search?q={query}"
    return urls

def interactive_download():
    """Interactive mode - guide user to find and download images"""
    print("=" * 70)
    print("SC Home Health Care - Interactive Image Downloader")
    print("=" * 70)
    print()
    
    create_directories()
    print()
    
    # Generate search URLs
    search_urls = generate_storyset_urls()
    
    print("I'll help you download images. Here are the search URLs:")
    print()
    
    for filepath, search_url in search_urls.items():
        info = IMAGE_REQUIREMENTS[filepath]
        print(f"📁 {filepath}")
        print(f"   Search: {', '.join(info['search_terms'][:2])}")
        print(f"   URL: {search_url}")
        print()
    
    print("=" * 70)
    print("INSTRUCTIONS:")
    print("=" * 70)
    print("1. Open each URL above in your browser")
    print("2. Find the illustration that matches")
    print("3. Right-click the image → 'Copy image address' or 'Inspect' to get direct URL")
    print("4. Paste the URL when prompted below")
    print("5. Or press Enter to skip and add URL to config file")
    print()
    
    # Create config file for URLs
    config_file = BASE_DIR.parent / "image_urls.json"
    config = {}
    
    if config_file.exists():
        with open(config_file, 'r') as f:
            config = json.load(f)
    
    downloaded = 0
    skipped = 0
    
    for filepath, info in IMAGE_REQUIREMENTS.items():
        filepath_obj = BASE_DIR / filepath
        
        # Check if already exists
        if filepath_obj.exists():
            print(f"⏭  {filepath} already exists, skipping...")
            skipped += 1
            continue
        
        # Check config for URL
        url = config.get(filepath, "")
        
        if not url:
            print(f"\n📥 {filepath}")
            print(f"   Search terms: {', '.join(info['search_terms'])}")
            print(f"   Search URL: {search_urls[filepath]}")
            url = input(f"   Paste image URL (or press Enter to skip): ").strip()
            
            if url:
                config[filepath] = url
        
        if url:
            if download_from_url(url, filepath_obj):
                downloaded += 1
                config[filepath] = url  # Save successful URL
            else:
                print(f"   ⚠ Could not download. Please try manual download.")
        else:
            skipped += 1
    
    # Save config
    with open(config_file, 'w') as f:
        json.dump(config, f, indent=2)
    
    print()
    print("=" * 70)
    print(f"Summary: {downloaded} downloaded, {skipped} skipped")
    print(f"Config saved to: {config_file}")
    print("=" * 70)
    
    if skipped > 0:
        print()
        print("💡 TIP: Run this script again to download skipped images")
        print("   URLs are saved in image_urls.json for next time")

def batch_download_from_config():
    """Download all images from saved config file"""
    config_file = BASE_DIR.parent / "image_urls.json"
    
    if not config_file.exists():
        print("No config file found. Run in interactive mode first.")
        return
    
    with open(config_file, 'r') as f:
        config = json.load(f)
    
    create_directories()
    
    downloaded = 0
    for filepath, url in config.items():
        filepath_obj = BASE_DIR / filepath
        if filepath_obj.exists():
            print(f"⏭  {filepath_obj.name} already exists")
            continue
        
        if download_from_url(url, filepath_obj):
            downloaded += 1
    
    print(f"\n✓ Downloaded {downloaded} images from config")

def main():
    """Main function"""
    if len(sys.argv) > 1 and sys.argv[1] == "--batch":
        batch_download_from_config()
    else:
        interactive_download()

if __name__ == "__main__":
    main()
