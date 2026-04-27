<div align="center">

# ✨ LK Events — Vizag's Premier Surprise & Event Planners

**Creating Magical Moments on Beach Road Since 2020**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
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

### 🎨 Package Customizer *(NEW)*
- **Interactive item-level customization** inside each package modal
- Add/remove individual items (teddy dolls, cakes, fire guns, etc.)
- Adjust quantities with smooth animated +/− controls
- **Live price quotation** updates instantly as you modify items
- Available add-ons section for extra items not in the base package
- **"Send Custom Quote via WhatsApp"** — generates a detailed, itemized message with quantities, individual prices, and custom total
- Shimmer-animated toggle button with gold border to catch user attention

### ⭐ Customer Reviews & Feedback *(NEW)*
- **Firebase Firestore-powered** persistent review system
- Interactive **5-star rating** with gold glow animation on hover/select
- Feedback form with name, rating, and comment (glass-morphism styled)
- **Reviews persist across all users** — when anyone submits, it's visible to everyone
- Review cards display with avatar initials, date, star rating, and comment
- Average rating overview with total review count
- Alternative feedback via WhatsApp direct message
- Smooth micro-animations: stars pulse, form fields glow on focus, success animation

### 🎬 Video Testimonials *(NEW)*
- Grid of **6 video testimonial slots** for customer review videos
- Play button overlay with radial gradient and gold play icon
- Inline video playback with controls
- **"Coming Soon" elegant placeholders** for empty slots
- Responsive grid: 3 columns → 2 → 1 on mobile
- Easy to add videos — just update the `videoUrl` in `catalog.ts`

### 💬 WhatsApp Integration
- **Floating WhatsApp button** with pulse glow animation (always visible)
- Per-package enquiry generates pre-filled WhatsApp messages
- Custom package quote with itemized breakdown
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

# Set up Firebase (see Firebase Setup below)
# Copy .env.local.example to .env.local and fill in your credentials

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔥 Firebase Setup

The customer reviews system uses **Firebase Firestore** for real-time, persistent storage. To set it up:

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project (or use existing)
2. Enable **Firestore Database** (start in test mode for development)
3. Register a **Web App** in Project Settings
4. Copy the config values into your `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

5. For production, set up **Firestore Security Rules**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /reviews/{reviewId} {
      allow read: if true;
      allow create: if request.resource.data.name is string
                    && request.resource.data.rating is number
                    && request.resource.data.comment is string;
      allow update, delete: if false;
    }
  }
}
```

> **Note:** When deploying to Vercel, add the same environment variables in your Vercel project settings → Environment Variables.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css              # Design system & tokens
│   ├── layout.tsx               # Root layout with SEO metadata
│   └── page.tsx                 # Home page assembly
├── components/
│   ├── Navbar.tsx               # Glassmorphism sticky nav
│   ├── HeroSection.tsx          # Animated full-screen hero
│   ├── PortfolioSection.tsx     # Filterable photo gallery
│   ├── CatalogSection.tsx       # Package grid with filters
│   ├── CatalogCard.tsx          # Individual package card
│   ├── CatalogModal.tsx         # Full-detail modal view
│   ├── PackageCustomizer.tsx    # 🆕 Item-level package customizer
│   ├── ImageCarousel.tsx        # Swipeable carousel + thumbnails
│   ├── ReviewsSection.tsx       # 🆕 Reviews, feedback & video testimonials
│   ├── WhatsAppButton.tsx       # Floating WhatsApp CTA
│   ├── WhatsAppSvg.tsx          # Shared WhatsApp logo SVG
│   ├── AnimatedSection.tsx      # Scroll-reveal wrapper
│   └── Footer.tsx               # Contact info & branding
├── data/
│   └── catalog.ts               # All package data + video slots
├── lib/
│   └── firebase.ts              # 🆕 Firebase config & review CRUD
└── public/images/               # AI-generated event images
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

## 🎥 Adding Video Testimonials

Video testimonials are managed in `src/data/catalog.ts` under the `customerVideos` array:

```typescript
export const customerVideos = [
  {
    id: "v1",
    title: "Birthday Surprise Reaction",
    customerName: "Priya & Rahul",
    videoUrl: "/videos/birthday-reaction.mp4",  // Add your video path
  },
  // ...
];
```

1. Place your video files in `public/videos/`
2. Update the `videoUrl` field with the path
3. The video will replace the "Coming Soon" placeholder automatically

---

## 🌐 Deploy to Vercel

This project is **Vercel-ready** out of the box:

1. Push to GitHub (already done ✅)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the `LokeshEvents` repository
4. Add Firebase environment variables in Vercel project settings
5. Click **Deploy** — that's it!

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Framer Motion** | Scroll animations, carousels, transitions |
| **Firebase Firestore** | Persistent customer reviews storage |
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
