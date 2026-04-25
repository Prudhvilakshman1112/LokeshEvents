"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "./CartProvider";
import { generateWhatsAppURL } from "@/data/catalog";
import styles from "./CartDrawer.module.css";

export default function CartDrawer() {
  const { items, removeItem, clearCart, isOpen, setIsOpen } = useCart();
  const total = items.reduce((s, i) => s + i.price, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <motion.aside
            className={styles.drawer}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            <div className={styles.header}>
              <h3 className={styles.headerTitle}>
                <ShoppingBag size={20} /> Inquiry Cart
              </h3>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className={styles.empty}>
                <ShoppingBag size={48} strokeWidth={1} />
                <p>Your inquiry cart is empty</p>
                <span>Add packages to send a WhatsApp inquiry</span>
              </div>
            ) : (
              <>
                <div className={styles.itemList}>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      className={styles.item}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <img src={item.image} alt={item.title} className={styles.itemImg} />
                      <div className={styles.itemInfo}>
                        <h4>{item.title}</h4>
                        <span className={styles.itemPrice}>₹{item.price.toLocaleString("en-IN")}</span>
                      </div>
                      <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className={styles.footer}>
                  <div className={styles.totalRow}>
                    <span>Estimated Total</span>
                    <strong>₹{total.toLocaleString("en-IN")}</strong>
                  </div>
                  <a
                    href={generateWhatsAppURL(items)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappBtn}
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageCircle size={20} fill="#fff" />
                    Send Inquiry via WhatsApp
                  </a>
                  <button className={styles.clearBtn} onClick={clearCart}>
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
