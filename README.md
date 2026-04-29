# LK Events — Premium Surprise & Event Planning | Vizag Beach Road

A luxury event planning website for **LK Events**, Vizag's premier surprise and celebration company. Built with Next.js 16, Framer Motion, and Firebase.

🌐 **Live**: [lkeventsvizag.com](https://lkeventsvizag.com)
📸 **Instagram**: [@lk_events_with_special_entries](https://www.instagram.com/lk_events_with_special_entries/)
📞 **Contact**: +91 72072 21469

---

## ✨ Features

### 🎁 11 Event Packages
Complete catalog with customizable pricing, WhatsApp enquiry integration, and swipeable image/video carousels:

| Package | Price |
|---------|-------|
| Doll Surprise | ₹2,500 |
| Upgraded Doll Surprise | ₹3,500 |
| Strangers Surprise (Base) | ₹5,500 |
| Strangers Surprise (Premium) | ₹7,500 |
| Prank Surprise | ₹8,000 |
| Flash Mob Surprise | ₹8,500 |
| Daytime Beach Decoration | ₹8,500 |
| Midnight Surprise | ₹10,000 |
| Evening Beach Decoration | ₹11,000 |
| Candlelight Dinner | ₹12,000 |
| The Proposal Decor | ₹15,500 |

### 🎬 Live Event Videos
- Real event footage organized by category (Birthday, Anniversary, Dinner, Midnight, Prank, Strangers, Naming Ceremony, Wedding)
- 9:16 portrait format, horizontal scrollable gallery
- Auto-play on hover, fullscreen playback with audio
- Same category filter controls both portfolio images and live videos

### 📸 Portfolio Gallery
- AI-generated showcase images + real event photos
- Category-based filtering (All, Birthday, Anniversary, Wedding, etc.)
- Marriage decoration photo gallery (12 real photos)
- Animated grid with hover effects

### ⭐ Customer Reviews
- Firebase-powered community review system
- Real customer feedback video testimonials (horizontal scroll)
- Star rating with live averages
- WhatsApp feedback alternative

### 🎨 Design
- Dark luxury theme with gold accents
- Glassmorphism effects & micro-animations
- Framer Motion transitions throughout
- Fully responsive (mobile-first)

### 🛠️ Package Customizer
- Interactive add/remove items with live pricing
- WhatsApp enquiry with pre-filled package details
- Unit pricing for all add-on items

---

## 🏗️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Variables
- **Animations**: Framer Motion
- **Database**: Firebase Firestore (reviews)
- **Icons**: Lucide React + Custom SVGs
- **Fonts**: Google Fonts (Playfair Display, Inter)

---

## 📂 Project Structure

```
src/
├── app/                  # Next.js App Router
├── components/           # React components
│   ├── HeroSection       # Animated hero with CTA
│   ├── CatalogSection    # Package grid with filters
│   ├── CatalogCard       # Individual package card
│   ├── CatalogModal      # Package detail modal
│   ├── ImageCarousel      # Image + Video carousel
│   ├── PortfolioSection  # Gallery with live videos/images
│   ├── ReviewsSection    # Reviews + feedback videos
│   ├── Footer            # Instagram, WhatsApp, Share
│   └── ...
├── data/
│   ├── catalog.ts        # 11 packages, pricing, portfolio
│   └── liveVideos.ts     # Live video + image data
├── lib/
│   └── firebase.ts       # Firestore integration
public/
├── images/               # AI + real event images
│   └── marriage/         # 12 wedding decor photos
└── videos/               # 17+ event videos + 3 feedback
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📱 Social Links

- **Instagram**: [@lk_events_with_special_entries](https://www.instagram.com/lk_events_with_special_entries/)
- **WhatsApp**: [+91 72072 21469](https://wa.me/917207221469)
- **Website**: [lkeventsvizag.com](https://lkeventsvizag.com)

---

© 2026 LK Events. All rights reserved.
