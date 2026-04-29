"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, Play, User, Quote, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import WhatsAppSvg from "./WhatsAppSvg";
import { submitReview, fetchReviews } from "@/lib/firebase";
import type { Review } from "@/lib/firebase";
import { customerVideos, WHATSAPP_NUMBER } from "@/data/catalog";
import styles from "./ReviewsSection.module.css";

/* ────────── Star Rating Component ────────── */
function StarRating({
  value,
  onChange,
  readOnly = false,
  size = 24,
}: {
  value: number;
  onChange?: (v: number) => void;
  readOnly?: boolean;
  size?: number;
}) {
  const [hovered, setHovered] = useState(0);

  return (
    <div
      className={`${styles.stars} ${readOnly ? styles.starsReadOnly : ""}`}
      onMouseLeave={() => !readOnly && setHovered(0)}
    >
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= (hovered || value);
        return (
          <motion.button
            key={i}
            type="button"
            className={`${styles.starBtn} ${filled ? styles.starFilled : ""}`}
            onMouseEnter={() => !readOnly && setHovered(i)}
            onClick={() => !readOnly && onChange?.(i)}
            whileHover={readOnly ? {} : { scale: 1.25 }}
            whileTap={readOnly ? {} : { scale: 0.9 }}
            disabled={readOnly}
            aria-label={`${i} star`}
          >
            <Star size={size} fill={filled ? "#d4a853" : "none"} stroke={filled ? "#d4a853" : "rgba(245,240,232,0.25)"} />
          </motion.button>
        );
      })}
    </div>
  );
}

/* ────────── Single Review Card ────────── */
function ReviewCard({ review, index }: { review: Review; index: number }) {
  const initials = review.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const dateStr = review.createdAt
    ? new Date(review.createdAt.seconds * 1000).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Just now";

  return (
    <motion.div
      className={styles.reviewCard}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className={styles.reviewQuote}>
        <Quote size={20} />
      </div>
      <div className={styles.reviewHeader}>
        <div className={styles.avatar}>{initials}</div>
        <div className={styles.reviewMeta}>
          <span className={styles.reviewName}>{review.name}</span>
          <span className={styles.reviewDate}>{dateStr}</span>
        </div>
      </div>
      <StarRating value={review.rating} readOnly size={16} />
      <p className={styles.reviewText}>{review.comment}</p>
    </motion.div>
  );
}

/* ────────── Video Card ────────── */
function VideoCard({
  video,
  index,
}: {
  video: (typeof customerVideos)[0];
  index: number;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      className={styles.videoCard}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {playing ? (
        <video
          className={styles.videoPlayer}
          src={video.videoUrl}
          controls
          autoPlay
          playsInline
        />
      ) : (
        <button
          className={styles.videoThumb}
          onClick={() => setPlaying(true)}
          aria-label={`Play ${video.title}`}
        >
          <video
            src={video.videoUrl}
            className={styles.videoPreview}
            muted
            loop
            playsInline
            preload="none"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
          />
          <div className={styles.playOverlay}>
            <motion.div
              className={styles.playBtn}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={28} fill="#fff" />
            </motion.div>
          </div>
          <span className={styles.videoTitle}>{video.title}</span>
          <span className={styles.videoCustomer}>{video.customerName}</span>
        </button>
      )}
    </motion.div>
  );
}

/* ────────── Main Reviews Section ────────── */
export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const loadReviews = useCallback(async () => {
    setLoading(true);
    const data = await fetchReviews(30);
    setReviews(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || rating === 0) return;

    setSubmitting(true);
    const success = await submitReview({ name: name.trim(), rating, comment: comment.trim() });

    if (success) {
      setSubmitted(true);
      setName("");
      setRating(0);
      setComment("");
      // Reload reviews to show the new one
      await loadReviews();
      setTimeout(() => setSubmitted(false), 4000);
    }
    setSubmitting(false);
  };

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
      : "0.0";

  return (
    <section id="reviews" className={styles.section}>
      <div className="section-container">
        {/* ── Video Testimonials ── */}
        <AnimatedSection>
          <h2 className="section-title">Customer Stories</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Real experiences from our happy customers — their joy is our greatest reward
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className={styles.videoRow}>
            {customerVideos.map((v, i) => (
              <VideoCard key={v.id} video={v} index={i} />
            ))}
          </div>
        </AnimatedSection>

        {/* ── Reviews Display ── */}
        <AnimatedSection delay={0.15}>
          <div className={styles.reviewsHeader}>
            <div className={styles.reviewsHeaderLeft}>
              <MessageCircle size={22} className={styles.reviewsIcon} />
              <h3 className={styles.reviewsTitle}>Customer Reviews</h3>
            </div>
            {reviews.length > 0 && (
              <div className={styles.ratingOverview}>
                <span className={styles.avgRating}>{avgRating}</span>
                <StarRating value={Math.round(Number(avgRating))} readOnly size={18} />
                <span className={styles.reviewCount}>({reviews.length} reviews)</span>
              </div>
            )}
          </div>
        </AnimatedSection>

        {loading ? (
          <div className={styles.loadingWrap}>
            <motion.div
              className={styles.loadingDot}
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <span className={styles.loadingText}>Loading reviews...</span>
          </div>
        ) : reviews.length > 0 ? (
          <div className={styles.reviewsGrid}>
            {reviews.map((r, i) => (
              <ReviewCard key={r.id || i} review={r} index={i} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyReviews}>
            <User size={40} className={styles.emptyIcon} />
            <p>No reviews yet — be the first to share your experience!</p>
          </div>
        )}

        {/* ── Feedback Form ── */}
        <AnimatedSection delay={0.2}>
          <div className={styles.feedbackCard}>
            <div className={styles.feedbackHeader}>
              <h3 className={styles.feedbackTitle}>Share Your Experience</h3>
              <p className={styles.feedbackSubtitle}>
                Your feedback helps us create even more magical moments ✨
              </p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  className={styles.successMsg}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key="success"
                >
                  <span className={styles.successEmoji}>🎉</span>
                  <span>Thank you for your review! It&apos;s now live.</span>
                </motion.div>
              ) : (
                <motion.form
                  className={styles.feedbackForm}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key="form"
                >
                  <div className={styles.formRow}>
                    <label className={styles.formLabel}>Your Rating</label>
                    <StarRating value={rating} onChange={setRating} size={30} />
                  </div>

                  <div className={styles.formRow}>
                    <label className={styles.formLabel} htmlFor="review-name">
                      Your Name
                    </label>
                    <input
                      id="review-name"
                      type="text"
                      className={styles.formInput}
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      maxLength={50}
                    />
                  </div>

                  <div className={styles.formRow}>
                    <label className={styles.formLabel} htmlFor="review-comment">
                      Your Feedback
                    </label>
                    <textarea
                      id="review-comment"
                      className={styles.formTextarea}
                      placeholder="Tell us about your experience..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      required
                      rows={4}
                      maxLength={500}
                    />
                    <span className={styles.charCount}>{comment.length}/500</span>
                  </div>

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={submitting || !name.trim() || !comment.trim() || rating === 0}
                  >
                    {submitting ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{ display: "inline-flex" }}
                      >
                        ⏳
                      </motion.span>
                    ) : (
                      <>
                        <Send size={16} /> Submit Review
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* WhatsApp alternative */}
            <div className={styles.feedbackAlt}>
              <span className={styles.feedbackAltText}>or share directly via</span>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "⭐ Hi! I'd like to share my feedback about my LK Events experience..."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.feedbackWaBtn}
              >
                <WhatsAppSvg size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
