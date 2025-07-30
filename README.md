# Waroeng Bebek Ngarasan - Website Landing Page

Website landing page responsif untuk Waroeng Bebek Ngarasan menggunakan Next.js, TypeScript, dan Tailwind CSS.

## 🎨 Font Configuration

Website ini menggunakan 2 font custom:

### 1. **Mondish Black Italic** (untuk Headers)
- **File**: `src/app/fonts/MondishBlackItalic.otf` ✅
- **Usage**: Class `font-heading` di Tailwind
- **Status**: Aktif

### 2. **Araboto Medium** (untuk Paragraphs/Body)
- **File**: `src/app/fonts/Araboto Medium 400.ttf` ✅
- **Usage**: Class `font-body` di Tailwind
- **Status**: Aktif

## 📁 Instalasi Font Custom

1. **Replace font files** di folder `src/app/fonts/`:
   - Ganti `MondishBlackItalic.woff2.txt` dengan `MondishBlackItalic.woff2`
   - Ganti `ArabotoMedium.woff2.txt` dengan `ArabotoMedium.woff2`

2. **Update layout.tsx** setelah font files tersedia:
   ```typescript
   // Uncomment dan sesuaikan dengan file font asli
   const mondishBlackItalic = localFont({
     src: "./fonts/MondishBlackItalic.woff2",
     variable: "--font-mondish",
     display: "swap",
   });
   ```

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Carousel**: SwiperJS
- **Fonts**: Custom fonts (Mondish Black Italic + Araboto Medium)
- **Deployment**: Vercel

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
