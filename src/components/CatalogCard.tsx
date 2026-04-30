"use client";
import { useState } from "react";
import { Check, Clock } from "lucide-react";
import WhatsAppSvg from "./WhatsAppSvg";
import ImageCarousel from "./ImageCarousel";
import EnquiryFormModal from "./EnquiryFormModal";
import type { CatalogItem } from "@/data/catalog";
import styles from "./CatalogCard.module.css";

interface Props {
  item: CatalogItem;
  onViewDetails: () => void;
}

function getWhatsAppMessage(item: CatalogItem) {
  return `🎉 *LK Events — Package Enquiry*\n\n📦 *Package:* ${item.title}\n💰 *Price:* ₹${item.price.toLocaleString("en-IN")} (Original: ₹${item.originalPrice.toLocaleString("en-IN")})\n\nHi! I'm interested in this package. Please share availability and details. Thank you! 🙏`;
}

export default function CatalogCard({ item, onViewDetails }: Props) {
  const discount = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imgWrap}>
          <ImageCarousel images={item.images} videos={item.liveVideos} alt={item.title} size="card" />
          <span className={styles.discount}>{discount}% OFF</span>
          <span className={styles.category}>{item.category}</span>
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>{item.title}</h3>

          <div className={styles.pricing}>
            <span className="price-current">₹{item.price.toLocaleString("en-IN")}</span>
            <span className="price-original">₹{item.originalPrice.toLocaleString("en-IN")}</span>
          </div>

          <div className={styles.badges}>
            {item.badges.slice(0, 3).map((b) => (
              <span key={b} className="badge">{b}</span>
            ))}
          </div>

          {item.timings && (
            <div className={styles.timingsBar}>
              <Clock size={13} /> {item.timings}
            </div>
          )}

          <ul className={styles.items}>
            {item.itemsIncluded.slice(0, 4).map((it) => (
              <li key={it}><Check size={14} className={styles.checkIcon} />{it}</li>
            ))}
            {item.itemsIncluded.length > 4 && (
              <li className={styles.more}>+{item.itemsIncluded.length - 4} more items</li>
            )}
          </ul>

          <div className={styles.actions}>
            <button className={styles.detailBtn} onClick={onViewDetails}>Full Details</button>
            <button
              className={styles.waBtn}
              onClick={() => setShowEnquiry(true)}
            >
              <WhatsAppSvg size={16} /> Enquire
            </button>
          </div>
        </div>
      </div>

      <EnquiryFormModal
        open={showEnquiry}
        onClose={() => setShowEnquiry(false)}
        packageName={item.title}
        whatsappMessage={getWhatsAppMessage(item)}
      />
    </>
  );
}
