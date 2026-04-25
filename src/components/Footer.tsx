"use client";
import { MapPin, Phone, Mail, Globe, Share2, ExternalLink } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/catalog";
import AnimatedSection from "./AnimatedSection";
import styles from "./Footer.module.css";

export default function Footer() {
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
                <a href="#" className={styles.social} aria-label="Instagram"><Globe size={18} /></a>
                <a href="#" className={styles.social} aria-label="Facebook"><Share2 size={18} /></a>
                <a href="#" className={styles.social} aria-label="YouTube"><ExternalLink size={18} /></a>
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
