"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { portfolioImages } from "@/data/catalog";
import { liveVideos, liveImages } from "@/data/liveVideos";
import AnimatedSection from "./AnimatedSection";
import { useVideoBackHandler } from "@/hooks/useVideoBackHandler";
import styles from "./PortfolioSection.module.css";

// Merge categories from portfolio images, live videos, and live images
const allCats = new Set([
  ...portfolioImages.map((p) => p.category),
  ...liveVideos.map((v) => v.category),
  ...liveImages.map((i) => i.category),
]);
const categories = ["All", ...Array.from(allCats)];

export default function PortfolioSection() {
  const [active, setActive] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const closeVideo = useCallback(() => setPlayingVideo(null), []);
  const closeImage = useCallback(() => setExpandedImage(null), []);
  useVideoBackHandler(!!playingVideo, closeVideo);
  useVideoBackHandler(!!expandedImage, closeImage);

  const filteredImages = active === "All" ? portfolioImages : portfolioImages.filter((p) => p.category === active);
  const filteredVideos = active === "All" ? liveVideos : liveVideos.filter((v) => v.category === active);
  const filteredLiveImages = active === "All" ? liveImages : liveImages.filter((i) => i.category === active);

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

        {/* AI-generated portfolio images */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.src}
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className={styles.imgWrap} onClick={() => setExpandedImage(img.src)} style={{ cursor: "pointer" }}>
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

        {/* Live event media (videos + images) */}
        {(filteredVideos.length > 0 || filteredLiveImages.length > 0) && (
          <AnimatedSection delay={0.2}>
            <div className={styles.liveSection}>
              <div className={styles.liveHeader}>
                <h3 className={styles.liveTitle}>🎬 Live Event Highlights</h3>
                <p className={styles.liveSub}>Real moments from our events — scroll to explore, tap to play</p>
              </div>
              <div className={styles.videoRow}>
                {filteredVideos.map((vid, i) => (
                  <motion.div
                    key={`${vid.src}-${vid.category}-${i}`}
                    className={styles.videoCard}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <div
                      className={styles.videoWrap}
                      onClick={() => setPlayingVideo(vid.src)}
                    >
                      <video
                        src={vid.src}
                        className={styles.videoThumb}
                        muted
                        loop
                        playsInline
                        preload="none"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                      />
                      <div className={styles.videoPlayBtn}>
                        <Play size={28} fill="#fff" />
                      </div>
                      <div className={styles.videoInfo}>
                        <span className={styles.videoTitle}>{vid.title}</span>
                        <span className={styles.videoCat}>{vid.category}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {filteredLiveImages.map((img, i) => (
                  <motion.div
                    key={`limg-${img.src}-${i}`}
                    className={styles.liveImgCard}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (filteredVideos.length + i) * 0.06 }}
                    onClick={() => setExpandedImage(img.src)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={img.src} alt={img.title} className={styles.liveImgThumb} loading="lazy" />
                    <div className={styles.videoInfo}>
                      <span className={styles.videoTitle}>{img.title}</span>
                      <span className={styles.videoCat}>{img.category}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>

      {/* Fullscreen video player */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div
            className={styles.fullOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div
              className={styles.fullPlayer}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.fullClose} onClick={closeVideo}>
                <X size={22} />
              </button>
              <video
                src={playingVideo}
                className={styles.fullVideo}
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen image viewer */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            className={styles.fullOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <button className={styles.fullClose} onClick={closeImage} style={{ zIndex: 10 }}>
              <X size={22} />
            </button>
            <motion.img
              src={expandedImage}
              alt="Expanded view"
              className={styles.fullImage}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
