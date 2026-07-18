# Hero Section Redesign

Redesign the homepage hero section based on the provided reference image. The goal is to move from a full-background image to a clean, modern, split-screen layout with a light aesthetic, strong typography, and a prominent search bar.

## User Review Required

> [!WARNING]
> This is a complete redesign of the hero section. The dark overlay aesthetic will be replaced with a light, modern layout. Please confirm if this is the desired direction for the "VG Recruitment" brand.
>
> The reference image says "Optimists A - Classified Ads". I will adapt this to the current site content: "VG Recruitment - Global Careers", unless you specify otherwise.

## Proposed Changes

### Hero Component

#### [MODIFY] [HeroSection.tsx](file:///d:/projects/VG/src/components/home/HeroSection.tsx)
- Completely rewrite the layout to use a grid/flex split layout.
- Left column:
  - Small top label (e.g., "VG RECRUITMENT").
  - Large display headline.
  - Subtext paragraph.
  - Search bar input with a primary search button.
  - Icon row below the search bar.
- Right column:
  - Large image with rounded corners (`rounded-3xl` or similar).
- Background:
  - Light/off-white background with subtle gradients and floating 3D spheres (using CSS or absolute positioned images/SVGs) for the modern aesthetic shown in the reference.
- Update Tailwind classes to reflect the new layout and styling, ensuring responsiveness (stacking on mobile, side-by-side on desktop).
