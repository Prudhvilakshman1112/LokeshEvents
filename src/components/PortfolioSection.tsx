"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioImages } from "@/data/catalog";
import AnimatedSection from "./AnimatedSection";
import styles from "./PortfolioSection.module.css";

const categories = ["All", ...Array.from(new Set(portfolioImages.map((p) => p.category)))];

export default function PortfolioSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? portfolioImages : portfolioImages.filter((p) => p.category === active);

  return (
    <section id="portfolio" className={styles.section}>
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Our Portfolio</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            A glimpse into the magical celebrations we&apos;ve created on Vizag Beach Road
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className={styles.filters}>
            {categories.map((c) => (
              <button
                key={c}
                className={`${styles.filterBtn} ${active === c ? styles.filterActive : ""}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className={styles.imgWrap}>
                  <img src={img.src} alt={img.title} className={styles.img} loading="lazy" />
                  <div className={styles.cardOverlay}>
                    <span className={styles.cardTitle}>{img.title}</span>
                    <span className={styles.cardCat}>{img.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Slots for live images/videos */}
        <AnimatedSection delay={0.2}>
          <div className={styles.liveSlots}>
            <p className={styles.liveLabel}>📸 Live Event Gallery Coming Soon</p>
            <div className={styles.slotGrid}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className={styles.slot}>
                  <span>Live Photo / Video</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
