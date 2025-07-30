# 🎨 FONT CONFIGURATION GUIDE

## Font Setup untuk Waroeng Bebek Ngarasan

### 📋 Font yang Digunakan:

1. **Mondish Black Italic** → untuk Headers/Judul
2. **Araboto Medium** → untuk Paragraphs/Body text

---

## 🔧 Cara Install Font Custom:

### Step 1: Replace Font Files
Ganti file-file berikut di folder `src/app/fonts/`:

- ❌ `MondishBlackItalic.woff2.txt` → ✅ `MondishBlackItalic.woff2`
- ❌ `ArabotoMedium.woff2.txt` → ✅ `ArabotoMedium.woff2`

### Step 2: Update layout.tsx
Setelah font files tersedia, update file `src/app/layout.tsx`:

```typescript
// Ganti bagian import font dari:
import { Inter, Playfair_Display } from "next/font/google";

// Menjadi:
import localFont from "next/font/local";

// Dan ganti konfigurasi font dari:
const mondishFallback = Playfair_Display({...});
const arabotoFallback = Inter({...});

// Menjadi:
const mondishBlackItalic = localFont({
  src: "./fonts/MondishBlackItalic.woff2",
  variable: "--font-mondish",
  display: "swap",
});

const arabotoMedium = localFont({
  src: "./fonts/ArabotoMedium.woff2", 
  variable: "--font-araboto",
  display: "swap",
});

// Dan update className di body:
<body className={`${mondishBlackItalic.variable} ${arabotoMedium.variable} font-sans antialiased`}>
```

---

## 📱 Penggunaan Font di Components:

### Headers/Judul:
```jsx
<h1 className="font-heading text-4xl font-bold italic">
  Judul dengan Mondish Black Italic
</h1>
```

### Body Text/Paragraphs:
```jsx
<p className="font-body text-lg">
  Paragraf dengan Araboto Medium
</p>
```

---

## ✅ Status Saat Ini:

- ✅ Font custom sudah diupload dan aktif
- ✅ MondishBlackItalic.otf → Headers
- ✅ Araboto Medium 400.ttf → Body text  
- ✅ Classes `font-heading` dan `font-body` ready
- ✅ Website menggunakan font asli (bukan fallback)

---

## 🚀 Font Sudah Aktif!

Website sekarang menggunakan font custom yang sudah diupload:
- **Headers**: Mondish Black Italic
- **Body**: Araboto Medium

Tidak perlu setup tambahan lagi!

---

**Contact:** Jika ada kendala dengan setup font, hubungi developer.
