"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { catalogItems } from "@/data/catalog";
import AnimatedSection from "./AnimatedSection";
import CatalogCard from "./CatalogCard";
import CatalogModal from "./CatalogModal";
import type { CatalogItem } from "@/data/catalog";
import styles from "./CatalogSection.module.css";

const categories = ["All", ...Array.from(new Set(catalogItems.map((c) => c.category)))];

export default function CatalogSection() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<CatalogItem | null>(null);

  const filtered = active === "All" ? catalogItems : catalogItems.filter((c) => c.category === active);

  return (
    <section id="catalogs" className={styles.section}>
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Our Packages</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Choose from our curated surprise & celebration packages — all set at the iconic Vizag Beach Road
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
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
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <CatalogCard item={item} onViewDetails={() => setSelected(item)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <CatalogModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
