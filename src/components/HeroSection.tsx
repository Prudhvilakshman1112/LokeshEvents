"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import styles from "./HeroSection.module.css";

/* Deterministic pseudo-random so SSR and client always match */
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

export default function HeroSection() {
  const titleWords = ["Create", "Magical", "Moments"];

  /* Compute once; values are stable across server & client */
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        left: Math.round(seededRandom(i * 3 + 1) * 10000) / 100,
        bottom: Math.round(seededRandom(i * 3 + 2) * 3000) / 100,
        xDrift: Math.round((seededRandom(i * 3 + 3) - 0.5) * 6000) / 100,
        duration: Math.round((3 + seededRandom(i * 7) * 3) * 100) / 100,
        delay: Math.round(seededRandom(i * 11) * 500) / 100,
      })),
    []
  );

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgWrap}>
        <img src="/images/hero-bg.png" alt="" className={styles.bgImg} />
        <div className={styles.overlay} />
      </div>

      <div className={styles.particles}>
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className={styles.particle}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -120],
              x: [0, p.xDrift],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeOut",
            }}
            style={{ left: `${p.left}%`, bottom: `${p.bottom}%` }}
          />
        ))}
      </div>

      <div className={styles.content}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Sparkles size={14} />
          <span>Vizag&apos;s Premier Event Planners</span>
        </motion.div>

        <h1 className={styles.title}>
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              className={styles.word}
              initial={{ opacity: 0, y: 40, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          From surprise celebrations to candlelight dinners on Beach Road — we turn your dreams into unforgettable memories in Visakhapatnam.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          <a href="#catalogs" className="btn-primary">
            <span>Explore Our Packages</span>
          </a>
          <a href="#portfolio" className="btn-outline">
            View Portfolio
          </a>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className={styles.stat}><strong>500+</strong><span>Events Done</span></div>
          <div className={styles.statDiv} />
          <div className={styles.stat}><strong>7</strong><span>Unique Packages</span></div>
          <div className={styles.statDiv} />
          <div className={styles.stat}><strong>4.9★</strong><span>Client Rating</span></div>
        </motion.div>
      </div>

      <motion.a
        href="#portfolio"
        className={styles.scrollHint}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
}
