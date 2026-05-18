"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sparkles, Trash2, ShoppingBag, Palette } from "lucide-react";
import WhatsAppSvg from "./WhatsAppSvg";
import EnquiryFormModal from "./EnquiryFormModal";
import type { CustomizableItem, CatalogItem } from "@/data/catalog";
import styles from "./PackageCustomizer.module.css";

const ONLY_DECOR_NAME = "Only Decor";

interface Props {
  item: CatalogItem;
}

export default function PackageCustomizer({ item }: Props) {
  const [items, setItems] = useState<CustomizableItem[]>(
    () => item.customizableItems.map((ci) => ({ ...ci }))
  );
  const [showEnquiry, setShowEnquiry] = useState(false);

  const updateQty = (index: number, delta: number) => {
    setItems((prev) => {
      const target = prev[index];
      const newQty = Math.max(0, target.qty + delta);

      // ── "Only Decor" activation: reset everything else ──
      if (target.name === ONLY_DECOR_NAME && target.qty === 0 && newQty > 0) {
        return prev.map((it, i) => {
          if (i === index) return { ...it, qty: 1 }; // cap at 1
          return { ...it, qty: 0 };                  // reset others
        });
      }

      // Cap "Only Decor" at qty 1
      if (target.name === ONLY_DECOR_NAME && newQty > 1) {
        return prev;
      }

      return prev.map((it, i) => {
        if (i !== index) return it;
        return { ...it, qty: newQty };
      });
    });
  };

  // ── Derived lists ──
  const onlyDecorIdx = items.findIndex((it) => it.name === ONLY_DECOR_NAME);
  const onlyDecorItem = onlyDecorIdx >= 0 ? items[onlyDecorIdx] : null;
  const isOnlyDecorActive = onlyDecorItem ? onlyDecorItem.qty > 0 : false;

  const activeItems = useMemo(
    () => items.filter((it) => it.qty > 0),
    [items]
  );
  const addOnItems = useMemo(
    () => items.filter((it) => it.qty === 0 && it.name !== ONLY_DECOR_NAME),
    [items]
  );

  const customTotal = useMemo(
    () => items.reduce((sum, it) => sum + it.qty * it.unitPrice, 0),
    [items]
  );

  const whatsappMessage = useMemo(() => {
    const lines = activeItems
      .map(
        (it, i) =>
          `${i + 1}. ${it.name} × ${it.qty} — ₹${(it.qty * it.unitPrice).toLocaleString("en-IN")}`
      )
      .join("\n");

    return `🎨 *LK Events — Custom Package Quote*\n\n📦 *Base Package:* ${item.title}\n\n*Customized Items:*\n${lines}\n\n💰 *Custom Total: ₹${customTotal.toLocaleString("en-IN")}*\n\nPlease confirm availability and finalize. Thank you! 🙏`;
  }, [activeItems, customTotal, item.title]);

  return (
    <>
      <div className={styles.wrapper}>
        {/* ---------- Header ---------- */}
        <div className={styles.header}>
          <Sparkles size={18} className={styles.sparkleIcon} />
          <h4 className={styles.heading}>Customize Your Package</h4>
        </div>
        <p className={styles.subtitle}>
          Add, remove or adjust quantities — get a live quote instantly
        </p>

        {/* ---------- "Only Decor" special option ---------- */}
        {onlyDecorItem && !isOnlyDecorActive && (
          <motion.div
            className={styles.onlyDecorCard}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.onlyDecorInfo}>
              <div className={styles.onlyDecorTitle}>
                <Palette size={16} />
                <span>Only Decor</span>
              </div>
              <p className={styles.onlyDecorDesc}>
                Start fresh with just the decoration setup — all existing items
                will be removed.
              </p>
            </div>
            <div className={styles.onlyDecorRight}>
              <span className={styles.onlyDecorPrice}>₹5,000</span>
              <button
                className={styles.onlyDecorBtn}
                onClick={() => updateQty(onlyDecorIdx, 1)}
              >
                <Palette size={14} /> Choose Only Decor
              </button>
            </div>
          </motion.div>
        )}

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
                  className={`${styles.item} ${it.name === ONLY_DECOR_NAME ? styles.onlyDecorActiveItem : ""}`}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.itemInfo}>
                    <span className={styles.itemName}>
                      {it.name === ONLY_DECOR_NAME && <Palette size={14} style={{ marginRight: 6 }} />}
                      {it.name}
                    </span>
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
                    {it.name !== ONLY_DECOR_NAME && (
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQty(idx, 1)}
                        aria-label={`Increase ${it.name}`}
                      >
                        <Plus size={13} />
                      </button>
                    )}
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
            onClick={() => setShowEnquiry(true)}
            disabled={activeItems.length === 0}
          >
            <WhatsAppSvg size={16} />
            Send Custom Quote
          </button>
        </div>
      </div>

      <EnquiryFormModal
        open={showEnquiry}
        onClose={() => setShowEnquiry(false)}
        packageName={`${item.title} (Custom)`}
        whatsappMessage={whatsappMessage}
      />
    </>
  );
}
