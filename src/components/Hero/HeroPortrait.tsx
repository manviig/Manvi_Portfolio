"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Star } from "@/components/Star/Star";
import { usePointerParallax } from "@/hooks/usePointerParallax";
import { bubbleLines } from "@/data/site";
import styles from "./HeroPortrait.module.css";

/** Illustrated portrait. Layers drift with the pointer; clicking makes it hop and changes the speech bubble. */
export function HeroPortrait() {
  const wrapRef = usePointerParallax<HTMLDivElement>();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [line, setLine] = useState(0);

  const next = useCallback(() => {
    setLine((i) => (i + 1) % bubbleLines.length);
    const btn = buttonRef.current;
    if (btn && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      btn.classList.remove(styles.hop);
      void btn.offsetWidth; // restart the animation
      btn.classList.add(styles.hop);
    }
  }, []);

  return (
    <div className={styles.portrait} ref={wrapRef}>
      <span className={`${styles.pb} ${styles.pbB}`} aria-hidden="true" />
      <span className={`${styles.pb} ${styles.pbA}`} aria-hidden="true" />
      <button
        ref={buttonRef}
        type="button"
        className={styles.heroAv}
        onClick={next}
        aria-label="Click the portrait to hear something from Manvi"
      >
        <Image
          src="/images/hero.webp"
          alt="Illustrated portrait of Manvi: long black hair, black shirt, gold earrings"
          width={760}
          height={990}
          priority
        />
      </button>
      <button type="button" className={styles.bubble} onClick={next} aria-live="polite">
        <span>{bubbleLines[line]}</span>
        <small>click me</small>
      </button>
      <Star className={`${styles.star} ${styles.s1}`} />
      <Star className={`${styles.star} ${styles.s2}`} />
    </div>
  );
}
