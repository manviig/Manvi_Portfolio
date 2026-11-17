"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Trail.module.css";

/**
 * A dotted trail with a small avatar that sways as you scroll. It also marks which section
 * ("node") the avatar is level with, by setting data-on on that element.
 */
export function Trail() {
  const walkerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const walker = walkerRef.current;
    if (!walker) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-guide-node]"));
    let current = -1;
    let idle: ReturnType<typeof setTimeout> | undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const mark = () => {
      const cy = window.innerHeight * 0.42 + 29;
      let active = -1;
      nodes.forEach((el, i) => {
        if (el.getBoundingClientRect().top + 19 <= cy) active = i;
      });
      if (active < 0) active = 0;
      if (active !== current) {
        current = active;
        nodes.forEach((el, i) => {
          el.dataset.on = String(i === active);
        });
      }
    };

    const onScroll = () => {
      if (!reduce) {
        const t = window.scrollY / 26;
        walker.style.setProperty("--rot", `${(Math.sin(t) * 9).toFixed(1)}deg`);
        walker.style.setProperty("--bob", `${(-Math.abs(Math.cos(t)) * 5).toFixed(1)}px`);
        clearTimeout(idle);
        idle = setTimeout(() => {
          walker.style.setProperty("--rot", "0deg");
          walker.style.setProperty("--bob", "0px");
        }, 200);
      }
      mark();
    };

    mark();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", mark);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", mark);
      clearTimeout(idle);
    };
  }, []);

  return (
    <div className={styles.trail} aria-hidden="true">
      <div className={styles.walker} ref={walkerRef}>
        <Image src="/images/face.webp" alt="" width={58} height={58} />
      </div>
    </div>
  );
}