# Coup - iMessage Automation Hero Section

A pixel-perfect implementation of the Coup landing page hero section, built as part of Feeble's Frontend Developer Assignment.

##  Live Demo

[Live Website URL](your-deployed-url-here)

##  Project Overview

This project is a faithful recreation of a Figma design prototype featuring a hero section for Coup, an iMessage automation tool. The implementation focuses on achieving pixel-perfect accuracy, smooth animations, and clean code architecture.

##  Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: General Sans (Custom Web Font)
- **Image Optimization**: Next.js Image Component

##  Key Features

### Design Implementation
- **Pixel-perfect layout** matching Figma specifications
- **Responsive design** maintaining 1920px viewport
- **Custom typography** using General Sans font family
- **Gradient background** with blurred ellipse overlay
- **SVG assets** for scalable graphics

### Animations
1. **Flying Birds (Top Left)**
   - First bird flies in from the bottom of the page with acceleration
   - Second bird remains static while a shadow effect flies up and disappears
   
2. **Cross-Flying Birds**
   - Two birds with message badges fly diagonally across the page
   - They cross paths at the center (near the "Get Started" button)
   - Animation occurs once after initial page load with 1.5s delay
   
3. **Button Hover Effects**
   - **Nav Links**: Color transition from gray to black
   - **Contact Sales Button**: Water-draining effect - blue background animates from right to left on hover, text changes to blue

### Interactive Elements
- Hover states on navigation links
- Animated primary and secondary CTA buttons
- Smooth transitions and timing functions

## Project Structure

```
coup-hero-section/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles and animations
├── components/
│   ├── Navbar.tsx           # Navigation bar with logo and links
│   ├── HeroBadge.tsx        # "#1 iMessage Automation Tool" badge
│   ├── HeroContent.tsx      # Main headline and subtext
│   ├── CTAButtons.tsx       # Primary and secondary action buttons
│   ├── HeroSection.tsx      # Hero section container
│   ├── BirdsTop.tsx         # Top decorative birds (left & right)
│   ├── BirdsBottom.tsx      # Bottom decorative birds with messages
│   ├── FlyingBirds.tsx      # Cross-flying animated birds
│   ├── ScrollIndicator.tsx  # "Scroll to learn more" section
│   └── BackgroundElements.tsx # Background gradient and ellipse
├── public/
│   ├── fonts/               # General Sans font files
│   ├── logo.svg
│   ├── imessage_icon.svg
│   ├── apple_icon.svg
│   ├── down_arrow.svg
│   ├── left_top_first.svg
│   ├── left_top_second.svg
│   ├── right_top_first.svg
│   ├── right_top_second.svg
│   ├── bottom_left_first.svg
│   ├── bottom_left_socond.svg
│   ├── Bottom_right_first.svg
│   ├── bottom_right_second.svg
│   └── bottom_cloud.svg
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design Specifications

All measurements and properties were extracted directly from Figma:
- **Page dimensions**: 1920px × 1080px
- **Color palette**: 
  - Primary blue: `rgba(0, 122, 255, 1)`
  - Text blue: `rgba(0, 111, 232, 1)`
  - Gray: `rgba(140, 151, 168, 1)`
- **Typography**: General Sans (Regular 400, Medium 500, Bold 700)
- **Border radius**: Pill-shaped buttons (200px for nav, 50px for CTAs)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kobby-Jones/coup-hero-section.git
cd coup-hero-section
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

##  Implementation Notes

### Challenges & Solutions

1. **Button Water Effect Animation**
   - Challenge: Creating a smooth right-to-left draining effect
   - Solution: Used `scaleX()` transform with `transform-origin: left` and synchronized text color transition

2. **Bird Flight Animations**
   - Challenge: Birds needed to fly from bottom of page with acceleration
   - Solution: Used `translateY(1080px)` with `ease-in` timing function

3. **Cross-Flying Birds**
   - Challenge: Next.js Image component inline styles conflicting with CSS animations
   - Solution: Wrapped images in divs and applied animations to wrapper elements

4. **Background Gradient**
   - Challenge: Achieving the subtle blue-to-white fade
   - Solution: Linear gradient from `rgba(0, 122, 255, 0.15)` to white with proper positioning

### Design Decisions

- Used inline styles for precise pixel values to match Figma exactly
- Employed Tailwind for responsive utilities while maintaining pixel-perfect spacing
- Separated animations into `globals.css` for better organization
- Optimized SVG assets for better performance
- **Component Architecture**: Modular component structure for maintainability
  - Separated concerns into logical, reusable components
  - Each component handles a specific UI section
  - Clear component hierarchy with `HeroSection` as the main container
  - Isolated animation logic in dedicated bird components
 

## 📄 License

This project was created as part of a technical assessment for Feeble.

##  Author

**Your Name**
- GitHub: [@Kobby-Jones](https://github.com/Kobby-Jones)
- Email: your.email@example.com

---

Built with ❤️ for Feeble's Frontend Developer Assignment