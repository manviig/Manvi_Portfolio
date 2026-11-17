import type { ReactNode } from "react";
import { Trail } from "./Trail";
import styles from "./GuideZone.module.css";

/** Wraps every band below the hero so the trail can run alongside them. */
export function GuideZone({ children }: { children: ReactNode }) {
  return (
    <div className={styles.zone} id="zone">
      <Trail />
      {children}
    </div>
  );
}
