"use client";
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useVideoBackHandler } from "@/hooks/useVideoBackHandler";
import styles from "./ImageCarousel.module.css";

interface Props {
  images: string[];
  videos?: string[];
  alt: string;
  size?: "card" | "modal";
  showThumbnails?: boolean;
}

type MediaItem = { type: "image"; src: string } | { type: "video"; src: string };

export default function ImageCarousel({ images, videos = [], alt, size = "card", showThumbnails = false }: Props) {
  // Merge images + videos into a single media array
  const media: MediaItem[] = [
    ...images.map((src): MediaItem => ({ type: "image", src })),
    ...videos.map((src): MediaItem => ({ type: "video", src })),
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const closeVideo = useCallback(() => setPlayingVideo(null), []);
  useVideoBackHandler(!!playingVideo, closeVideo);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => {
        const next = prev + dir;
        if (next < 0) return media.length - 1;
        if (next >= media.length) return 0;
        return next;
      });
    },
    [media.length]
  );

  const goTo = useCallback(
    (i: number) => {
      setDirection(i > index ? 1 : -1);
      setIndex(i);
    },
    [index]
  );

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) paginate(1);
    else if (info.offset.x > threshold) paginate(-1);
  };

  if (media.length === 0) return null;

  const current = media[index];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={`${styles.carousel} ${size === "modal" ? styles.modal : styles.card}`}
          ref={containerRef}
        >
          <div className={styles.track}>
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {current.type === "image" ? (
                <motion.img
                  key={`img-${index}`}
                  src={current.src}
                  alt={`${alt} ${index + 1}`}
                  className={styles.img}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={handleDragEnd}
                  loading="lazy"
                />
              ) : (
                <motion.div
                  key={`vid-${index}`}
                  className={styles.videoSlide}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                >
                  <video
                    src={current.src}
                    className={styles.img}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                  />
                  <button
                    className={styles.playOverlay}
                    onClick={() => setPlayingVideo(current.src)}
                    aria-label="Play video fullscreen"
                  >
                    <Play size={36} fill="#fff" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {media.length > 1 && (
            <>
              <button
                className={`${styles.arrow} ${styles.arrowLeft}`}
                onClick={() => paginate(-1)}
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className={`${styles.arrow} ${styles.arrowRight}`}
                onClick={() => paginate(1)}
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>

              {!showThumbnails && (
                <div className={styles.dots}>
                  {media.map((_, i) => (
                    <button
                      key={i}
                      className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}

              <span className={styles.counter}>
                {index + 1} / {media.length}
              </span>
            </>
          )}
        </div>

        {showThumbnails && media.length > 1 && (
          <div className={styles.thumbStrip}>
            {media.map((m, i) => (
              <button
                key={i}
                className={`${styles.thumb} ${i === index ? styles.thumbActive : ""}`}
                onClick={() => goTo(i)}
                aria-label={`View slide ${i + 1}`}
              >
                {m.type === "image" ? (
                  <img src={m.src} alt={`${alt} thumb ${i + 1}`} className={styles.thumbImg} />
                ) : (
                  <div className={styles.thumbVideo}>
                    <video src={m.src} className={styles.thumbImg} muted preload="metadata" />
                    <Play size={14} className={styles.thumbPlayIcon} />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen video player overlay */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div
            className={styles.videoOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPlayingVideo(null)}
          >
            <motion.div
              className={styles.videoPlayer}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.videoClose} onClick={() => setPlayingVideo(null)}>
                <X size={22} />
              </button>
              <video
                src={playingVideo}
                className={styles.videoFull}
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
