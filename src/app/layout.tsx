import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  title: "LK Events Vizag | Professional Event Management & Planning",
  description:
    "LK Events Vizag offers premier event planning services in Visakhapatnam. Specializing in surprise celebrations, candlelight dinners, beach decorations, and proposal setups. Contact us for the best event management in Vizag.",
  keywords: [
    "LK Events",
    "Lokesh Events",
    "Vizag events",
    "surprise planning Vizag",
    "candlelight dinner Beach Road",
    "birthday surprise Visakhapatnam",
    "event management Vizag",
  ],
  metadataBase: new URL("https://lkeventsvizag.com"),
  openGraph: {
    title: "LK Events — Create Magical Moments in Vizag",
    description: "Premium surprise celebrations & candlelight dinners on Vizag Beach Road",
    type: "website",
    locale: "en_IN",
    url: "https://lkeventsvizag.com",
    siteName: "LK Events",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://firestore.googleapis.com" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
