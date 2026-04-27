"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sparkles, Trash2, ShoppingBag } from "lucide-react";
import WhatsAppSvg from "./WhatsAppSvg";
import { WHATSAPP_NUMBER } from "@/data/catalog";
import type { CustomizableItem, CatalogItem } from "@/data/catalog";
import styles from "./PackageCustomizer.module.css";

interface Props {
  item: CatalogItem;
}

export default function PackageCustomizer({ item }: Props) {
  const [items, setItems] = useState<CustomizableItem[]>(
    () => item.customizableItems.map((ci) => ({ ...ci }))
  );

  const updateQty = (index: number, delta: number) => {
    setItems((prev) =>
      prev.map((it, i) => {
        if (i !== index) return it;
        const newQty = Math.max(0, it.qty + delta);
        return { ...it, qty: newQty };
      })
    );
  };

  const activeItems = useMemo(() => items.filter((it) => it.qty > 0), [items]);
  const addOnItems = useMemo(() => items.filter((it) => it.qty === 0), [items]);

  const customTotal = useMemo(
    () => items.reduce((sum, it) => sum + it.qty * it.unitPrice, 0),
    [items]
  );

  const handleWhatsApp = () => {
    const lines = activeItems
      .map(
        (it, i) =>
          `${i + 1}. ${it.name} × ${it.qty} — ₹${(it.qty * it.unitPrice).toLocaleString("en-IN")}`
      )
      .join("\n");

    const message = `🎨 *LK Events — Custom Package Quote*\n\n📦 *Base Package:* ${item.title}\n\n*Customized Items:*\n${lines}\n\n💰 *Custom Total: ₹${customTotal.toLocaleString("en-IN")}*\n\nPlease confirm availability and finalize. Thank you! 🙏`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className={styles.wrapper}>
      {/* ---------- Header ---------- */}
      <div className={styles.header}>
        <Sparkles size={18} className={styles.sparkleIcon} />
        <h4 className={styles.heading}>Customize Your Package</h4>
      </div>
      <p className={styles.subtitle}>
        Add, remove or adjust quantities — get a live quote instantly
      </p>

      {/* ---------- Included items ---------- */}
      <div className={styles.listLabel}>
        <ShoppingBag size={14} /> Included Items
      </div>
      <ul className={styles.itemList}>
        <AnimatePresence initial={false}>
          {activeItems.map((it) => {
            const idx = items.indexOf(it);
            return (
              <motion.li
                key={it.name}
                className={styles.item}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className={styles.itemInfo}>
                  <span className={styles.itemName}>{it.name}</span>
                  <span className={styles.itemUnit}>₹{it.unitPrice.toLocaleString("en-IN")} each</span>
                </div>
                <div className={styles.qtyControls}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => updateQty(idx, -1)}
                    aria-label={`Decrease ${it.name}`}
                  >
                    {it.qty === 1 ? <Trash2 size={13} /> : <Minus size={13} />}
                  </button>
                  <motion.span
                    className={styles.qtyValue}
                    key={it.qty}
                    initial={{ scale: 1.4, color: "#f0d48a" }}
                    animate={{ scale: 1, color: "rgba(245,240,232,0.9)" }}
                    transition={{ duration: 0.25 }}
                  >
                    {it.qty}
                  </motion.span>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => updateQty(idx, 1)}
                    aria-label={`Increase ${it.name}`}
                  >
                    <Plus size={13} />
                  </button>
                </div>
                <span className={styles.lineTotal}>
                  ₹{(it.qty * it.unitPrice).toLocaleString("en-IN")}
                </span>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>

      {/* ---------- Add-ons ---------- */}
      {addOnItems.length > 0 && (
        <>
          <div className={styles.listLabel}>
            <Plus size={14} /> Available Add-Ons
          </div>
          <ul className={styles.itemList}>
            {addOnItems.map((it) => {
              const idx = items.indexOf(it);
              return (
                <motion.li
                  key={it.name}
                  className={`${styles.item} ${styles.addOnItem}`}
                  whileHover={{ backgroundColor: "rgba(212,168,83,0.06)" }}
                >
                  <div className={styles.itemInfo}>
                    <span className={styles.itemName}>{it.name}</span>
                    <span className={styles.itemUnit}>₹{it.unitPrice.toLocaleString("en-IN")} each</span>
                  </div>
                  <button
                    className={styles.addBtn}
                    onClick={() => updateQty(idx, 1)}
                  >
                    <Plus size={13} /> Add
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </>
      )}

      {/* ---------- Total bar ---------- */}
      <div className={styles.totalBar}>
        <div className={styles.totalInfo}>
          <span className={styles.totalLabel}>Custom Quote</span>
          <motion.span
            className={styles.totalPrice}
            key={customTotal}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            ₹{customTotal.toLocaleString("en-IN")}
          </motion.span>
          {customTotal !== item.price && (
            <span className={styles.diffBadge}>
              {customTotal > item.price ? "+" : ""}₹{(customTotal - item.price).toLocaleString("en-IN")} vs original
            </span>
          )}
        </div>
        <button
          className={styles.sendBtn}
          onClick={handleWhatsApp}
          disabled={activeItems.length === 0}
        >
          <WhatsAppSvg size={16} />
          Send Custom Quote
        </button>
      </div>
    </div>
  );
}
