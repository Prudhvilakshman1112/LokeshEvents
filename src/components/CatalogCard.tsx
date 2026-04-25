"use client";
import { Check } from "lucide-react";
import WhatsAppSvg from "./WhatsAppSvg";
import ImageCarousel from "./ImageCarousel";
import { WHATSAPP_NUMBER } from "@/data/catalog";
import type { CatalogItem } from "@/data/catalog";
import styles from "./CatalogCard.module.css";

interface Props {
  item: CatalogItem;
  onViewDetails: () => void;
}

function getWhatsAppLink(item: CatalogItem) {
  const msg = `Hi! I'm interested in the *${item.title}* package (₹${item.price.toLocaleString("en-IN")}). Please share availability and details. Thank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function CatalogCard({ item, onViewDetails }: Props) {
  const discount = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);

  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <ImageCarousel images={item.images} alt={item.title} size="card" />
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
          <a
            href={getWhatsAppLink(item)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waBtn}
          >
            <WhatsAppSvg size={16} /> Enquire
          </a>
        </div>
      </div>
    </div>
  );
}
