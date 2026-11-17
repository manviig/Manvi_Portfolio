import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id?: string;
  tone: "green" | "cream" | "black";
  children: ReactNode;
  label?: string;
  className?: string;
  /** Vertical padding; the hero turns it off because its header sets its own spacing. */
  padded?: boolean;
}

/** A full-bleed coloured band. Put a <Container> inside it. */
export function Section({ id, tone, children, label, className, padded = true }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={[styles.band, padded ? styles.pad : "", styles[tone], className ?? ""].filter(Boolean).join(" ")}
    >
      {children}
    </section>
  );
}

interface SectionHeadingProps {
  children: ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className={styles.headRow}>
      <h2>{children}</h2>
    </div>
  );
}
