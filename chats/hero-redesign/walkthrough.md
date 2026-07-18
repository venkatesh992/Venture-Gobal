# Hero Section Redesign Walkthrough

The homepage hero section has been completely redesigned based on the provided reference image. We moved away from the dark, full-screen background aesthetic to a brighter, more modern look.

## Changes Made

### 1. Split-Screen Layout (`HeroSection.tsx`)
- **Structure**: Rebuilt the component using a responsive CSS Grid (`grid-cols-1 lg:grid-cols-2`).
- **Typography & Content**: 
  - Kept the current "VG Recruitment - Global careers, handled end to end" copy but adjusted the typography to feature a prominent overline label and a massive Display-style font.
  - Text colors updated to deep slate/navy tones to contrast nicely with the light background.
- **Search Bar**: Added a fully styled, functional-looking search bar input and button for "Search Jobs", closely matching the rounded styling from the reference.
- **Icon Row**: Added four rounded-square quick-action icons (Locations, Roles, Resumes, Candidates) right below the search bar to emulate the layout of the reference.
- **Image**: Replaced the full-background airplane wing image with a high-quality photo of a modern office space, rounded heavily (`rounded-[2.5rem]`) and placed in the right column with a drop shadow.

### 2. Aesthetic Details (`globals.css`)
- **Background**: Implemented an off-white/light blue (`#f4f7fb`) background.
- **3D Floating Elements**: Added absolute positioned "spheres" behind the main content using radial gradients and box shadows.
- **Animations**: Created a custom `@keyframes float` animation in `globals.css` so the decorative spheres slowly drift up and down to make the design feel "alive" as requested in your project's aesthetic guidelines.

### 3. Header Adaptation (`Header.tsx`)
- Removed the `site-header--transparent` state specifically from the homepage (`/`). Because our hero background is now light, we need the header text to remain dark and readable from the moment the user lands on the site.

## Verification
- Local build successfully reflects these changes. The hero section collapses gracefully into a stacked layout on mobile devices, and sits perfectly under the global navigation header.
