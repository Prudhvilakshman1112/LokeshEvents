import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LK Events — Premium Surprise & Event Planning | Vizag Beach Road",
  description:
    "Vizag's premier event management company. Surprise celebrations, candlelight dinners, prank surprises & more on Beach Road, Visakhapatnam. Book now via WhatsApp!",
  keywords: [
    "LK Events",
    "Lokesh Events",
    "Vizag events",
    "surprise planning Vizag",
    "candlelight dinner Beach Road",
    "birthday surprise Visakhapatnam",
    "event management Vizag",
  ],
  openGraph: {
    title: "LK Events — Create Magical Moments in Vizag",
    description: "Premium surprise celebrations & candlelight dinners on Vizag Beach Road",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
