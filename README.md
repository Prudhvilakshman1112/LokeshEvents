<div align="center">

# ✨ LK Events — Vizag's Premier Surprise & Event Planners

**Creating Magical Moments on Beach Road Since 2020**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com/)

---

*A breathtakingly beautiful, fully animated, production-ready website for **LK Events** (Lokesh Flower Decoration & Events) — a premium surprise & event management company based in Visakhapatnam (Vizag), India.*

[🌐 Live Demo](#) · [📱 WhatsApp Us](https://wa.me/917207221469) · [📍 Vizag, India](https://maps.google.com/?q=Dondaparthy+Main+Road+Visakhapatnam)

</div>

---

## 🎯 What is LK Events?

LK Events specializes in **surprise celebrations, prank events, midnight birthdays, and romantic candlelight dinners** — all set at the iconic **Vizag Beach Road** with the Bay of Bengal as your backdrop. From ₹2,500 starter packages to ₹12,500 premium candlelight experiences, every event is crafted to create unforgettable memories.

---

## 🎁 Event Packages

| # | Package | Price | Highlights |
|:-:|---------|:-----:|------------|
| 🧸 | **Doll Surprise** | ₹2,500 | Teddy doll, cake, fire guns |
| 🎁 | **Doll Surprise (Upgraded)** | ₹3,500 | Photo frame, calendar, printed mug, cake |
| 🎭 | **Strangest Surprise** | ₹5,000 | 4 strangers, teddy, bouquet, full gift set |
| 🎉 | **Strangers Surprise** | ₹7,000 | 4 strangers, miniature, fire guns, gifts |
| 😂 | **Prank Surprise** | ₹8,500 | Prank + surprise, dancing teddy, 4 strangers |
| 🌙 | **Midnight Surprise** | ₹11,000 | Midnight celebration + professionally edited video |
| 🕯️ | **Candlelight Dinner** | ₹12,500 | Round table, biryani, fire entry, police permission |

> *All events are set up at Vizag Beach Road with complete coordination and cleanup included.*

---

## 🖥️ Website Features

### 🏠 Hero Section
- Full-screen cinematic background with Vizag Beach Road imagery
- Staggered word-by-word title animation with golden gradient text
- Floating sparkle particles for a magical atmosphere
- Animated stats bar (500+ events, 7 packages, 4.9★ rating)

### 📸 Portfolio Gallery
- Filterable masonry grid showcasing past events
- Category tabs: All, Wedding, Birthday, Surprise, Dinner, etc.
- Hover-to-reveal overlays with event type labels
- Staggered scroll-triggered fade-in animations

### 🛍️ Event Catalog
- Beautiful card grid with all 7 packages
- **Swipeable image carousel** on every card (touch + drag)
- Discount badges, category tags, and item checklists
- Direct **WhatsApp Enquiry** button per package

### 🔍 Full Details Modal
- Expanded view with **large swipeable carousel + thumbnail strip**
- Complete package breakdown: items included, benefits, event flow
- Logistics badges (Beach Road Setup, Police Permission, etc.)
- One-tap WhatsApp enquiry with pre-filled message

### 💬 WhatsApp Integration
- **Floating WhatsApp button** with pulse glow animation (always visible)
- Per-package enquiry generates pre-filled WhatsApp messages
- Direct link to business WhatsApp: +91 72072 21469

### 📱 Mobile-First Design
- Inline navigation links (no hamburger menu)
- Touch-optimized carousels with swipe gestures
- Fully responsive from 320px to 4K displays

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| **Background** | Deep navy `#0a0a0f` / `#12121a` |
| **Gold Accent** | `#d4a853` → `#f0d48a` gradient |
| **Typography** | Playfair Display (headings) + Inter (body) |
| **Glass Effect** | `backdrop-filter: blur(12px)` with subtle borders |
| **Animations** | Framer Motion scroll reveals, parallax, hover lifts |
| **Border Radius** | 16px cards / 50px buttons & badges |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Prudhvilakshman1112/LokeshEvents.git
cd LokeshEvents

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Design system & tokens
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Home page assembly
├── components/
│   ├── Navbar.tsx            # Glassmorphism sticky nav
│   ├── HeroSection.tsx       # Animated full-screen hero
│   ├── PortfolioSection.tsx  # Filterable photo gallery
│   ├── CatalogSection.tsx    # Package grid with filters
│   ├── CatalogCard.tsx       # Individual package card
│   ├── CatalogModal.tsx      # Full-detail modal view
│   ├── ImageCarousel.tsx     # Swipeable carousel + thumbnails
│   ├── WhatsAppButton.tsx    # Floating WhatsApp CTA
│   ├── WhatsAppSvg.tsx       # Shared WhatsApp logo SVG
│   ├── AnimatedSection.tsx   # Scroll-reveal wrapper
│   └── Footer.tsx            # Contact info & branding
├── data/
│   └── catalog.ts            # All package data (single source of truth)
└── public/images/            # AI-generated event images
```

---

## 🖼️ Adding Your Own Images

All catalog images are managed in **`src/data/catalog.ts`**. Each package has an `images` array:

```typescript
{
  id: "candlelight-dinner",
  images: [
    "/images/candlelight-dinner.png",   // AI-generated (default)
    "/images/your-live-photo-1.jpg",    // Add your real photos here
    "/images/your-live-photo-2.jpg",
  ],
  // ...
}
```

1. Drop your photos into `public/images/`
2. Add the paths to the `images` array
3. They'll appear in the swipeable carousel automatically

---

## 🌐 Deploy to Vercel

This project is **Vercel-ready** out of the box:

1. Push to GitHub (already done ✅)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the `LokeshEvents` repository
4. Click **Deploy** — that's it!

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Framer Motion** | Scroll animations, carousels, transitions |
| **Lucide React** | Crisp icon system |
| **CSS Modules** | Scoped, maintainable styling |
| **Vercel** | One-click deployment |

---

## 📞 Contact

**LK Events** — Lokesh Flower Decoration & Events

- 📍 Dondaparthy Main Road, Railway New Colony, Visakhapatnam - 530020
- 📱 [+91 72072 21469](https://wa.me/917207221469)
- 📧 lkevents.vizag@gmail.com

---

<div align="center">

**Built with ❤️ in Visakhapatnam, India**

*© 2025 LK Events. All rights reserved.*

</div>
