# Implementation Plan: Contact Information Update & Visual Assets Integration

## Client Requirements

### Contact Information Updates
- **Phone**: 2026796177 (format: (202) 679-6177)
- **Address**: 2001 Conley Court, Silver Spring, Maryland 20904
- **Email**: info@schomehealthcare.com (already in use, no change needed)
- **Hosting**: IONOS (premium web hosting - note for deployment)

### Visual Assets Recommendations (from PDF)
The client has provided a visual sitemap with suggested illustrations from Storyset and Blush.design for each page.

---

## Implementation Plan

### Phase 1: Contact Information Updates ✅ COMPLETED

#### 1.1 Files to Update

**Header Component** (`src/components/layout/Header.tsx`)
- [x] Update phone number in desktop header button: `(202) 679-6177`
- [x] Update phone number in mobile menu: `(202) 679-6177`
- [x] Update tel: link to `tel:+12026796177`

**Footer Component** (`src/components/layout/Footer.tsx`)
- [x] Update phone number: `(202) 679-6177`
- [x] Update address: `2001 Conley Court, Silver Spring, Maryland 20904`
- [x] Verify email is correct: `info@schomehealthcare.com`
- [x] Added clickable phone and email links

**Contact Page** (`src/app/contact/page.tsx`)
- [x] Update phone number: `(202) 679-6177`
- [x] Update tel: link to `tel:+12026796177`
- [x] Update address section with full address: `2001 Conley Court, Silver Spring, Maryland 20904`
- [x] Add MapPin icon with address display
- [x] Remove Fax placeholder (not provided by client)
- [x] Verify email: `info@schomehealthcare.com`

**Other Pages** (if phone numbers appear)
- [x] Check Careers page for any contact references (none found)
- [x] Check Admissions page for any contact references (none found)

#### 1.2 Address Formatting
- Display format: `2001 Conley Court, Silver Spring, Maryland 20904`
- For maps/links: Consider adding Google Maps link if needed

---

### Phase 2: Visual Assets Integration (Future)

#### 2.1 Homepage Illustrations
- **Hero Section**: Storyset – Medical Care: 'Home nursing visit'
- **Why Choose Us**: Storyset – Home Care: 'Caregiver helping senior at home'
- **Services Overview**: Medical Line Icons (already using Lucide icons - may need to verify alignment)

#### 2.2 Services Page
- **Skilled Nursing**: Storyset – Nursing: 'Nurse monitoring patient vitals'
- **Personal Care**: Storyset – Patient Support: 'Daily living assistance'
- **Medication Management**: Storyset – Medical Care: 'Medication management at home'

#### 2.3 Admissions/Intake Process Page
- **Referral Discussion**: Storyset – Healthcare Workers: 'Doctor referral discussion'
- **Home Assessment**: Storyset – Medical Care: 'Home assessment visit'
- **Care Plan Discussion**: Storyset – Medical Care: 'Care plan discussion'
- **Ongoing Visits**: Storyset – Medical Care: 'Ongoing home visits'

#### 2.4 About Us Page
- **Team Collaboration**: Blush.design – Care & Support: 'Healthcare team collaboration'
- **Professional Discussion**: Storyset – Medical Team: 'Professional caregivers discussion'

#### 2.5 Contact Page
- **Phone Consultation**: Storyset – Medical Care: 'Phone consultation with nurse'
- **Care Coordinator**: Storyset – Medical Care: 'Care coordinator support'

#### 2.6 Implementation Notes for Visual Assets
- [ ] Create `/public/images/` directory structure
- [ ] Download/obtain illustrations from Storyset and Blush.design
- [ ] Optimize images for web (WebP format recommended)
- [ ] Update components to use new images
- [ ] Add proper alt text for accessibility
- [ ] Ensure responsive image sizing

---

### Phase 3: Testing & Verification

#### 3.1 Contact Information Verification
- [ ] Test all phone number links (should open dialer on mobile)
- [ ] Verify email links work correctly
- [ ] Check address formatting on all pages
- [ ] Verify consistency across all components

#### 3.2 Build & Deploy Check
- [ ] Run `npm run build` to ensure no errors
- [ ] Test responsive design on mobile/tablet/desktop
- [ ] Verify all contact information displays correctly
- [ ] Check for any placeholder text remaining

---

## Files to Modify

1. `src/components/layout/Header.tsx` - Phone in header
2. `src/components/layout/Footer.tsx` - Phone, address, email
3. `src/app/contact/page.tsx` - All contact information
4. (Future) Image components when assets are available

---

## Notes

- **Email**: Already correct (`info@schomehealthcare.com`) - no change needed
- **Fax**: Not provided by client - will remove placeholder or mark as TBD
- **Hosting**: IONOS mentioned - this is for deployment, not code changes
- **Visual Assets**: Will be implemented in future phase when illustrations are obtained

---

## Estimated Implementation Time

- **Phase 1 (Contact Info)**: ~15-20 minutes
- **Phase 2 (Visual Assets)**: TBD (depends on asset availability)
- **Phase 3 (Testing)**: ~10 minutes

---

## Next Steps

1. Review and approve this plan
2. Implement Phase 1 (Contact Information Updates)
3. Test and verify changes
4. Commit and push to GitHub
5. Schedule Phase 2 (Visual Assets) when illustrations are ready

