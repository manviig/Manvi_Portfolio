import type { ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  /** Marks this block as a stop on the walking guide's trail. */
  node?: boolean;
  className?: string;
}

/** Centres content up to 1520px with safe-area aware gutters. */
export function Container({ children, node = false, className }: ContainerProps) {
  const cls = [styles.container, node ? styles.node : "", className ?? ""]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls} data-container="" {...(node ? { "data-guide-node": "" } : {})}>
      {children}
    </div>
  );
}
