"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, MapPin, Clock, Sparkles } from "lucide-react";
import WhatsAppSvg from "./WhatsAppSvg";
import ImageCarousel from "./ImageCarousel";
import PackageCustomizer from "./PackageCustomizer";
import { WHATSAPP_NUMBER } from "@/data/catalog";
import type { CatalogItem } from "@/data/catalog";
import styles from "./CatalogModal.module.css";

interface Props { item: CatalogItem; onClose: () => void; }

function getWhatsAppLink(item: CatalogItem) {
  const msg = `Hi! I'm interested in the *${item.title}* package (₹${item.price.toLocaleString("en-IN")}). Please share availability and details. Thank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function CatalogModal({ item, onClose }: Props) {
  const discount = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
  const [showCustomizer, setShowCustomizer] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handler); };
  }, [onClose]);

  return (
    <motion.div
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}><X size={20} /></button>

        <div className={styles.layout}>
          <div className={styles.imgCol}>
            <div className={styles.carouselWrap}>
              <ImageCarousel images={item.images} alt={item.title} size="modal" showThumbnails />
              <span className={styles.discount}>{discount}% OFF</span>
            </div>
          </div>

          <div className={styles.detailCol}>
            <span className={styles.cat}>{item.category}</span>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.desc}>{item.description}</p>

            <div className={styles.pricing}>
              <span className="price-current">₹{item.price.toLocaleString("en-IN")}</span>
              <span className="price-original">₹{item.originalPrice.toLocaleString("en-IN")}</span>
              <span className="price-save">Save ₹{(item.originalPrice - item.price).toLocaleString("en-IN")}</span>
            </div>

            <div className={styles.badges}>
              {item.badges.map((b) => <span key={b} className="badge">{b}</span>)}
            </div>

            <div className={styles.sectionBlock}>
              <h4 className={styles.sectionTitle}>📦 Items Included</h4>
              <ul className={styles.checkList}>
                {item.itemsIncluded.map((it) => (
                  <li key={it}><Check size={14} className={styles.checkIcon} />{it}</li>
                ))}
              </ul>
            </div>

            <div className={styles.sectionBlock}>
              <h4 className={styles.sectionTitle}>✨ What You Get</h4>
              <ul className={styles.checkList}>
                {item.benefits.map((b) => (
                  <li key={b}><Check size={14} className={styles.checkIcon} />{b}</li>
                ))}
              </ul>
            </div>

            <div className={styles.sectionBlock}>
              <h4 className={styles.sectionTitle}>🎯 Event Flow</h4>
              <ol className={styles.flow}>
                {item.eventFlow.map((step, i) => (
                  <li key={i}>
                    <span className={styles.flowNum}>{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className={styles.metaRow}>
              <span><MapPin size={14} /> Vizag Beach Road</span>
              <span><Clock size={14} /> 1-2 Hours</span>
            </div>

            {/* ── Customize Toggle ── */}
            <button
              className={`${styles.customizeToggle} ${showCustomizer ? styles.customizeActive : ""}`}
              onClick={() => setShowCustomizer((p) => !p)}
            >
              <span className={styles.customizeShimmer} />
              <Sparkles size={16} className={styles.customizeIcon} />
              {showCustomizer ? "Hide Customizer" : "Customize Package"}
            </button>

            {/* ── Customizer Panel ── */}
            <AnimatePresence>
              {showCustomizer && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <PackageCustomizer item={item} />
                </motion.div>
              )}
            </AnimatePresence>

            <a
              href={getWhatsAppLink(item)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waBtn}
            >
              <WhatsAppSvg size={18} /> Enquire on WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
