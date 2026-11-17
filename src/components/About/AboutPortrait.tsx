"use client";

import Image from "next/image";
import { Star } from "@/components/Star/Star";
import { usePointerParallax } from "@/hooks/usePointerParallax";
import styles from "./AboutPortrait.module.css";

/** Laptop illustration with layered shapes that drift against each other as the pointer moves. */
export function AboutPortrait() {
  const ref = usePointerParallax<HTMLDivElement>();

  return (
    <div className={styles.portrait} ref={ref}>
      <div className={styles.fx} aria-hidden="true">
        <span className={styles.green} />
        <span className={styles.blob} />
        <span className={styles.ring} />
        <span className={styles.dots} />
        <Star className={`${styles.spark} ${styles.k1}`} />
        <Star className={`${styles.spark} ${styles.k2}`} />
        <Star className={`${styles.spark} ${styles.k3}`} />
      </div>
      <Image
        className={styles.img}
        src="/images/about.webp"
        alt="Illustration of Manvi working on a laptop"
        width={760}
        height={884}
      />
      <span className={`${styles.chip} ${styles.c1}`} aria-hidden="true">
        &lt;/&gt; Next.js
      </span>
      <span className={`${styles.chip} ${styles.c2}`} aria-hidden="true">
        Python
      </span>
      <span className={`${styles.sticker} ${styles.stk1}`}>Class of 2027</span>
      <span className={`${styles.sticker} ${styles.stk2}`}>Open to work</span>
    </div>
  );
}