"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, CalendarDays, Package } from "lucide-react";
import WhatsAppSvg from "./WhatsAppSvg";
import { WHATSAPP_NUMBER } from "@/data/catalog";
import styles from "./EnquiryFormModal.module.css";

interface EnquiryFormModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Called when the user closes the modal */
  onClose: () => void;
  /** Name of the package (shown as tag) */
  packageName: string;
  /** The pre-built WhatsApp message body (without customer info) */
  whatsappMessage: string;
}

export default function EnquiryFormModal({
  open,
  onClose,
  packageName,
  whatsappMessage,
}: EnquiryFormModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (open) {
      setName("");
      setPhone("");
      setEventDate("");
      setErrors({});
      setSubmitted(false);
    }
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const validate = useCallback(() => {
    const errs: Record<string, string> = {};

    if (!name.trim()) {
      errs.name = "Please enter your name";
    }

    const phoneClean = phone.replace(/\s/g, "");
    if (!phoneClean) {
      errs.phone = "Please enter your phone number";
    } else if (!/^\+?\d{10,15}$/.test(phoneClean)) {
      errs.phone = "Please enter a valid phone number";
    }

    if (!eventDate) {
      errs.eventDate = "Please select the event date";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }, [name, phone, eventDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validate()) return;

    // Format the event date nicely
    const dateObj = new Date(eventDate + "T00:00:00");
    const formattedDate = dateObj.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Build the final WhatsApp message with customer details prepended
    const customerInfo = [
      `👤 *Customer Name:* ${name.trim()}`,
      `📱 *Phone:* ${phone.trim()}`,
      `📅 *Event Date:* ${formattedDate}`,
    ].join("\n");

    const finalMessage = `${customerInfo}\n\n${"─".repeat(20)}\n\n${whatsappMessage}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMessage)}`,
      "_blank"
    );

    onClose();
  };

  // Get today's date string for min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>

            <div className={styles.content}>
              {/* Header */}
              <div className={styles.icon}>
                <CalendarDays size={24} />
              </div>
              <h3 className={styles.title}>Complete Your Enquiry</h3>
              <p className={styles.subtitle}>
                Fill in your details and we&apos;ll send the quotation via WhatsApp
              </p>

              <div className={styles.packageTag}>
                <Package size={13} />
                {packageName}
              </div>

              <div className={styles.divider} />

              {/* Form */}
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className={styles.field}>
                  <label className={styles.label}>
                    <User size={13} className={styles.labelIcon} />
                    Your Name
                  </label>
                  <input
                    type="text"
                    className={`${styles.input} ${submitted && errors.name ? styles.inputError : ""}`}
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                  />
                  {submitted && errors.name && (
                    <span className={styles.errorText}>{errors.name}</span>
                  )}
                </div>

                {/* Phone */}
                <div className={styles.field}>
                  <label className={styles.label}>
                    <Phone size={13} className={styles.labelIcon} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className={`${styles.input} ${submitted && errors.phone ? styles.inputError : ""}`}
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {submitted && errors.phone && (
                    <span className={styles.errorText}>{errors.phone}</span>
                  )}
                </div>

                {/* Event Date */}
                <div className={styles.field}>
                  <label className={styles.label}>
                    <CalendarDays size={13} className={styles.labelIcon} />
                    Event Date
                  </label>
                  <input
                    type="date"
                    className={`${styles.input} ${submitted && errors.eventDate ? styles.inputError : ""}`}
                    value={eventDate}
                    min={today}
                    onChange={(e) => setEventDate(e.target.value)}
                  />
                  {submitted && errors.eventDate && (
                    <span className={styles.errorText}>{errors.eventDate}</span>
                  )}
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <span className={styles.submitContent}>
                    <WhatsAppSvg size={18} />
                    Send Enquiry on WhatsApp
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
