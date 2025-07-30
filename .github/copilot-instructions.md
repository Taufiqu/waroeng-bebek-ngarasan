# GitHub Copilot Instructions for Waroeng Bebek Ngarasan

## 🏗️ Project Overview
This is a responsive landing page website for **Waroeng Bebek Ngarasan**, a local Indonesian eatery. The website is designed with a nostalgic, warm aesthetic using earthy color palettes (beige, brown, orange tones). Typography reflects a semi-traditional, poetic brand voice.

### 🧱 Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Carousel**: SwiperJS
- **Deployment**: Vercel

---

## 📄 Page Structure

### 1. Home Page
- Acts as a summary/landing page.
- Includes:
  - Hero section: A single key message or quote
  - Product highlights (short description or image previews)
  - Section snippets linking to Profile, Menu, and Contact pages
- Design: Balanced layout with focus areas (e.g., grid or column layout)

### 2. Profile Page
- Static content with brand storytelling
- Layout:
  - Hero image (nostalgic/local setting)
  - Headline with poetic phrasing
  - Two-column or full-width text section
  - Quotes in serif or cursive font
- Use **text-justify**, comfortable line-height, serif fonts

### 3. Menu Page
- Showcasing food options in a clean, scrollable carousel
- Each menu item includes image, title, optional description
- Use **SwiperJS** for horizontal scrolling
- Ensure good spacing and card design (shadow, rounded corners)

### 4. Contact Page
- Contains social media buttons (WhatsApp, Instagram)
- Possibly QR code or map link
- Minimalist layout with centered buttons
- Use `target="_blank"` with proper `rel` attributes

---

## 🧑‍💻 Development Guidelines

- Use TypeScript for all components
- Apply **functional components** with hooks
- Stick to **Next.js App Router structure**
- Follow **atomic design** principles where possible
- Use semantic HTML elements (e.g., `<section>`, `<article>`, `<main>`, etc.)
- Optimize for SEO using `<Head>` tags

---

## 🎨 Styling Rules

- TailwindCSS utility-first styling
- Color scheme:
  - Primary: warm beige, cream, terracotta, brown
  - Accent: muted orange / rustic green
- Fonts:
  - Titles/quotes: Serif or decorative (custom font if needed)
  - Body text: Readable, medium weight, good line-height
- Responsive:
  - Use `sm`, `md`, `lg`, `xl` breakpoints
  - Mobile-first
  - Ensure good spacing/padding across viewports
- Components should have:
  - Consistent margins & gaps
  - Rounded corners
  - Hover animations on buttons & links

---

## 🚀 Deployment Guidelines

- Use Vercel for deployment
- Add favicon, meta tags, and proper SEO headers
- Optimize image sizes using Next.js `Image` component
- Set up proper 404 page
- If needed, configure custom domain

---

## 📌 Other Notes

- Brand voice is **reflective, poetic, and rooted in culture**
- Use quotes in Indonesian where appropriate
- Use meaningful alt-text on images for accessibility

---

