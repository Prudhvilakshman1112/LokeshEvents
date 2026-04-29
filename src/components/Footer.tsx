"use client";
import { MapPin, Phone, Mail, Share2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/catalog";
import WhatsAppSvg from "./WhatsAppSvg";
import AnimatedSection from "./AnimatedSection";
import styles from "./Footer.module.css";

function InstagramSvg({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const handleShare = async () => {
    const shareData = {
      title: "LK Events — Premium Surprise & Event Planning",
      text: "Check out LK Events for amazing surprise celebrations at Vizag Beach Road!",
      url: "https://lkeventsvizag.com",
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard!");
      }
    } catch {
      // User cancelled sharing
    }
  };

  return (
    <footer id="footer" className={styles.footer}>
      <div className="section-container">
        <AnimatedSection>
          <div className={styles.grid}>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <span className={styles.logoL}>LK</span>
                <span className={styles.logoText}>Events</span>
              </div>
              <p className={styles.brandDesc}>
                Vizag&apos;s premier surprise &amp; event planning company. Creating magical moments at Beach Road since 2020.
              </p>
              <div className={styles.socials}>
                <a
                  href="https://www.instagram.com/lk_events_with_special_entries/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label="Instagram"
                >
                  <InstagramSvg size={18} />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to know more about LK Events.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label="WhatsApp"
                >
                  <WhatsAppSvg size={18} />
                </a>
                <button
                  className={styles.social}
                  onClick={handleShare}
                  aria-label="Share website"
                >
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <div className={styles.contactRow}>
                <MapPin size={14} />
                <span>Dondaparthy Main Road, Railway New Colony, Visakhapatnam - 530020</span>
              </div>
              <div className={styles.contactRow}>
                <Phone size={14} />
                <a href={`tel:+${WHATSAPP_NUMBER}`}>+91 72072 21469</a>
              </div>
              <div className={styles.contactRow}>
                <Mail size={14} />
                <a href="mailto:lkevents.vizag@gmail.com">lkevents.vizag@gmail.com</a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} LK Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
