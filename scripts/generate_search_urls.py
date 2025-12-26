#!/usr/bin/env python3
"""
Generate search URLs for all required images
Run this to get all the Storyset and Blush.design search links
"""

IMAGE_REQUIREMENTS = {
    "home/hero-nursing-visit.png": {
        "search_terms": ["home nursing visit", "nurse visiting home"],
        "source": "storyset",
        "category": "Medical Care"
    },
    "home/caregiver-helping.png": {
        "search_terms": ["caregiver helping senior", "elderly care home"],
        "source": "storyset",
        "category": "Home Care"
    },
    "services/nurse-vitals.png": {
        "search_terms": ["nurse monitoring vitals", "checking vital signs"],
        "source": "storyset",
        "category": "Nursing"
    },
    "services/daily-living.png": {
        "search_terms": ["daily living assistance", "helping elderly"],
        "source": "storyset",
        "category": "Patient Support"
    },
    "services/medication-management.png": {
        "search_terms": ["medication management", "pills medicine"],
        "source": "storyset",
        "category": "Medical Care"
    },
    "admissions/referral-discussion.png": {
        "search_terms": ["doctor referral", "healthcare discussion"],
        "source": "storyset",
        "category": "Healthcare Workers"
    },
    "admissions/home-assessment.png": {
        "search_terms": ["home assessment", "nurse assessment"],
        "source": "storyset",
        "category": "Medical Care"
    },
    "admissions/care-plan.png": {
        "search_terms": ["care plan", "treatment plan"],
        "source": "storyset",
        "category": "Medical Care"
    },
    "admissions/ongoing-visits.png": {
        "search_terms": ["home visit", "nurse visit"],
        "source": "storyset",
        "category": "Medical Care"
    },
    "about/team-collaboration.png": {
        "search_terms": ["healthcare team", "medical team collaboration"],
        "source": "blush",
        "category": "Care & Support"
    },
    "about/professional-discussion.png": {
        "search_terms": ["professional caregivers", "medical team discussion"],
        "source": "storyset",
        "category": "Medical Team"
    },
    "contact/phone-consultation.png": {
        "search_terms": ["phone consultation", "nurse phone call"],
        "source": "storyset",
        "category": "Medical Care"
    },
    "contact/care-coordinator.png": {
        "search_terms": ["care coordinator", "healthcare support"],
        "source": "storyset",
        "category": "Medical Care"
    },
}

def generate_urls():
    from urllib.parse import quote
    
    print("=" * 80)
    print("SC HOME HEALTH CARE - IMAGE SEARCH URLs")
    print("=" * 80)
    print()
    print("Copy and paste these URLs into your browser to find the illustrations:")
    print()
    
    for i, (filepath, info) in enumerate(IMAGE_REQUIREMENTS.items(), 1):
        query = quote(" ".join(info["search_terms"][:1]))  # Use first search term
        
        if info["source"] == "storyset":
            url = f"https://storyset.com/search?q={query}"
        else:
            url = f"https://blush.design/search?q={query}"
        
        print(f"{i:2}. {filepath}")
        print(f"    Category: {info['category']}")
        print(f"    Search: {', '.join(info['search_terms'])}")
        print(f"    URL: {url}")
        print()
    
    print("=" * 80)
    print("INSTRUCTIONS:")
    print("=" * 80)
    print("1. Open each URL above in your browser")
    print("2. Find the illustration that best matches")
    print("3. Click on the illustration")
    print("4. Click 'Download' button")
    print("5. Choose: PNG format, Transparent background, 1200-1800px width")
    print("6. Save to: public/images/[category]/[filename].png")
    print()
    print("OR use the interactive downloader:")
    print("   python3 scripts/download_images.py")
    print("   (It will prompt you to paste image URLs)")

if __name__ == "__main__":
    generate_urls()

