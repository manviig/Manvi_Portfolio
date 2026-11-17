"use client";

import { useEffect, useRef } from "react";

/**
 * Writes --mx / --my (-0.5 to 0.5) on the element while the pointer moves over it,
 * and resets them on leave. CSS uses these variables to shift layers by different amounts.
 */
export function usePointerParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
      el.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return ref;
}
