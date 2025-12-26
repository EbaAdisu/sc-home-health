#!/usr/bin/env python3
"""
Image Downloader Script for SC Home Health Care Website
This script helps download and organize images from Storyset and Blush.design
"""

import os
import requests
from pathlib import Path
from urllib.parse import urlparse

# Base directory for images
BASE_DIR = Path(__file__).parent / "public" / "images"

# Image URLs mapping (add URLs here once you find them on Storyset/Blush)
IMAGE_URLS = {
    # Homepage
    "home/hero-nursing-visit.png": "",  # Storyset - Home nursing visit
    "home/caregiver-helping.png": "",   # Storyset - Caregiver helping senior
    
    # Services
    "services/nurse-vitals.png": "",           # Storyset - Nurse monitoring vitals
    "services/daily-living.png": "",           # Storyset - Daily living assistance
    "services/medication-management.png": "",  # Storyset - Medication management
    
    # Admissions
    "admissions/referral-discussion.png": "",  # Storyset - Doctor referral discussion
    "admissions/home-assessment.png": "",       # Storyset - Home assessment visit
    "admissions/care-plan.png": "",            # Storyset - Care plan discussion
    "admissions/ongoing-visits.png": "",        # Storyset - Ongoing home visits
    
    # About
    "about/team-collaboration.png": "",        # Blush - Healthcare team collaboration
    "about/professional-discussion.png": "",   # Storyset - Professional caregivers discussion
    
    # Contact
    "contact/phone-consultation.png": "",     # Storyset - Phone consultation with nurse
    "contact/care-coordinator.png": "",        # Storyset - Care coordinator support
}

def create_directories():
    """Create necessary directory structure"""
    directories = [
        "home",
        "services",
        "admissions",
        "about",
        "contact"
    ]
    
    for directory in directories:
        (BASE_DIR / directory).mkdir(parents=True, exist_ok=True)
        print(f"✓ Created directory: {BASE_DIR / directory}")

def download_image(url, filepath):
    """Download an image from URL"""
    if not url:
        print(f"⚠ Skipping {filepath.name} - No URL provided")
        return False
    
    try:
        print(f"Downloading: {filepath.name}...")
        response = requests.get(url, stream=True, timeout=30)
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        print(f"✓ Downloaded: {filepath.name} ({len(response.content) / 1024:.1f} KB)")
        return True
    except Exception as e:
        print(f"✗ Error downloading {filepath.name}: {str(e)}")
        return False

def main():
    """Main function"""
    print("=" * 60)
    print("SC Home Health Care - Image Downloader")
    print("=" * 60)
    print()
    
    # Create directories
    create_directories()
    print()
    
    # Download images
    downloaded = 0
    skipped = 0
    
    for relative_path, url in IMAGE_URLS.items():
        filepath = BASE_DIR / relative_path
        
        if url:
            if download_image(url, filepath):
                downloaded += 1
            else:
                skipped += 1
        else:
            skipped += 1
    
    print()
    print("=" * 60)
    print(f"Summary: {downloaded} downloaded, {skipped} skipped")
    print("=" * 60)
    print()
    print("Next steps:")
    print("1. Find images on Storyset.com and Blush.design")
    print("2. Copy image URLs and add them to IMAGE_URLS dictionary")
    print("3. Run this script again to download all images")

if __name__ == "__main__":
    main()

