"use client";
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ImageCarousel.module.css";

interface Props {
  images: string[];
  alt: string;
  size?: "card" | "modal";
  showThumbnails?: boolean;
}

export default function ImageCarousel({ images, alt, size = "card", showThumbnails = false }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => {
        const next = prev + dir;
        if (next < 0) return images.length - 1;
        if (next >= images.length) return 0;
        return next;
      });
    },
    [images.length]
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

  if (images.length === 0) return null;

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.carousel} ${size === "modal" ? styles.modal : styles.card}`}
        ref={containerRef}
      >
        <div className={styles.track}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={index}
              src={images[index]}
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
          </AnimatePresence>
        </div>

        {images.length > 1 && (
          <>
            <button
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={() => paginate(-1)}
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={() => paginate(1)}
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>

            {!showThumbnails && (
              <div className={styles.dots}>
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}

            <span className={styles.counter}>
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {showThumbnails && images.length > 1 && (
        <div className={styles.thumbStrip}>
          {images.map((src, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${i === index ? styles.thumbActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`View image ${i + 1}`}
            >
              <img src={src} alt={`${alt} thumb ${i + 1}`} className={styles.thumbImg} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
